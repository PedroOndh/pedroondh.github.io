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
  <section class="wed-section wed-section__info">
    <h2>Horario</h2>
    <div class="wed-section__info-content">
      <div class="wed-section__info-item">
        <p class="wed-section__info-hour"><b>12:00</b></p>
        <div class="wed-section__info-icon"></div>
        <div class="wed-section__info-text">
          <p><b>Recepción</b></p>
          <p>Damos la bienvenida a todos los invitados</p>
        </div>
      </div>
      <div class="wed-section__info-item">
        <p class="wed-section__info-hour"><b>12:30</b></p>
        <div class="wed-section__info-icon"></div>
        <div class="wed-section__info-text">
          <p><b>Ceremonia</b></p>

          <p>Iniciamos la ceremonia</p>
        </div>
      </div>
      <div class="wed-section__info-item">
        <p class="wed-section__info-hour"><b>13:00</b></p>
        <div class="wed-section__info-icon"></div>
        <div class="wed-section__info-text">
          <p><b>Cocktail</b></p>

          <p>Un buen pinchoteo</p>
        </div>
      </div>
      <div class="wed-section__info-item">
        <p class="wed-section__info-hour"><b>15:00</b></p>
        <div class="wed-section__info-icon"></div>
        <div class="wed-section__info-text">
          <p><b>Comida</b></p>

          <p>Comida</p>
        </div>
      </div>
      <div class="wed-section__info-item">
        <p class="wed-section__info-hour"><b>17:00</b></p>
        <div class="wed-section__info-icon"></div>
        <div class="wed-section__info-text">
          <p><b>Comida</b></p>

          <p>Baile</p>
        </div>
      </div>
      <div class="wed-section__info-item">
        <p class="wed-section__info-hour"><b>18:00</b></p>
        <div class="wed-section__info-icon"></div>
        <div class="wed-section__info-text">
          <p><b>Fiesta</b></p>

          <p>Baile</p>
        </div>
      </div>
      <div class="wed-section__info-item">
        <p class="wed-section__info-hour"><b>21:00</b></p>
        <div class="wed-section__info-icon"></div>
        <div class="wed-section__info-text">
          <p><b>Cena</b></p>

          <p>Baile</p>
        </div>
      </div>
    </div>
  </section>
  <section class="wed-section wed-section__time">
    <h2>Cuenta atras</h2>
    <b>100 días</b>
    <b>100 horas</b>
    <b>100 minutos</b>
  </section>
  <div
    class="wed-envelope"
    :class="{ 'wed-envelope--opened': opened }"
    ref="envelope"
    @click="opened = true"
  >
    <div class="wed-envelope__back"></div>
    <div class="wed-envelope__front"><div class="wed-envelope__seal">S & P</div></div>
  </div>
</template>

<script setup lang="ts">
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
</script>

<style lang="scss" scoped>
  $font-title: 'Rozha One', system-ui;
  $font-main: 'Momo Signature', cursive;

  $pink: #fd7a7b;
  $white: #ffffff;
  $light-blue: #cbf2ec;
  $blue: #76dcde;
  $dark-blue: #159b9b;

  h1 {
    font-family: $font-title;
  }
  h2,
  h3 {
    font-family: $font-main;
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 10rem;
    font-weight: 700;
    color: $pink;
    line-height: 0.9;
    text-align: center;
    margin: 0;
    .sara,
    .pedro {
      font-size: 10rem;
      color: $pink;
      font-family: $font-title;
    }
    .sara {
      position: relative;
      //top: -3rem;
    }
    .pedro {
      position: relative;
      //top: 3rem;
    }
    .ampersand {
      position: relative;
      z-index: 1;
      font-size: 8rem;
      color: $pink;
      font-family: $font-title;
      filter: invert(1);
    }
  }

  .wed-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 2rem;
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
    &__info {
      background-color: $white;
    }
    &__info-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 35rem;
      margin: 0 auto;
    }
    &__info-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      margin-bottom: 2rem;
      &:last-child .wed-section__info-icon::before {
        display: none;
      }
    }
    &__info-hour {
      font-size: 1rem;
      color: $dark-blue;
      margin: 0;
      width: 4rem;
    }
    &__info-icon {
      position: relative;
      width: 4rem;
      height: 4rem;
      background-color: $white;
      border-radius: 50%;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      &::before {
        content: '';
        position: absolute;
        bottom: -5rem;
        left: 2rem;
        width: 1px;
        height: 5rem;
        background-color: $pink;
      }
    }
    &__info-text {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      text-align: left;
      p {
        margin: 0.5rem 0;
      }
    }
    &__time {
      background-color: $light-blue;
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
        top: -40vh;
        width: 400vw;
        height: 100vh;
        background-color: $white;
        transform-origin: center top;
      }
      &::before {
        right: -200vw;
        transform: rotate(-45deg);
      }
      &::after {
        left: -200vw;
        transform: rotate(45deg);
      }
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
