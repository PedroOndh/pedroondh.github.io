<template>
  <div class="wed-section wed-section__about-candas">
    <h2>Sobre Candás</h2>
    <div>
      Pequeña villa marinera, si no la conoceis, merece la pena darse un paseo por el centro y por
      la playa.
    </div>
    <div class="wed-section__about-candas-images">
      <img
        class="wed-section__about-candas-image"
        src="/assets/wedding/candas-1.jpg"
        alt="Candás"
      />
      <img
        class="wed-section__about-candas-image"
        src="/assets/wedding/candas-2.jpg"
        alt="Candás"
      />
      <img
        class="wed-section__about-candas-image"
        src="/assets/wedding/candas-3.webp"
        alt="Candás"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../assets/styles/wedding.scss';

  .wed-section {
    &__about-candas {
      background: linear-gradient(180deg, $highlight 0%, $light-pink 100%);
    }
    &__about-candas-images {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
    &__about-candas-image {
      width: 15rem;
      height: 15rem;
      object-fit: cover;
      overflow: hidden;
      margin-top: 1rem;
      border: 0.5rem solid $white;
      border-bottom: 2rem solid $white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    @media screen and (max-width: $breakpoint__tablet--max) {
      &__about-candas-images {
        flex-direction: column;
      }
    }
  }
</style>
