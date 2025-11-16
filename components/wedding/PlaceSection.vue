<template>
  <div class="wed-section wed-section__place">
    <h2>Cuándo y dónde</h2>
    <div class="wed-section__place-date">9 de Mayo de 2026, 12:00</div>
    <div class="wed-section__place-location">La Martona, Candás</div>
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
    &__place-date {
      font-size: 1.5rem;
      font-weight: bold;
      color: $dark-blue;
      margin: 0.5rem 0;
    }
    &__place-location {
      font-weight: bold;
    }
    &__place-map {
      border-radius: 1rem;
      overflow: hidden;
      margin-top: 1rem;
    }
  }
</style>
