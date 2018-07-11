//This is an unlimited depth recursive reducer, that builds an aggregated object
// based on the array `probeAggratorFields`.
// probeAgrragatorFields should have the format:
// [ { fieldName: <PROBEFIELDNAME>, titleFieldNAme: <ANOTHERPROBEFIELDNAME> }, {...}]
//
// It goes over the attributes in the array and returns an object of the form:
// { aggregatorFieldValue0: aggregatorFieldValue1: [prbId, prbId, ...] } }
//
// So, only the deepest level are Arrays, all levels above are objects, keyed on the
// aggregates values.

export const aggregationReducer = ({ probeAggregatorFields, context }) => {
  const fieldReducer = fieldIdx => (acc, prb, _, allProbes) => {
    const field = probeAggregatorFields[fieldIdx],
      maxReached = fieldIdx === probeAggregatorFields.length - 1,
      fieldValue = prb[field.fieldName],
      titleFieldName = field.titleFieldName;
    //prb.countryNameLong = context.countryNames[prb.countryCode];
    return {
      ...acc,
      [prb[field.fieldName]]:
        (maxReached && [
          ...((acc[prb[field.fieldName]] && acc[prb[field.fieldName]]) || []),
          prb.id
        ]) ||
        allProbes
          .filter(prb => prb[field.fieldName] === fieldValue)
          .reduce(fieldReducer(fieldIdx + 1), {}) ||
        {}
    };
  };
  return fieldReducer(0);
};

// These are actually sort function factories
// They take some context for the sorting as an argument
// and return the sort function.

export const sortByAs = ({ ipVersions }) => {
  const ipVersion = (ipVersions.has("4") && "4") || "6";
  return (prbA, prbB) => {
    const getAs = prb => (ipVersion === "4" && prb.asv4) || prb.asv6,
      sortConcat = prb => `${getAs(prb)}.${prb.id}`;
    return parseFloat(sortConcat(prbA)) - parseFloat(sortConcat(prbB));
  };
};

export const sortByCountryLexically = ({ ipVersions }) => (prbA, prbB) => {
  const ipVersion = (ipVersions.has("4") && "4") || "6";
  const ccSort = prb =>
      prb.countryCode.charCodeAt(0) * 100 + prb.countryCode.charCodeAt(1),
    asnSort = prb => ((ipVersion === "4" && prb.asv4) || prb.asv6) / 100000;
  const sortConcat = prb =>
    (ccSort(prb) + asnSort(prb)) * 100000 + prb.id / 1000000;
  return (sortConcat(prbA) > sortConcat(prbB) && 1) || -1;
};

// map-filter transducer that takes
// one from each value of `prbField`.
export const transduceOneFrom = prbField => (acc, prb, _, probes) =>
  (!probes.some(
    aPrb =>
      aPrb[prbField] === prb[prbField] && acc.some(bPrb => bPrb === aPrb.id)
  ) && [...acc, prb.id]) ||
  acc;
