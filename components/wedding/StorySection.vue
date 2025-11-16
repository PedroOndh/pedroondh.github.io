<template>
  <div class="wed-section wed-section__story">
    <h2>Historia</h2>
    <div class="wed-section__story-text">
      Somos Sara y Pedro, nos conocimos en 2015 y somos los mejores.
      <br />
      Nos gusta el mar, el rap y la CocaCola.
    </div>
    <div class="wed-section__story-images">
      <img class="wed-section__story-image" src="/assets/wedding/story-1.jpg" alt="Sara y Pedro" />
      <img class="wed-section__story-image" src="/assets/wedding/story-2.jpg" alt="Sara y Pedro" />
      <img class="wed-section__story-image" src="/assets/wedding/story-3.jpg" alt="Sara y Pedro" />
      <img class="wed-section__story-image" src="/assets/wedding/story-4.jpg" alt="Sara y Pedro" />
      <img class="wed-section__story-image" src="/assets/wedding/story-5.jpg" alt="Sara y Pedro" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../assets/styles/wedding.scss';

  .wed-section {
    &__story {
      background: linear-gradient(180deg, $highlight 0%, $light-blue 100%);
    }
    &__story-images {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      width: 100%;
      max-width: 50rem;
      margin: 2rem auto 0;
    }
    &__story-image {
      width: 15rem;
      height: 15rem;
      object-fit: cover;
      overflow: hidden;
      margin-top: 1rem;
      border: 0.5rem solid $white;
      border-bottom: 2rem solid $white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      &:nth-child(odd) {
        transform: rotate(-2deg);
      }
      &:nth-child(even) {
        transform: rotate(2deg);
      }
    }
  }
</style>
