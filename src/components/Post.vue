<template>
  <div class="card" @click="flipCard">
    <p v-if="!showOtherSide">#{{ postInfo.id || 0 }}</p>
    <p v-if="showOtherSide">Made by {{ postInfo.userId || 0 }}</p>
  </div>
</template>

<script>
export default {
  props: {
    postInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      showOtherSide: false
    }
  },
  methods: {
    flipCard() {
      this.showOtherSide = !this.showOtherSide
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  min-width: 50px;
  min-height: 50px;
  width: 100%;
  -webkit-box-shadow: 2px 5px 15px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 5px 15px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 5px 15px -8px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  padding: 5px 5px;
  font-size: 11px;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
}
</style>
