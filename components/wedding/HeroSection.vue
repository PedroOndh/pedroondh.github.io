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
      class="photo wed-section__intro-photo wed-section__intro-photo--1"
      src="/assets/wedding/story/story-16.jpg"
      alt="Sara y Pedro"
    />
    <img
      class="photo wed-section__intro-photo wed-section__intro-photo--2"
      src="/assets/wedding/story/story-19.jpg"
      alt="Sara y Pedro"
    />
    <img
      class="photo wed-section__intro-photo wed-section__intro-photo--3"
      src="/assets/wedding/story/story-5.jpg"
      alt="Sara y Pedro"
    />
    <img
      class="photo wed-section__intro-photo wed-section__intro-photo--4"
      src="/assets/wedding/story/story-23.jpg"
      alt="Sara y Pedro"
    />
    <img
      class="photo wed-section__intro-photo wed-section__intro-photo--5"
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
    &__intro-photo {
      position: absolute;
      &--1 {
        top: 0%;
        left: 2%;
        transform: rotate(-20deg);
      }
      &--2 {
        top: 5%;
        right: 2%;
        transform: rotate(20deg);
      }
      &--3 {
        top: -2rem;
        right: calc(50% - 6rem);
        transform: rotate(10deg);
      }
      &--4 {
        bottom: 5%;
        left: 2%;
        transform: rotate(10deg);
      }
      &--5 {
        bottom: 5%;
        right: 2%;
        transform: rotate(-15deg);
      }
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
    .wed-section__intro-date {
      margin: 0;
    }
    .wed-section__intro-photo {
      &--1 {
        top: 0%;
        left: -1rem;
      }
      &--2 {
        top: -2%;
        right: -2rem;
      }
      &--3 {
        top: -2%;
        right: calc(50% - 6rem);
      }
      &--4 {
        bottom: 2%;
        left: -1rem;
      }
      &--5 {
        bottom: 2%;
        right: -1rem;
      }
    }
  }
  @media screen and (max-width: $breakpoint__mobile--max) {
    h1 {
      .pedro,
      .sara {
        font-size: 5rem;
      }
      .ampersand {
        font-size: 4rem;
      }
    }
    h2 {
      font-size: 1.5rem;
    }
    .photo {
      width: 10rem;
      height: 10rem;
    }
  }
  @media screen and (min-width: $breakpoint__small-desktop--min) and (max-height: 700px) {
    .photo {
      width: 12rem;
      height: 12rem;
    }
  }
</style>
