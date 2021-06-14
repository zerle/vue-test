<template>
  <div class="outer">
    <p v-for="message in messages" :key="message" >{{message}}</p>
    <my-button @add="addCounter"></my-button>
    <div>
      <span>子组件传过来的值==== {{count}}</span>
    </div>
  </div>
</template>

<script>
import MyButton from '@/pages/MyButton'
export default {
  // props: ['messages'],
  props: {
    messages: {
      type: Array,
      required: true,
      validator: (messages) => messages.length > 1,
      default () {
        return [0, 2]
      }
    }
  },
  data () {
    return {
      count: ''
    }
  },
  components: {
    MyButton
  },
  methods: {
    addCounter (val) {
      this.count = val
    }
  }
}
</script>
<style scoped>
  .outer {
    background: #3679;
  }
</style>
