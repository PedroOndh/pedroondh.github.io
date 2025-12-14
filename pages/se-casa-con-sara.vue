<template>
  <HeroSection />
  <StorySection />
  <PlaceSection />
  <CountdownSection />
  <DressCodeSection />
  <TimetableSection />
  <AccommodationSection />
  <CandasSection />
  <div class="wed-section wed-section__shared-album">
    <h2>Álbum compartido</h2>
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
      desde tu punto de vista
    </div>
    <a class="wed-section__shared-album-link" target="_blank">Disponible a partir del 9 de Mayo</a>
  </div>
  <ConfirmationSection />
  <EndSection />
  <Envelope />
</template>

<script setup lang="ts">
  import HeroSection from '@/components/wedding/HeroSection.vue';
  import StorySection from '@/components/wedding/StorySection.vue';
  import CountdownSection from '@/components/wedding/CountdownSection.vue';
  import DressCodeSection from '@/components/wedding/DressCodeSection.vue';
  import PlaceSection from '@/components/wedding/PlaceSection.vue';
  import TimetableSection from '@/components/wedding/TimetableSection.vue';
  import AccommodationSection from '@/components/wedding/AccomodationSection.vue';
  import CandasSection from '@/components/wedding/CandasSection.vue';
  import ConfirmationSection from '@/components/wedding/ConfirmationSection.vue';
  import EndSection from '@/components/wedding/EndSection.vue';
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
      //cursor: pointer;
      //transition: background-color 0.3s ease;
      pointer-events: none;
      filter: grayscale(100%);
      &:hover {
        background-color: $pink;
      }
    }
  }
</style>
