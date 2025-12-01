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
  <StorySection />
  <PlaceSection />
  <CountdownSection />
  <div class="wed-section wed-section__dress-code">
    <h2>Código de vestimenta</h2>
    <img
      class="wed-section__dress-code-icon"
      src="/assets/wedding/icons/suit.png"
      alt="Código de vestimenta"
    />
    <div class="text">
      Vístete con tus mejores galas y ponte súper guapo para celebrar este día tan especial con
      nosotros.
      <br />
      <br />
      Solo hay dos peticiones, ven elegante y no vengas de blanco ni de colores similares.
    </div>
  </div>
  <TimetableSection />
  <AccommodationSection />
  <CandasSection />
  <div class="wed-section wed-section__shared-album">
    <h2>Album compartido</h2>
    <img
      class="wed-section__shared-album-icon"
      src="/assets/wedding/icons/photo.png"
      alt="Album compartido"
    />
    <div class="text">
      ¿Nos ayudáis a crear un álbum muy especial?
      <br />
      <br />
      Comparte con nosotros tus fotos y vídeos a través de este álbum y muéstranos nuestra boda
      desde tu punto de vista!
    </div>
    <a
      class="wed-section__shared-album-link"
      href="https://drive.google.com/drive/folders/16w3RP5b2lV7qrgman9mky7RYKruZJdwj?usp=drive_link"
      target="_blank"
    >
      Comparte tus fotos
    </a>
  </div>
  <ConfirmationSection />
  <Envelope />
</template>

<script setup lang="ts">
  import StorySection from '@/components/wedding/StorySection.vue';
  import CountdownSection from '@/components/wedding/CountdownSection.vue';
  import PlaceSection from '@/components/wedding/PlaceSection.vue';
  import TimetableSection from '@/components/wedding/TimetableSection.vue';
  import AccommodationSection from '@/components/wedding/AccomodationSection.vue';
  import CandasSection from '@/components/wedding/CandasSection.vue';
  import ConfirmationSection from '@/components/wedding/ConfirmationSection.vue';
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
    &__intro-date {
      font-size: 1.5rem;
      color: $dark-blue;
      margin: 0 0 -1rem 0;
    }
    &__dress-code {
      background: linear-gradient(180deg, $light-pink 0%, $white 100%);
    }
    &__dress-code-icon {
      width: 7rem;
      height: 7rem;
      margin-bottom: 1rem;
    }
    &__shared-album {
      background: linear-gradient(180deg, $light-pink 0%, $white 100%);
    }
    &__shared-album-icon {
      width: 8rem;
      height: 8rem;
      margin-bottom: 1rem;
    }
    &__shared-album-link {
      text-decoration: none;
      font-weight: bold;
      margin-top: 1rem;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      background-color: $dark-blue;
      color: $white;
      cursor: pointer;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: $pink;
      }
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
