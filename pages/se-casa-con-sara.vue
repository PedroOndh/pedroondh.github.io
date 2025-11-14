<template>
  <section class="wed-section wed-section__intro">
    <h2 class="wed-section__intro-date">9 de Mayo de 2026</h2>
    <h1>
      <span class="sara">Sara</span>
      <span class="ampersand">&</span>
      <span class="pedro">Pedro</span>
    </h1>
    <h2>La Martona, Candas</h2>
  </section>
  <div>
    <h2>Historia</h2>
    <div>Moñada sobre nosotros con fotos y videos</div>
  </div>
  <CountdownSection />
  <div>
    <h2>Cuándo y dónde</h2>
    <div>La Martona, Candás</div>
    <div>Mapa de google maps</div>
  </div>
  <div>
    <h2>Código de vestimenta</h2>
    <div>Aqui explicado el rollo de la vestimenta y otras cosas</div>
  </div>
  <TimetableSection />
  <div>
    <h2>Alojamiento y transporte</h2>
    <div>Aqui explicado el rollo de alojamiento y transporte</div>
  </div>
  <div>
    <h2>Sobre Candás</h2>
    <div>Ir al Pirata</div>
  </div>
  <div>
    <h2>Album compartido</h2>
    <div>Aqui un google drive con el album compartido</div>
  </div>
  <div>
    <h2>Confirmación de asistencia</h2>
    <div>Aqui iria un formulario de confirmación de asistencia</div>
  </div>
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
      <div v-if="$route.query.name" class="wed-envelope__front-text">
        Querid@,
        <br />
        {{ $route.query.name }}
      </div>
      <div class="wed-envelope__seal">S & P</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import TimetableSection from '@/components/wedding/TimetableSection.vue';
  import CountdownSection from '@/components/wedding/CountdownSection.vue';

  useSeoMeta({
    title: 'Sara y Pedro - se casan',
    robots: 'noindex, nofollow'
  });
  useHead({
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Momo+Signature&family=Rozha+One&display=swap'
      }
    ]
  });

  const opened = ref(false);
  const hideEnvelope = ref(false);

  function openEnvelope() {
    opened.value = true;
    setTimeout(() => {
      hideEnvelope.value = true;
    }, 1000);
  }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/wedding.scss';

  .wed-section {
    &__intro {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: $light-blue;
    }
    &__intro-date {
      font-size: 1.5rem;
      color: $dark-blue;
      margin: 0 0 -1rem 0;
    }
  }

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

  @media screen and (max-width: $breakpoint__tablet--max) {
    h1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 0.9;
      .pedro,
      .sara {
        font-size: 6rem;
      }
      .ampersand {
        font-size: 5rem;
      }
    }
  }
</style>
