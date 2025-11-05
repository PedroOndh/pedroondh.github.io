<template>
  <section class="wed-section wed-section__intro">
    <h1>
      <span class="sara">Sara</span>
      <span class="ampersand">&</span>
      <span class="pedro">Pedro</span>
    </h1>
    <h2>La Martona, Candas</h2>
  </section>
  <section class="wed-section wed-section__info">
    <h2>Información importante</h2>
    <div class="wed-section__info-content">
      <div class="wed-section__info-content-item">
        <b>Lugar:</b>
        <p>La Martona, Candas</p>
      </div>
      <div class="wed-section__info-content-item">
        <b>Fecha:</b>
        <p>9 de Mayo de 2026</p>
      </div>
      <div class="wed-section__info-content-item">
        <b>Hora:</b>
        <p>12:00</p>
      </div>
    </div>
  </section>
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
</script>

<style lang="scss" scoped>
  $font-title: 'Rozha One', system-ui;
  $font-main: 'Momo Signature', cursive;

  $pink: #fd7a7b;
  $white: #cbf2ec;
  $blue: #76dcde;

  h1 {
    font-family: $font-title;
  }
  h2,
  h3 {
    font-family: $font-main;
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
      background-color: $white;
    }
    &__info {
      background-color: $blue;
    }
    &__info-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0 20%;
    }
    &__info-content-item {
      display: flex;
      justify-content: space-between;
      p {
        margin: 0;
      }
    }
  }
</style>
