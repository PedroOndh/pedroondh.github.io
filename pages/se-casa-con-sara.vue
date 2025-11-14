<template>
  <section class="wed-section wed-section__intro">
    <h2 class="wed-section__intro-date">9 de Mayo de 2026</h2>
    <h1>
      <span class="sara">Sara</span>
      <span class="ampersand">&</span>
      <span class="pedro">Pedro</span>
    </h1>
    <h2>La Martona, Candas</h2>
  </section>
  <div class="wed-section wed-section__story">
    <h2>Historia</h2>
    <div>Moñada sobre nosotros con fotos y videos</div>
    <div>Somos muy guays y nos queremos mucho</div>
    <div>Y ahora nos vamos a casar</div>
  </div>
  <CountdownSection />
  <div class="wed-section wed-section__place">
    <h2>Cuándo y dónde</h2>
    <div>La Martona, Candás</div>
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
  <div class="wed-section wed-section__dress-code">
    <h2>Código de vestimenta</h2>
    <div>Aqui explicado el rollo de la vestimenta y otras cosas</div>
  </div>
  <TimetableSection />
  <div class="wed-section wed-section__accommodation">
    <h2>Alojamiento y transporte</h2>
    <div>Aqui explicado el rollo de alojamiento y transporte</div>
  </div>
  <div class="wed-section wed-section__about-candas">
    <h2>Sobre Candás</h2>
    <div>Ir al Pirata</div>
  </div>
  <div class="wed-section wed-section__shared-album">
    <h2>Album compartido</h2>
    <div>Aqui un google drive con el album compartido</div>
  </div>
  <div class="wed-section wed-section__confirmation">
    <h2>Confirmación de asistencia</h2>
    <div>Aqui iria un formulario de confirmación de asistencia</div>
  </div>
  <Envelope />
</template>

<script setup lang="ts">
  import TimetableSection from '@/components/wedding/TimetableSection.vue';
  import CountdownSection from '@/components/wedding/CountdownSection.vue';
  import Envelope from '@/components/wedding/Envelope.vue';

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
  @import '../assets/styles/wedding.scss';

  .wed-section {
    &__intro {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(180deg, $light-blue 0%, $highlight 100%);
    }
    &__story {
      background: linear-gradient(180deg, $highlight 0%, $light-blue 100%);
    }
    &__intro-date {
      font-size: 1.5rem;
      color: $dark-blue;
      margin: 0 0 -1rem 0;
    }
    &__place {
      background: linear-gradient(180deg, $light-blue 0%, $light-pink 100%);
    }
    &__place-map {
      border-radius: 1rem;
      overflow: hidden;
      margin-top: 1rem;
    }
    &__dress-code {
      background: linear-gradient(180deg, $light-pink 0%, $white 100%);
    }
    &__accommodation {
      background: linear-gradient(180deg, $light-blue 0%, $highlight 100%);
    }
    &__about-candas {
      background: linear-gradient(180deg, $highlight 0%, $light-pink 100%);
    }
    &__shared-album {
      background: linear-gradient(180deg, $light-pink 0%, $white 100%);
    }
    &__confirmation {
      background: linear-gradient(180deg, $white 0%, $light-blue 100%);
    }
  }

  @media screen and (max-width: $breakpoint__tablet--max) {
    h1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 0.9;
      .pedro,
      .sara {
        font-size: 6rem;
      }
      .ampersand {
        font-size: 5rem;
      }
    }
  }
</style>
