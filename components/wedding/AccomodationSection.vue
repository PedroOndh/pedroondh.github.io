<template>
  <section class="wed-section wed-section__accommodation">
    <h2>Hoteles recomendados</h2>
    <div class="text">
      Si necesitáis alojamiento, hemos hablado con dos hoteles de la zona para ofreceros un precio
      fijo
      <br />
      <br />
      Si estáis interesados, habladnos y os facilitaremos la reserva a los siguientes precios:
    </div>
    <div class="wed-section__accommodation-hotels">
      <NuxtLink
        to="https://share.google/KSYw9wzQokmOiJxQU"
        target="_blank"
        class="wed-section__accommodation-hotel"
      >
        <div class="wed-section__accommodation-hotel-image">
          <img src="/assets/wedding/hotel-marsol.webp" alt="Hotel Marsol" />
        </div>
        <b class="wed-section__accommodation-hotel-title">Hotel Marsol, Candás</b>
        <div class="wed-section__accommodation-hotel-price">
          <div>70€ / noche (👤👤)</div>
        </div>
      </NuxtLink>
      <NuxtLink
        to="https://share.google/fbOWNN8GcLcFGJ99T"
        target="_blank"
        class="wed-section__accommodation-hotel"
      >
        <div class="wed-section__accommodation-hotel-image">
          <img src="/assets/wedding/hotel-la-piedra.webp" alt="Hotel La Piedra" />
        </div>
        <b class="wed-section__accommodation-hotel-title">
          Hotel Piedra, Perlora
          <br />
          <span style="font-size: 1rem">(a 1km de Candás)</span>
        </b>
        <div class="wed-section__accommodation-hotel-price">
          <div>
            56€ / noche (👤👤)
            <span class="coffee-icon">☕</span>
          </div>
          <div>
            75€ / noche (👤👤👤)
            <span class="coffee-icon">☕</span>
          </div>
          <div>
            44€ / noche (👤)
            <span class="coffee-icon">☕</span>
          </div>
        </div>
      </NuxtLink>
    </div>
    <div class="wed-section__accommodation-transport">
      <h2>Transporte</h2>
      <img
        class="wed-section__accommodation-transport-icon"
        src="/assets/wedding/icons/bus.png"
        alt="Transporte"
      />
      <div class="text">
        Para haceros la vida lo más fácil posible, habrá un autobús con el recorrido Gijón-Candás-La
        Martona y viceversa
        <br />
        <br />
        Necesitaremos confirmación para calcular el tamaño del autobús
        <br />
        <br />
        Los puntos de recogida de Gijón y Candás se los comunicaremos a los interesados más adelante
      </div>
      <div
        class="wed-section__accommodation-transport-trip wed-section__accommodation-transport-trip--go"
      >
        <div class="wed-section__accommodation-transport-trip-item">
          <div class="wed-section__accommodation-transport-trip-item-time">11:30</div>
          <div class="wed-section__accommodation-transport-trip-item-location">Gijón</div>
        </div>
        <div class="wed-section__accommodation-transport-trip-item">
          <div class="wed-section__accommodation-transport-trip-item-time">12:00</div>
          <div class="wed-section__accommodation-transport-trip-item-location">Candás</div>
        </div>
        <div class="wed-section__accommodation-transport-trip-item">
          <div class="wed-section__accommodation-transport-trip-item-time">12:15</div>
          <div class="wed-section__accommodation-transport-trip-item-location">La Martona</div>
        </div>
      </div>
      <div
        class="wed-section__accommodation-transport-trip wed-section__accommodation-transport-trip--back"
      >
        <div class="wed-section__accommodation-transport-trip-item">
          <div class="wed-section__accommodation-transport-trip-item-time">01:00</div>
          <div class="wed-section__accommodation-transport-trip-item-location">La Martona</div>
        </div>
        <div class="wed-section__accommodation-transport-trip-item">
          <div class="wed-section__accommodation-transport-trip-item-time">01:15</div>
          <div class="wed-section__accommodation-transport-trip-item-location">Candás</div>
        </div>
        <div class="wed-section__accommodation-transport-trip-item">
          <div class="wed-section__accommodation-transport-trip-item-time">01:45</div>
          <div class="wed-section__accommodation-transport-trip-item-location">Gijón</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @import '../../assets/styles/wedding.scss';

  .coffee-icon {
    position: relative;
    top: 0.2rem;
    font-size: 1.5rem;
  }

  .wed-section {
    $component-class: &;
    &__accommodation {
      background: linear-gradient(180deg, $light-blue 0%, $highlight 100%);
      h3 {
        margin: 2rem 0 1rem;
      }
    }
    &__accommodation-hotels {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
      width: 50rem;
    }
    &__accommodation-hotel {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      width: 50%;
      background: $white;
      text-decoration: none;
      padding: 1rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    &__accommodation-hotel-title {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    &__accommodation-hotel-image {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 20rem;
      object-fit: cover;
      overflow: hidden;
    }
    &__accommodation-hotel-price {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.5rem;
      font-weight: bold;
      height: 8rem;
    }
    &__accommodation-transport {
      h2 {
        margin-top: 3rem;
      }
    }
    &__accommodation-transport-icon {
      width: 8rem;
      height: 8rem;
      margin-top: -1rem;
    }
    &__accommodation-transport-trip {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      width: 100%;
      margin: 2rem 0;
      &::before {
        content: '';
        position: absolute;
        top: 2rem;
        left: 2rem;
        width: calc(100% - 4rem);
        height: 0.2rem;
        background-color: $pink;
      }
      #{$component-class}__accommodation-transport-trip-item-time {
        position: relative;
        &::before {
          content: '';
          position: absolute;
          top: 1.6rem;
          left: -0.8rem;
          width: 0;
          height: 0;
          border-top: 0.5rem solid transparent;
          border-bottom: 0.5rem solid transparent;
          border-left: 0.94rem solid $pink;
        }
      }
    }
    &__accommodation-transport-trip-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 8rem;
    }
    &__accommodation-transport-trip-item-time {
      position: relative;
      z-index: 1;
      width: 4rem;
      height: 4rem;
      margin-bottom: 1rem;
      border-radius: 50%;
      background-color: $dark-blue;
      font-weight: bold;
      color: $white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__accommodation-transport-trip-item-location {
      font-weight: bold;
    }
    @media screen and (max-width: $breakpoint__tablet--max) {
      &__accommodation-hotels {
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
      &__accommodation-hotel {
        width: 100%;
      }
      &__accommodation-hotel-image {
        width: 100%;
        height: 100%;
      }
      &__accommodation-transport-trip-item {
        width: 6rem;
      }
    }
  }
</style>
