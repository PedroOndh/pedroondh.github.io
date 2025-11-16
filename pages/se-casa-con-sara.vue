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
  <CountdownSection />
  <PlaceSection />
  <div class="wed-section wed-section__dress-code">
    <h2>Código de vestimenta</h2>
    <div>
      Elegante, pero cómodo.
      <br />
      Elige tu vestimenta o traje favorito y confirma tu asistencia.
      <br />
      Lo que más te guste y con lo que te sientas cómodo.
    </div>
  </div>
  <TimetableSection />
  <AccommodationSection />
  <CandasSection />
  <div class="wed-section wed-section__shared-album">
    <h2>Album compartido</h2>
    <div>Aqui un google drive con el album compartido</div>
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
