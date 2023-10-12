<template>
  <div
    class="cv-star-decoration"
    :style="`top: ${topPosition}; left: ${leftPosition}; width: ${diameter}; height: ${diameter}; animation-delay: ${animationDelay};`"
  />
</template>

<script lang="ts" setup>
  const topPosition = `${Math.random() * 100}%`;
  const leftPosition = `${Math.random() * 100}%`;
  const diameter = `${Math.max(2, Math.random() * 6)}px`;
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
        transform: scale3d(1.8, 1.8, 1);
      }
    }
    position: absolute;
    background-color: $white;
    border-radius: 50%;
    will-change: opacity, transform;
    animation: blinking;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    transition-property: opacity, transform;
    transition-duration: 0.5s;
  }
</style>
