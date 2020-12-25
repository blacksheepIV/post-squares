<template>
  <div class="card">
    <h2>#{{ postInfo.id || 0 }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    postInfo: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  min-width: 50px;
  width: 100%;
  -webkit-box-shadow: 2px 5px 15px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 5px 15px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 5px 15px -8px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  padding: 5px 5px;
}
</style>
