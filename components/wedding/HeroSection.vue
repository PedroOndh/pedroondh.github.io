<template>
  <section class="wed-section wed-section__intro">
    <h2 class="wed-section__intro-date">9 de Mayo de 2026</h2>
    <h1>
      <span class="sara">Sara</span>
      <span class="ampersand">&</span>
      <span class="pedro">Pedro</span>
    </h1>
    <h2>La Martona, Candás</h2>
    <img
      class="photo wed-section__intro-photo-1"
      src="/assets/wedding/story/story-16.jpg"
      alt="Sara y Pedro"
    />
    <img
      class="photo wed-section__intro-photo-2"
      src="/assets/wedding/story/story-19.jpg"
      alt="Sara y Pedro"
    />
    <img
      class="photo wed-section__intro-photo-3"
      src="/assets/wedding/story/story-20.jpg"
      alt="Sara y Pedro"
    />
    <img
      class="photo wed-section__intro-photo-4"
      src="/assets/wedding/story/story-23.jpg"
      alt="Sara y Pedro"
    />
    <img
      class="photo wed-section__intro-photo-5"
      src="/assets/wedding/story/story-26.jpg"
      alt="Sara y Pedro"
    />
  </section>
</template>

<style lang="scss" scoped>
  @import '../assets/styles/wedding.scss';

  .wed-section {
    &__intro {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(180deg, $light-blue 0%, $highlight 100%);
      .photo {
        position: absolute;
      }
    }
    &__intro-date {
      position: relative;
      font-size: 1.5rem;
      color: $dark-blue;
      margin: 0 0 -1rem 0;
    }
    &__intro-photo-1 {
      top: -3rem;
      left: -1rem;
      transform: rotate(-20deg);
    }
    &__intro-photo-2 {
      top: -1rem;
      right: calc(50% - 6rem);
      transform: rotate(20deg);
    }
    &__intro-photo-3 {
      top: -1rem;
      right: 2rem;
      transform: rotate(10deg);
    }
    &__intro-photo-4 {
      top: calc(50% + 6rem);
      left: calc(20% - 6rem);
      transform: rotate(10deg);
    }
    &__intro-photo-5 {
      top: calc(50% + 6rem);
      right: calc(20% - 6rem);
      transform: rotate(-15deg);
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
