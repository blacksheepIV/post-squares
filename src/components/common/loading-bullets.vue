<template>
  <div class="loading" :style="{ color }">
    <span
      v-for="index of 3"
      :key="'loading-' + index"
      :class="`loading__bullet loading__bullet--${index}`"
      :style="{
        width: `${size}px`,
        height: `${size}px`,
        margin: `0 ${gap / 2}px`
      }"
    />
  </div>
</template>

<script>
export default {
  name: 'LoadingBullet',
  props: {
    color: {
      type: String,
      default: '#182228'
    },
    gap: {
      type: Number,
      default: 3
    },
    size: {
      type: [Number, String],
      default: 7
    }
  }
}
</script>

<style lang="scss" scoped>
$duration: 0.7s;

.loading {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &__bullet {
    $delay: ($duration / 3);
    border-radius: 50%;
    opacity: 1;
    background-color: currentColor;
    animation: {
      name: bulletloading;
      duration: 0.9s;
      iteration-count: infinite;
      timing-function: linear;
    }
    &--2 {
      animation-delay: $delay;
    }
    &--3 {
      animation-delay: $delay * 2;
    }
  }
}
@keyframes bulletloading {
  50%,
  75% {
    opacity: 0.12;
  }
  33% {
    opacity: 0.22;
  }
  0%,
  100% {
    opacity: 1;
  }
}
</style>
