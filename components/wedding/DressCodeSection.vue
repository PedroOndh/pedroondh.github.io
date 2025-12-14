<template>
  <div class="wed-section wed-section__dress-code">
    <h2>Código de vestimenta</h2>
    <img
      class="wed-section__dress-code-icon"
      src="/assets/wedding/icons/dress-code.png"
      alt="Código de vestimenta"
    />
    <div class="text">
      Vístete con tus mejores galas y ponte súper guapo/a para celebrar este día tan especial con
      nosotros
      <br />
      <br />
      Solo tenemos dos peticiones para ti: ponte elegante y no vengas de blanco ni colores similares
    </div>
    <div class="wed-section__dress-code-images">
      <img
        class="photo photo--animated"
        src="/assets/wedding/story/story-9.jpg"
        alt="Código de vestimenta"
      />
      <img
        class="photo photo--animated"
        src="/assets/wedding/story/story-20.jpg"
        alt="Código de vestimenta"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @import '../../assets/styles/wedding.scss';

  .wed-section {
    &__dress-code {
      background: linear-gradient(180deg, $light-pink 0%, $white 100%);
    }
    &__dress-code-icon {
      width: 8rem;
      height: 8rem;
    }
    &__dress-code-images {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      width: 100%;
      max-width: 50rem;
      margin: 1rem auto 0;
    }
    @media screen and (max-width: $breakpoint__tablet--max) {
      &__dress-code-images {
        gap: 0;
      }
    }
    @media screen and (max-width: $breakpoint__small-tablet--max) {
      &__dress-code-images {
        margin-top: 6rem;
        margin-bottom: 3rem;
        .photo {
          position: relative;
          margin: -3rem calc(50% - 6rem);
          &:nth-child(odd) {
            left: -4rem;
          }
          &:nth-child(even) {
            right: -4rem;
          }
        }
      }
    }
  }
</style>
