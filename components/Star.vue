<template>
  <circle
    :class="['cv-star-decoration', { 'cv-star-decoration--animation': animation }]"
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
        fill: $light-blue;
        transform: scale3d(2, 2, 1);
      }
    }
    position: absolute;
    fill: $white;
    border-radius: 50%;
    @media screen and (min-width: $breakpoint__small-desktop--min) {
      &--animation {
        will-change: opacity, background-color, transform;
        animation: blinking;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        transform-origin: var(--top-position) var(--left-position);
        transition-property: all;
        transition-duration: 0.5s;
      }
    }
    @media screen and (max-width: $breakpoint__tablet--max) {
      &:not(&--animation) {
        display: none;
      }
    }
  }
</style>
