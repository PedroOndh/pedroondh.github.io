<template>
  <section class="cv-about-me cv-section" id="about-me">
    <div class="cv-about-me__background" ref="background">
      <div class="cv-about-me__background-waves" />
      <div
        :class="[
          'cv-about-me__splash',
          {
            'cv-about-me__splash--top': !verticalDirection,
            'cv-about-me__splash--bottom': verticalDirection,
            'cv-about-me__splash--right': horizontalDirection,
            'cv-about-me__splash--left': !horizontalDirection
          }
        ]"
        v-if="duck && !block"
        :style="`top: ${mouseY}px; left: ${mouseX}px`"
      />
      <div class="cv-about-me__background-sand cv-about-me__background-sand--background" />
      <div
        :class="[
          'cv-about-me__duck',
          'cv-about-me__duck--shadow',
          { 'cv-about-me__duck--right': horizontalDirection }
        ]"
        v-if="duck"
        :style="`top: ${mouseY}px; left: ${mouseX}px`"
      />
      <div
        class="cv-about-me__background-sand cv-about-me__background-sand--foreground"
        ref="sand"
      />
      <div
        :class="[
          'cv-about-me__duck',
          'cv-about-me__duck--body',
          { 'cv-about-me__duck--right': horizontalDirection }
        ]"
        v-if="duck"
        :style="`top: ${mouseY}px; left: ${mouseX}px`"
      />
    </div>
    <div class="cv-about-me__text">
      <h1 class="cv-about-me__title">Hi! I am Pedro Ondiviela</h1>
      <b class="cv-about-me__subtitle">Creative Developer</b>
      <p class="cv-about-me__description">and this is my CV-Playground</p>
    </div>
  </section>
</template>
<script setup lang="ts">
  const background = ref(null);
  const sand = ref(null);
  const duck = ref(false);
  const mouseX = ref(0);
  const mouseY = ref(0);
  const verticalDirection = ref(false);
  const horizontalDirection = ref(false);
  const block = ref(false);
  onMounted(() => {
    background.value.addEventListener('mouseenter', () => {
      duck.value = true;
    });
    background.value.addEventListener('mousemove', (event: MouseEvent) => {
      if (!block.value) {
        mouseX.value = event.offsetX;
        mouseY.value = event.offsetY;
        verticalDirection.value = event.movementY > 0;
        horizontalDirection.value = event.movementX > 0;
        block.value = true;
        setTimeout(() => (block.value = false), 20);
      }
    });
    sand.value.addEventListener('mousemove', () => {
      block.value = true;
    });
    sand.value.addEventListener('mouseout', () => {
      block.value = false;
    });
  });
</script>
<style lang="scss" scoped>
  .cv-about-me {
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
    &__duck {
      position: absolute;
      width: rem(40px);
      height: rem(40px);
      margin-top: rem(-30px);
      margin-left: rem(-20px);
      background: url('../assets/icons/duck.svg');
      background-size: 100% 100%;
      transition-property: top, left, transform;
      transition-duration: 0.5s;
      &--body {
        z-index: 1;
        pointer-events: none;
      }
      &--shadow {
        margin-top: rem(10px);
        transform: scale(1, -1);
        opacity: 0.4;
      }
      &--right {
        transform: scale(-1, 1);
        &#{$component-class}__duck--shadow {
          transform: scale(-1, -1);
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
      padding: rem(10px);
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
      margin: 0;
    }
    &__description {
      margin-bottom: 0;
    }
    @media screen and (max-width: $breakpoint__mobile--max) {
      &__text {
        left: 5vw;
        width: 90vw;
      }
    }
  }
</style>
