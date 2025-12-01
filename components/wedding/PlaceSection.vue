<template>
  <div class="wed-section wed-section__place">
    <h2>Cuándo y dónde</h2>
    <img
      class="wed-section__place-icon"
      src="/assets/wedding/icons/time.png"
      alt="Cuándo y dónde"
    />
    <div class="wed-section__place-date">9 de Mayo de 2026, 12:30</div>
    <div class="text">
      La ceremonia dará comienzo a las
      <b>12:30</b>
      .
      <br />
      <br />
      Se ruega asistir minimo con 20 minutos de antelación. ¡Por favor no llegues tarde!
      <br />
      <br />
      La ceremonia, el banquete y la fiesta tendrán lugar en la maravillosa finca
      <b>La Martona en Candás</b>
      .
      <br />
      <br />
      ¡Os dejamos por aquí la dirección exacta!
    </div>
    <div class="wed-section__place-map">
      <iframe
        id="map-canvas"
        class="map_part"
        width="600"
        height="400"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        biord
        src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=La martona, Candas&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../assets/styles/wedding.scss';

  .wed-section {
    &__place {
      background: linear-gradient(180deg, $light-blue 0%, $light-pink 100%);
    }
    &__place-icon {
      width: 6rem;
      height: 6rem;
    }
    &__place-date {
      font-size: 1.5rem;
      font-weight: bold;
      color: $dark-blue;
      margin: 0.5rem 0;
    }
    &__place-location {
      font-weight: bold;
      margin: 0.5rem 0;
    }
    &__place-map {
      border-radius: 1rem;
      overflow: hidden;
      margin-top: 1rem;
      max-width: 100%;
    }
  }
</style>
