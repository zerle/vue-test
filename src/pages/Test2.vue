<template>
  <div class="wrapper">
    <label for="input">输入</label>
    <input type="text" id="input"  v-model="inputValue">
    <p>输出: {{outputValue}}</p>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  props: {
    needReverse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputValue: ''
    }
  },
  computed: {
    outputValue () {
      return this.needReverse ? ([...this.inputValue]).reverse().join('') : this.inputValue
    }
  },
  watch: {
    inputValue: function (newValue, oldValue) {
      if (newValue.trim().length > 0 && newValue !== oldValue) {
        this.printNewValue(newValue)
      }
    }
  },
  methods: {
    printNewValue (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
  .wrapper {
    width: 300px;
    margin: 0 auto;
    text-align: left;
  }
</style>
