<template>
  <section class="cv-intro cv-section" id="about-me">
    <div
      class="cv-intro__background"
      @mouseenter="backgroundMouseEnter"
      @mousemove="backgroundMouseMove"
      @mouseout="backgroundMouseOut"
    >
      <div class="cv-intro__background-waves" />
      <div
        :class="[
          'cv-intro__splash',
          {
            'cv-intro__splash--top': !verticalDirection,
            'cv-intro__splash--bottom': verticalDirection,
            'cv-intro__splash--right': horizontalDirection,
            'cv-intro__splash--left': !horizontalDirection
          }
        ]"
        v-if="duck && !blocked"
        :style="`top: ${mouseY}px; left: ${mouseX}px`"
      />
      <div class="cv-intro__background-sand cv-intro__background-sand--background" />
      <div
        class="cv-intro__duck-wrapper"
        :style="`transform: translate3d(${mouseX}px, ${mouseY}px, 0)`"
      >
        <div
          :class="[
            'cv-intro__duck',
            'cv-intro__duck--shadow',
            { 'cv-intro__duck--slept': slept, 'cv-intro__duck--right': horizontalDirection }
          ]"
          v-if="duck"
        />
      </div>
      <div
        class="cv-intro__background-sand cv-intro__background-sand--foreground"
        @mousemove="sandMouseMove"
        @mouseout="sandMouseOut"
      />
      <div
        class="cv-intro__duck-wrapper cv-intro__duck-wrapper--body"
        :style="`transform: translate3d(${mouseX}px, ${mouseY}px, 0)`"
      >
        <div
          :class="[
            'cv-intro__duck',
            'cv-intro__duck--body',
            { 'cv-intro__duck--slept': slept, 'cv-intro__duck--right': horizontalDirection }
          ]"
          v-if="duck"
        />
      </div>
    </div>
    <div class="cv-intro__text">
      <h1 class="cv-intro__title">Hi! I am Pedro Ondiviela</h1>
      <b class="cv-intro__subtitle">Creative Developer</b>
      <p class="cv-intro__description">and this is my CV-Playground</p>
    </div>
  </section>
</template>
<script setup lang="ts">
  import { throttle } from '~/utils/custom';

  const duck = ref(false);
  const blocked = ref(false);
  const slept = ref(false);

  const mouseX = ref(0);
  const mouseY = ref(0);
  const verticalDirection = ref(false);
  const horizontalDirection = ref(false);

  const backgroundMouseEnter = throttle(() => {
    duck.value = true;
  }, 100);
  const backgroundMouseMove = (event: MouseEvent) => {
    slept.value = false;
    if (!blocked.value) {
      mouseX.value = event.pageX;
      mouseY.value = event.pageY;
      verticalDirection.value = event.movementY > 0;
      horizontalDirection.value = event.movementX > 0;
      blocked.value = true;
      setTimeout(() => (blocked.value = false), 50);
    }
  };
  const backgroundMouseOut = throttle(() => {
    slept.value = true;
  }, 100);
  const sandMouseMove = throttle(() => {
    blocked.value = true;
  }, 10);
  const sandMouseOut = throttle(() => {
    blocked.value = false;
  }, 100);
</script>
<style lang="scss" scoped>
  .cv-intro {
    $component-class: &;
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
      overflow: hidden;
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
    &__duck-wrapper {
      position: absolute;
      top: rem(-30px);
      left: rem(-20px);
      transition-property: transform;
      transition-duration: 0.5s;
      &--body {
        z-index: 1;
        pointer-events: none;
      }
    }
    &__duck {
      position: relative;
      width: rem(40px);
      height: rem(40px);
      background: url('../../assets/icons/duck.svg');
      background-size: 100% 100%;
      transition-property: transform;
      transition-duration: 0.5s;
      &--shadow {
        top: rem(40px);
        transform: scale(1, -1);
        opacity: 0.4;
      }
      &--slept {
        background: url('../../assets/icons/duck--slept.svg');
        background-size: 100% 100%;
        &:after {
          content: 'Z';
          position: absolute;
          top: 0;
          left: 0;
          font-weight: $font-weight--bold;
          @keyframes sleeping {
            0% {
              transform: translate3d(-5px, -5px, 0) rotate(-10deg) scale(0.1);
              opacity: 1;
            }
            100% {
              transform: translate3d(-10px, -30px, 0) rotate(20deg) scale(1);
              opacity: 0;
            }
          }
          transition: opacity 2s ease;
          animation: sleeping;
          animation-iteration-count: infinite;
          animation-duration: 2s;
        }
      }
      &--right {
        transform: scale(-1, 1);
        &#{$component-class}__duck--shadow {
          transform: scale(-1, -1);
        }
        &#{$component-class}__duck--slept {
          &:after {
            content: '𑪽';
          }
        }
      }
    }
    &__splash {
      position: absolute;
      width: rem(20px);
      height: rem(20px);
      margin-top: rem(-10px);
      margin-left: rem(-10px);
      border-radius: 50%;
      &--top {
        border-top: 1px solid $light-blue;
      }
      &--right {
        border-right: 1px solid $light-blue;
      }
      &--bottom {
        border-bottom: 1px solid $light-blue;
      }
      &--left {
        border-left: 1px solid $light-blue;
      }
      @keyframes splash {
        0% {
          transform: scale(0.1, 0.1);
        }
        99% {
          transform: scale(6, 4);
          border-color: $grey;
        }
        100% {
          transform: scale(6, 4);
          border: 0px solid $grey;
        }
      }
      animation: splash;
      transition-property: top, left, width, margin-left, margin-top, border, transform;
      transition-duration: 0.5s;
      transition-timing-function: linear;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
      animation-duration: 1s;
    }
    &__background-sand {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100vw;
      height: rem(300px);
      &--background {
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
      }
      &--foreground {
        z-index: 1;
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
      position: absolute;
      z-index: 2;
      top: rem(90px);
      left: rem(40px);
      width: rem(400px);
      padding: rem(20px);
      border-radius: rem(20px);
      background-color: $white;
      &:after {
        content: '';
        position: absolute;
        top: rem(-20px);
        left: rem(40px);
        width: 0;
        height: 0;
        border-left: rem(20px) solid transparent;
        border-right: rem(20px) solid transparent;
        border-bottom: rem(20px) solid $white;
      }
    }
    &__title {
      font-size: $font-size--medium-big;
      line-height: 2;
      margin: 0;
    }
    &__description {
      margin-bottom: 0;
    }
    @media screen and (max-width: $breakpoint__mobile--max) {
      &__text {
        left: 5vw;
        width: 90vw;
        padding: rem(10px);
      }
      &__title {
        font-size: $font-size--medium-big;
        line-height: 1.5;
        margin-bottom: rem(10px);
      }
    }
  }
</style>
