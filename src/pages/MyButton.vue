<template>
  <div class="my-button">
    <button @click="increment">按钮</button>
    {{innerCount}}
  </div>
</template>
<script>
export default {
  name: 'MyButton',
  data () {
    return {
      innerCount: 0
    }
  },
  methods: {
    increment () {
      this.innerCount += 1
      this.$emit('add', this.innerCount)
    }
  }
}
</script>
