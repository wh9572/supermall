<template>
  <div id="app">
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>

  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;

    box-shadow: 0 -1px 10px rgba(100, 100, 100, .3);
  }

</style>
