<template>
  <div class="wed-section wed-section__end">
    <div class="wed-section__end-container">
      <div class="wed-section__end-images">
        <img class="photo" src="/assets/wedding/story/story-39.jpg" alt="Sara y Pedro" />
        <img class="photo" src="/assets/wedding/story/story-40.jpg" alt="Sara y Pedro" />
      </div>
      <div class="wed-section__end-text">
        Tenemos muchísimas ganas de celebrar nuestro "Sí Quiero" a tu lado.
        <br />
        <br />
        Gracias por acompañarnos.
        <br />
        <br />
        <b>Pedro:</b>
        <br />
        671 97 56 82
        <br />
        <br />
        <b>Sara:</b>
        <br />
        667 37 95 49
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @import '../../assets/styles/wedding.scss';

  .wed-section {
    &__end {
      background: linear-gradient(180deg, $light-blue 0%, $highlight 100%);
    }
    &__end-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      width: 100%;
      max-width: 50rem;
      margin: 1rem auto 0;
    }
    &__end-images {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      width: 30rem;
      .photo {
        &:nth-child(odd) {
          transform: translate(-1rem, 2rem) rotate(-2deg);
        }
        &:nth-child(even) {
          transform: translate(3rem, -4rem) rotate(2deg);
        }
      }
    }
    &__end-text {
      font-style: italic;
      text-align: left;
    }
    @media screen and (max-width: $breakpoint__tablet--max) {
      &__end-container {
        flex-direction: column;
      }
      &__end-images {
        width: 100%;
      }
    }
  }
</style>
