<template>
  <div id="datetime-wrapper" :class="setSizeClass('wrapper')">
    <form @submit="onSubmit">
      <span class="input-hint" v-if="state.underEdit">Enter to submit</span>
      <input
        ref="datetime"
        type="text"
        v-model="state.value"
        @input="handleChange"
        :class="setSizeClass('input')"
        id="datetime-input"
      >

      <svg
        v-if="state.underEdit"
        class="cancel-icon"
        :class="[setSizeClass('icon'), setIconOffset('cancel')]"
        @click="discardInput"
      >
        <slot name="icon-cancel">
          <IconX
            class="cancel-icon"
            :class="[setSizeClass('icon'), setIconOffset('cancel')]"
            :click="discardInput"
            :size="size === 'l' ? 48 : (size === 'm' ? 36 : 20)"
            :viewBox="setSvgViewBox()"
          />
        </slot>
      </svg>
      <svg
        v-else
        class="edit-icon"
        :class="[setSizeClass('icon'), setIconOffset('edit')]"
        @click="focus"
      >
        <slot name="icon-edit">
          <IconEdit
            class="edit-icon"
            :class="[setSizeClass('icon'), setIconOffset('edit')]"
            :click="focus"
            :size="size === 'l' ? 48 : (size === 'm' ? 36 : 20)"
            :viewBox="setSvgViewBox()"
          />
        </slot>
      </svg>

      <div v-if="state.inputError" class="input-info">{{ state.inputError }}</div>
    </form>
  </div>
</template>

<script>
const IconEdit = {
  props: ['size', 'color', 'click'],
  template: `
    <svg
      :width="this.size || 36"
      xmlns="http://www.w3.org/2000/svg"
      :height="this.size || 36"
      fill="none"
      :stroke="this.color || '#fff'"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      @click="this.click"
    >
      <polygon points="14 2 18 6 7 17 3 17 3 13 14 2" />
      <line x1="3" y1="22" x2="21" y2="22" />
    </svg>
  `
}
const IconX = {
  props: ['size', 'color', 'click'],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="this.size || 36"
      :height="this.size || 36"
      fill="none"
      :stroke="this.color || '#fff'"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      @click="this.click"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  `
}
export default {
  name: 'DateTime',
  components: {
    IconEdit,
    IconX
  },
  props: {
    timestamp: {
      type: Number,
      required: true
    },
    submit: {
      type: Function,
      required: true
    },
    controlname: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: 'm'
    }
  },
  data () {
    return {
      state: {
        underEdit: false,
        value: this.representTimeStamp(this.timestamp),
        inputError: null
      }
    }
  },
  methods: {
    representTimeStamp (ts) {
      const dateTime = new Date(ts)
      // don't show milliseconds
      const ms = /\.[0-9]{3}/g
      return dateTime.toISOString().replace(ms, '')
    },
    onSubmit (e) {
      e.preventDefault()
      let newDateTime = this.$refs.datetime.value
      // add UTC timezone code at the end if missing
      const isUTC = newDateTime.match(/^.*Z{1}$/)
      if (!isUTC) {
        newDateTime += 'Z'
      }
      const iso8601re = /^(\d{4})(-(\d{2}))??(-(\d{2}))??(T(\d{2}):(\d{2})(:(\d{2}))??(\.(\d+))??(([+-]{1}\d{2}:?\d{2})|Z)??)??$/gm
      const isIsoDate = newDateTime.match(iso8601re)
      const validUnixTimeStamp = new Date(newDateTime).getTime()
      if (!isIsoDate || !validUnixTimeStamp) {
        this.focus()
        this.state.inputError = 'Invalid input.'
        return
      }
      if (this.controlname) {
        this.submit({ controlname: this.controlname, timestamp: validUnixTimeStamp })
      } else {
        this.submit(validUnixTimeStamp)
      }
      this.loseFocus()
    },
    focus () {
      this.$refs.datetime.focus()
      this.$refs.datetime.select()
    },
    loseFocus () {
      this.state.underEdit = false
      this.$refs.datetime.blur()
      this.state.inputError = null
    },
    handleChange (e) {
      if (e.target.value !== this.timestamp) {
        this.state.underEdit = true
      }
    },
    discardInput () {
      this.state.value = this.representTimeStamp(this.timestamp)
      this.loseFocus()
    },
    setSizeClass (element) {
      return `${element}-${this.size}`
    },
    setIconOffset (type) {
      return `${type}-offset-${this.size}`
    },
    setSvgViewBox () {
      return this.size === 's'
        ? '0 0 48 48'
        : (
          this.size === 'm'
            ? '0 0 36 36'
            : '-2 0 36 36'
        )
    }
  }
}

</script>

<style scoped>
#datetime-wrapper * {
  box-sizing: border-box;
}

form {
  position: relative;
  margin-right: auto;
  padding: 0;
  font-family: 'Menlo', monospace;
}

input[type="text"],
input[type="text"]:invalid {
  font-family: inherit;
  box-shadow: none;
  border: 1px solid #bdc3c7;
  outline: none;
  width: 100%;
  margin-bottom: 0;
  background-color: #FAFAFA;
}

svg[class*="-icon"] {
  background-color: #070038;
  /* right: -36px; */
  position: absolute;
  stroke: white;
  stroke-width: 2;
  color: white;
  padding: 6px;
}

svg[class*="-icon"]:hover {
  cursor: pointer;
}

svg.edit-icon {
  background-color: #070038;
}

svg.cancel-icon {
  background-color: #A94442;
}

svg.submit-icon {
  background-color: #11a900;
}

.input-info {
  position: absolute;
  font-size: 0.7em;
  font-weight: bold;
  color: #A94442;
}

.input-hint {
  position: absolute;
  font-size: 0.7em;
  top: -0.7em;
}
.wrapper-s {
  font-size: 12px;
  min-width: 170px;
}

.wrapper-m {
  font-size: 14px;
  min-width: 230px;
}

.wrapper-l {
  font-size: 20px;
  min-width: 320px;
}

.input-s {
  margin-top: 4px;
  padding: 4px 0px;
  height: 20px;
}

.input-m {
  margin-top: 6px;
  padding: 6px 12px;
  height: 36px;
}

.input-l {
  margin-top: 8px;
  padding: 8px 12px;
  height: 48px;
}

.icon-s {
  top: 4px;
  width: 20px;
  height: 20px;
}

.icon-m {
  top: 6px;
  width: 36px;
  height: 36px;
}

.icon-l {
  top: 8px;
  width: 48px;
  height: 48px;
}
.edit-offset-s,
.edit-offset-m,
.edit-offset-l {
  right: 0px;
}

.cancel-offset-s {
  right: 0px;
}

.submit-offset-s {
  right: 20px;
}

.cancel-offset-m {
  right: 0px;
}

.submit-offset-m {
  right: -36px;
}

.cancel-offset-l {
  right: 0px;
}

.submit-offset-l {
  right: 48px;
}
</style>
