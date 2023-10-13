<template>
  <section class="cv-about-me cv-section" id="about-me">
    <div class="cv-about-me__background">
      <div class="cv-about-me__background-waves" />
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
      background-color: $light-blue;
      &:after {
        content: '';
        background: linear-gradient(40deg, rgba($light-blue, 0.7) 0%, rgba($white, 0.8) 100%);
      }
    }
    &__background-waves {
      &:before {
        content: '';
        background: url('/assets/water-texture--blue.svg');
      }
      &:after {
        content: '';
        background: url('/assets/water-texture.svg');
        transform: scale(1.2, 1.2);
      }
    }
    &__text {
      position: relative;
    }
    @media screen and (min-width: $breakpoint__small-desktop--min) {
      &__background-waves {
        &:after {
          @keyframes water-moving {
            0%,
            100% {
              transform: scale(1.2, 1.2) rotate3d(0, 20, 0, 10deg);
            }
            30% {
              transform: scale(1.2, 1.2) rotate3d(30, 2, 0, 10deg);
            }
            50% {
              transform: scale(1.2, 1.2) rotate3d(2, 50, 0, 10deg);
            }
            70% {
              transform: scale(1.2, 1.2) rotate3d(0, 0, 0, 10deg);
            }
          }
          transform-origin: center;
          animation: water-moving;
          animation-duration: 10s;
          animation-iteration-count: infinite;
        }
      }
    }
  }
</style>
