<template>
  <section class="cv-about-me cv-section" id="about-me">
    <div class="cv-about-me__background" />
    <div class="cv-about-me__text">
      <h1>Pedro Ondiviela</h1>
      <p>
        Creative Developer (Front-end Developer, expert in complex interfaces and animations)
      </p>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
  .cv-about-me {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    &__background,
    &__background:before,
    &__background:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &__background {
      background: url('/assets/water-texture.avif');
      &:before {
        content: '';
        filter: blur(2px);
        background: url('/assets/background-tile.svg');
      }
      &:after {
        content: '';
        background: linear-gradient(40deg, rgba($light-blue, 0.7) 0%, rgba($white, 0.8) 100%);
      }
    }
    &__text {
      position: relative;
    }
  }
</style>
