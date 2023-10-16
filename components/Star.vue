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
  const radius = `${Math.max(1, Math.random() * 4)}px`;
  const animationDelay = `${Math.random() * 4}s`;
</script>

<style lang="scss" scoped>
  .cv-star-decoration {
    position: absolute;
    fill: $white;
    opacity: 0.8;
    transform-origin: var(--top-position) var(--left-position);
    transition-property: transform;
    transition-duration: 0.5s;
    @media screen and (max-width: $breakpoint__tablet--max) {
      &:not(&--animation) {
        display: none;
      }
    }
  }
</style>
