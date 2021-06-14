<template>
  <div>
    <header class="list-header">
      <slot name="header">This is a default header</slot>
    </header>
    <ul class="list-messages">
      <slot />
    </ul>
  </div>
</template>
<script>
export default {
  name: 'MessageList',
  data () {
    return {

    }
  }
}
</script>
