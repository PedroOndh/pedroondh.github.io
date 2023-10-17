<template>
  <section class="cv-about-me cv-section" id="about-me">
    <div class="cv-about-me__background">
      <div class="cv-about-me__background-waves" />
      <div class="cv-about-me__background-sand" />
    </div>
    <div class="cv-about-me__text">
      <h1>Pedro Ondiviela</h1>
      <p>
        <b>Creative Developer</b>
        (Front-end Developer, expert in complex interfaces and animations)
      </p>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
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
    &__background:after,
    &__background-waves:before,
    &__background-waves:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &__background {
      background: linear-gradient(180deg, $light-blue 0%, $highlight 200%);
      &:after {
        content: '';
        background: linear-gradient(40deg, rgba($light-blue, 0) 0%, rgba($white, 0.5) 100%);
      }
    }
    &__background-waves {
      &:after {
        content: '';
        background: url('/assets/water-texture.svg');
        top: -50%;
        height: 200%;
        @keyframes water-moving {
          0%,
          100% {
            transform: translate(0, -4%);
          }
          50% {
            transform: scale(1, 0.9) translate(0, 0);
          }
        }
        transform-origin: center;
        animation: water-moving;
        animation-duration: 10s;
        animation-iteration-count: infinite;
      }
    }
    &__background-sand {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100vw;
      height: rem(300px);
      background-color: $grey;
      @keyframes seafoam1 {
        0%,
        100% {
          clip-path: path('M 0 300 L 0 60 C 450 120 500 30 650 130 C 750 230 850 130 1200 330');
        }
        50% {
          clip-path: path('M 0 300 L 0 120 C 450 200 500 60 650 160 C 750 240 850 120 1300 340');
        }
      }
      animation: seafoam1;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(200deg, #f5fccd 0%, #ff7d66 300%);
        @keyframes seafoam2 {
          0%,
          100% {
            clip-path: path('M 0 300 L 0 100 C 450 125 500 50 650 150 C 750 250 850 150 1200 350');
          }
          50% {
            clip-path: path('M 0 300 L 0 160 C 450 220 500 140 650 220 C 750 260 850 110 1200 350');
          }
        }
        animation: seafoam2;
        animation-duration: 10s;
        animation-iteration-count: infinite;
      }
    }
    &__text {
      position: relative;
    }
  }
</style>
