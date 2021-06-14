<template>
  <div>
    <message-list>
      <header slot="header">Awesome header</header>
      {{message}}
    </message-list>
  </div>
</template>
<script>
import MessageList from './MessageList'
export default {
  name: 'Test4',
  data () {
    return {
      message: '我是test4的内容'
    }
  },
  components: {
    MessageList
  }
}
</script>
