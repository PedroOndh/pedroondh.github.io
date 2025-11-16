<template>
  <div
    v-if="!hideEnvelope"
    class="wed-envelope"
    :class="{ 'wed-envelope--opened': opened }"
    ref="envelope"
    @click="openEnvelope"
  >
    <div class="wed-envelope__back">
      <div class="wed-envelope__back-text">
        Sara y Pedro
        <br />
        te invitan a su boda
      </div>
    </div>
    <div class="wed-envelope__front">
      <div v-if="guest" class="wed-envelope__front-text">
        {{ greeting }},
        <br />
        {{ guest?.name }}
      </div>
      <div class="wed-envelope__seal">S & P</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import guests from '../../utils/guests';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const guest = guests.find(guest => guest.id === (route.query.id as string));

  const opened = ref(false);
  const hideEnvelope = ref(false);

  const greeting = computed(() => {
    if (!guest) return '';
    if (guest?.guests > 1) {
      return guest?.gender === 'male' ? 'Queridos' : 'Queridas';
    }
    return guest?.gender === 'male' ? 'Querido' : 'Querida';
  });

  function openEnvelope() {
    opened.value = true;
    setTimeout(() => {
      hideEnvelope.value = true;
    }, 1000);
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/wedding.scss';

  .wed-envelope {
    $component-class: &;
    position: fixed;
    z-index: 9;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    cursor: pointer;
    &__back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      transition: transform 1s ease-in-out;
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        width: 600vw;
        height: 100vh;
        background-color: $white;
      }
      &::before {
        right: calc(-250vw - 66vh);
        transform: rotate(-45deg);
        transform-origin: center top;
      }
      &::after {
        left: calc(-250vw - 66vh);
        transform: rotate(45deg);
        transform-origin: center top;
      }
    }
    &__back-text {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      font-size: 1.5rem;
      font-family: $font-main;
      z-index: 1;
    }
    &__front {
      position: absolute;
      top: -50vh;
      left: calc(50vw - 50vh);
      width: 100vh;
      height: 100vh;
      background-color: $white;
      border-radius: 0 0 2rem 0;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      transform: rotate(45deg);
      transition: transform 1s ease-in-out;
    }
    &__front-text {
      position: absolute;
      bottom: 33.33%;
      left: 45%;
      font-size: 1.75rem;
      font-family: $font-main;
      font-weight: bold;
      text-align: left;
      transform: rotate(-45deg);
      transform-origin: center;
    }
    &__seal {
      position: absolute;
      bottom: -1rem;
      right: -1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 6rem;
      height: 6rem;
      font-size: 2rem;
      font-weight: bold;
      color: rgba($white, 0.5);
      background-color: $pink;
      border-radius: 50%;
      font-family: $font-title;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      transform: rotate(-45deg);
    }
    &--opened {
      #{$component-class} {
        &__back {
          transform: translateY(200vh);
        }
        &__front {
          transform: rotate(45deg) translateX(-100vh) translateY(-100vh);
        }
      }
    }
  }
</style>
