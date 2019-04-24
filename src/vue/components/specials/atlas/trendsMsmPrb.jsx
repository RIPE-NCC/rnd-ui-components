const TRENDS_API_SERVER = "trends.atlas.ripe.net";
const GRAPH_HOR = 350;
const GRAPH_VERT = 273;
const GRAPH_OFFSET_HOR = 50;
const TICK_SEPA_MIN = 5;
const TICK_SEPA_MAX = 12;

import { loadTrendsForMsmAndProbe } from "@ripe-rnd/ui-datastores";

const calculateTickSeparator = ({ minTimeStamp, maxTimeStamp, ticksNo }) => {
  const ticksPSepRecursor = (ppsep, psepmin, divider) => {
    console.log(ppsep);
    console.log(psepmin);
    // 1,2,4,8,12,24 hour preference
    const divSeq = [30, 90, 180, 240, 336, 672, 2688];
    divider = divider || divSeq[0];

    // check if we've reached maximal flattening,
    // one number followed by only zeros, i.e. 10 or 200 etc.
    // if (Math.floor(ppsep / divider) * divider === ppsep) {
    //     return ppsep;
    // }
    if (!ppsep) {
      return divider;
    }

    if (divider >= psepmin && divider <= ppsep) {
      return divider;
    }

    divider = divSeq[divSeq.indexOf(divider) + 1];
    return ticksPSepRecursor(
      divSeq[divSeq.indexOf(divider) + 1],
      psepmin,
      divider
    );
  };
  const sT =
    (new Date(maxTimeStamp).getTime() - new Date(minTimeStamp).getTime()) /
    1000;
  const sS = GRAPH_HOR - GRAPH_OFFSET_HOR;
  const ticksPSepMin = (ticksNo / sS) * TICK_SEPA_MIN;
  const ticksPSepMax = (ticksNo / sS) * TICK_SEPA_MAX;
  let ticksPSep = ticksPSepRecursor(ticksPSepMax, ticksPSepMin);
  console.log(
    `${ticksPSepMin} - ${ticksPSepMax} -> ${ticksPSep} ${(sS / ticksNo) *
      ticksPSep}`
  );
  return [
    ticksPSep, // tick per separator line,
    Math.round(sT / ticksNo) * ticksPSep, // duration per separator in seconds
    Math.floor(ticksNo / ticksPSep) + 1, // number of separator lines
    sS / ticksNo // pixels per tick
  ];
};

export function UnStyledTrendsMsmPrbComponent(style) {
  return {
    props: {
      msmId: Number,
      prbId: Number
    },
    data: () => ({ status: "no info", trends: 0 }),
    methods: {
      loadData() {
        console.log("loading....");
        this.status = "crunching just for you...";
        loadTrendsForMsmAndProbe({
          apiServer: TRENDS_API_SERVER,
          msmId: this.msmId,
          prbId: this.prbId
        })
          .then(r => {
            console.log("gotcha");
            this.status = "done";
            console.log(r);
            // const result = { ...r };
            const [ticksPSep, timePSep, sepNo, ppt] = calculateTickSeparator(r);
            this.trends = { ...r, ticksPSep, timePSep, sepNo, ppt };
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    render(h) {
      // until https://github.com/Microsoft/TypeScript/issues/7411 gets reopened & fixed
      // the ts compiler will not allow the syntax v-on:click=... synrax (the colon is the culprit).
      // The babel plugin @vue/babel-helper-vue-jsx-merge-props will however compile it just fine.
      // To avoid the red curly lines use this syntax for now.
      // This is the equivalent of v-on:click = {this.loadData} as an attribute to the <button> component
      const listeners = { on: { click: this.loadData } };
      return (
        <div class={style.trendsbox}>
          <div>{this.status}</div>
          <button class={style.bouton} {...listeners}>
            load trends for measurement {this.msmId} and probe {this.prbId}
          </button>
          {this.trends && (
            <div>
              <ul>
                <li>number of ticks: {this.trends.ticksNo}</li>
                <li>time of first tick received: {this.trends.minTimeStamp}</li>
                <li>time of last tick received: {this.trends.maxTimeStamp}</li>
                <li>number of segments: {this.trends.segments.length}</li>
                <li>number of states: {this.trends.statesCount}</li>
                <li>ticks per separator line: {this.trends.ticksPSep}</li>
                <li>
                  duration per separator: {this.trends.timePSep / 3600} hour
                </li>
              </ul>
              <div class={style.lastminrtt}>
                {(this.trends.lastMinRtt && `${this.trends.lastMinRtt} ms `) ||
                  "no result"}
              </div>
              <svg
                version="1.1"
                x="0px"
                y="0px"
                width="350px"
                height="273.5px"
                viewBox="0 0 353 273.5"
                style="enable-background:new 0 0 353 273.5;"
              >
                {[...Array(this.trends.sepNo)].map((_, i) => {
                  const t = i * this.trends.ticksPSep;
                  const x = t * this.trends.ppt + GRAPH_OFFSET_HOR;
                  const s = this.trends.states.find(
                    state =>
                      state.id ===
                      (
                        this.trends.segments.find(
                          seg => seg.start <= t && seg.stop >= t
                        ) || { state: null }
                      ).state
                  ) || { rtt_summary: { min: 0, max: 0 } };
                  const y1 = GRAPH_VERT - (s.rtt_summary.min || 0);
                  const y2 = GRAPH_VERT - (s.rtt_summary.max || GRAPH_VERT);

                  return (
                    <g>
                      {i % 4 === 0 && (
                        <line
                          class={style.timeraster}
                          x1={x}
                          y1={0}
                          x2={x}
                          y2={GRAPH_VERT}
                        />
                      )}
                      <line
                        class={style.timeline}
                        x1={x}
                        y1={y1}
                        x2={x}
                        y2={y2}
                      />
                    </g>
                  );
                })}
                {this.trends.segments.map(s => {
                  const x1 =
                    s.start * this.trends.ppt + GRAPH_OFFSET_HOR ||
                    GRAPH_OFFSET_HOR;
                  const x2 = s.stop * this.trends.ppt + GRAPH_OFFSET_HOR;
                  const y =
                    GRAPH_VERT -
                    this.trends.states.find(state => state.id === s.state)
                      .rtt_summary.median;
                  return (
                    y !== GRAPH_VERT &&
                    ((x2 - x1 > 5 && (
                      <line
                        class={`${(this.trends.states[0].id === s.state &&
                          style.longeststate) ||
                          style.stateline}`}
                        x1={x1}
                        y1={y}
                        x2={x2}
                        y2={y}
                      />
                    )) || (
                      <line
                        class={style.anomaly}
                        x1={x1}
                        y1={y}
                        x2={x2}
                        y2={y}
                      />
                    ))
                  );
                })}
                <g>
                  <path d="M352,1v271H1V1H352 M353,0H0v273h353V0L353,0z" />
                  <line
                    class={style.outline}
                    x1="50"
                    y1="0.5"
                    x2="50"
                    y2="273.5"
                  />
                </g>
              </svg>
            </div>
          )}
        </div>
      );
    }
  };
}
