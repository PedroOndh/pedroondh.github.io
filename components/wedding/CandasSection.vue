<template>
  <div class="wed-section wed-section__about-candas">
    <h2>Sobre Candás</h2>
    <img class="wed-section__about-candas-icon" src="/assets/wedding/icons/boat.png" alt="Barco" />
    <div class="text">
      Pequeña villa marinera super conocida en Asturias
      <br />
      <br />
      Si todavía no habéis tenido el placer, merece la pena darse un paseo por el puerto, la playa y
      el centro
      <br />
      <br />
      Ya sea para respirar el mar, comer en un buen asturiano o tomar unas copas de noche
    </div>
    <div class="wed-section__about-candas-images">
      <img class="photo photo--animated" src="/assets/wedding/candas-1.jpg" alt="Candás" />
      <img class="photo photo--animated" src="/assets/wedding/candas-2.jpg" alt="Candás" />
      <img class="photo photo--animated" src="/assets/wedding/candas-3.webp" alt="Candás" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../assets/styles/wedding.scss';

  .wed-section {
    &__about-candas {
      background: linear-gradient(180deg, $highlight 0%, $light-pink 100%);
    }
    &__about-candas-icon {
      width: 8rem;
      height: 8rem;
    }
    &__about-candas-images {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
    @media screen and (max-width: $breakpoint__tablet--max) {
      &__about-candas-images {
        flex-direction: column;
        gap: 0;
      }
    }
    @media screen and (max-width: $breakpoint__small-tablet--max) {
      &__about-candas-images {
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
