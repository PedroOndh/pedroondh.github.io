<template>
  <circle
    :class="['cv-star-decoration', {'cv-star-decoration--animation': animation}]"
    fill="white"
    :cx="topPosition"
    :cy="leftPosition"
    :r="radius"
    :style="`--top-position: ${topPosition}; --left-position: ${leftPosition}; animation-delay: ${animationDelay};`"
  />
</template>

<script lang="ts" setup>
interface Props {
  animation?: boolean;
}

withDefaults(defineProps<Props>(), {
  animation: false
});

  const topPosition = `${Math.random() * 100}%`;
  const leftPosition = `${Math.random() * 100}%`;
  const radius = `${Math.max(1, Math.random() * 3)}px`;
  const animationDelay = `${Math.random() * 4}s`;
</script>

<style lang="scss" scoped>
  .cv-star-decoration {
    @keyframes blinking {
      0%,
      100% {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
      50% {
        opacity: 0.8;
        transform: scale3d(2, 2, 1);
      }
    }
    position: absolute;
    background-color: $white;
    border-radius: 50%;
    &--animation {
      will-change: opacity, transform;
      animation: blinking;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      transform-origin: var(--top-position) var(--left-position);
      transition-property: opacity, transform;
      transition-duration: 0.5s;
    }
  }
</style>
