<template>
  <main>
    <slot />
    <div class="controls">
      <div class="controls__arrow controls__arrow--top" @click="$emit('top')"></div>
      <div class="controls__arrow controls__arrow--left" @click="$emit('left')"></div>
      <div class="controls__arrow controls__arrow--right" @click="$emit('right')"></div>
      <div class="controls__arrow controls__arrow--bottom" @click="$emit('bottom')"></div>
    </div>
    <div class="level">{{ level }}</div>
    <div class="refresh" @click="$emit('restart')">Restart level</div>
    <div v-if="timer" class="timer">{{ timer }}</div>
    <div v-if="titleScreen" class="title-screen">
      <slot name="title-screen"></slot>
    </div>
  </main>
</template>
<script setup lang="ts">
defineEmits<{
  top: () => void
  left: () => void
  right: () => void
  bottom: () => void
  restart: () => void
}>()
defineProps<{
  level: number
  titleScreen: boolean
  timer?: number
}>()
</script>
<style lang="scss">
@import "../../assets/styles/games/pink-ice.scss";

.level {
  position: absolute;
  top: 0.75rem;
  left: 1rem;
  @media (min-height: 500px), (orientation: portrait) {
    top: 0.5rem;
  }
}

.refresh {
  position: absolute;
  padding: 0.2rem 0.6rem;
  border: 1px solid $white;
  font-weight: 500;
  background-color: $black;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    color: $black;
    background-color: $white;
  }
  @media (min-height: 500px), (orientation: portrait) {
    font-size: 1rem;
  }
}

.refresh {
  top: 0.5rem;
  right: 1rem;
}

.fullscreen {
  top: 0.5rem;
  left: 4rem;
}

.controls {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  &__arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    &:after {
      content: "";
      width: 0;
      height: 0;
      margin: 1rem;
      opacity: 0.3;
    }
    &--top,
    &--bottom {
      width: 100%;
      height: 40vh;
    }
    &--left,
    &--right {
      flex-direction: column;
      width: 50%;
      height: 20vh;
    }
    &--top,
    &--left {
      align-items: flex-start;
    }
    &--bottom,
    &--right {
      align-items: flex-end;
    }
    &--top:after {
      border-left: 1rem solid transparent;
      border-right: 1rem solid transparent;
      border-bottom: 1rem solid $white;
    }
    &--left:after {
      border-top: 1rem solid transparent;
      border-right: 1rem solid $white;
      border-bottom: 1rem solid transparent;
    }
    &--right:after {
      border-top: 1rem solid transparent;
      border-left: 1rem solid $white;
      border-bottom: 1rem solid transparent;
    }
    &--bottom:after {
      border-left: 1rem solid transparent;
      border-right: 1rem solid transparent;
      border-top: 1rem solid $white;
    }
  }
}

.timer {
  position: absolute;
  top: 55%;
  font-size: 3rem;
}

.title-screen {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba($black, 0.8);
  &--hidden {
    display: none;
  }
  &__title {
    position: relative;
    font-size: 12vw;
    color: $white;
  }
  &__word {
    color: $pink;
  }
  &__button {
    position: relative;
    border: 1px solid $white;
    color: $white;
    padding: 0.3rem 0.6rem;
    background-color: transparent;
    font-size: 3vw;
    font-family: "Archivo Black", sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      color: $black;
      background-color: $white;
    }
  }
  @media (orientation: portrait) {
    &__title {
      font-size: 18vw;
    }
    &__button {
      font-size: 4.5vw;
    }
  }
}
</style>