<template>
  <div class="wed-section wed-section__about-candas">
    <h2>Sobre Candás</h2>
    <div class="text">
      Pequeña villa marinera super conocida en Asturias.
      <br />
      <br />
      Si todavía no habéis tenido el placer, merece la pena darse un paseo por el puerto, la playa y
      el centro.
      <br />
      <br />
      Ya sea para respirar el mar, comer en un buen asturiano o tomar unas copas de noche
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
      margin-top: 2rem;
      border: 0.5rem solid $white;
      border-bottom: 2rem solid $white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
      &:nth-child(odd) {
        transform: rotate(-2deg);
        &:hover {
          transform: rotate(2deg) scale(1.1);
        }
      }
      &:nth-child(even) {
        transform: rotate(2deg);
        &:hover {
          transform: rotate(-2deg) scale(1.1);
        }
      }
    }
    @media screen and (max-width: $breakpoint__tablet--max) {
      &__about-candas-images {
        flex-direction: column;
      }
    }
  }
</style>
