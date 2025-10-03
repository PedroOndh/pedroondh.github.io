<template>
  <section class="wed-section wed-section__intro">
    <h1>Sara y Pedro</h1>
    <h2>Se casan</h2>
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
    robots: 'noindex, nofollow'
  });
</script>

<style lang="scss" scoped>
  $pink: #fd7a7b;
  $orange: #fdd492;
  $yellow: #fbe3c1;
  $cyan: #66c6f3;
  $blue: #c1cdff;

  .wed-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 2rem;
    &__intro {
      height: 100vh;
      background-color: $yellow;
    }
    &__info {
      background-color: $pink;
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
