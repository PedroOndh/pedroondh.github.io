<template>
  <section class="cv-studies" id="studies">
    <h2 class="cv-studies__title">Studies</h2>
    <div class="cv-studies__wrapper">
      <div class="cv-studies__section cv-studies__section--first">
        <h3 class="cv-studies__section-title cv-studies__section-title--second">
          Bachelor in architecture
        </h3>
        <p>2011-2017</p>
        <p>Universidad de Valladolid</p>
      </div>
      <div class="cv-studies__section cv-studies__section--second">
        <h3 class="cv-studies__section-title cv-studies__section-title--third">
          Master's degree in Interactive Design
        </h3>
        <p>2017-2018</p>
        <p>Escuela Superior de Diseño de Madrid</p>
      </div>
      <div class="cv-studies__section cv-studies__section--third">
        <h3 class="cv-studies__section-title cv-studies__section-title--third">
          Full stack Web Development Bootcamp
        </h3>
        <p>2017-2018</p>
        <p>Escuela Superior de Diseño de Madrid</p>
        <h3 class="cv-studies__section-title cv-studies__section-title--third">
          5+ years of Front-end experience
        </h3>
        <p>2017-present</p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
  .cv-studies {
    background: linear-gradient(
      100deg,
      $grey 0%,
      $grey 33.33%,
      $dark-blue 33.33%,
      $dark-blue 66.66%,
      $dark-black 66.66%,
      $dark-black 100%
    );
    padding-top: rem(100px);
    padding-bottom: rem(100px);
    &__wrapper {
      display: flex;
    }
    &__title {
      color: $white;
    }
    &__section {
      width: 33.33%;
    }
    &__section-title {
      &--first {
        color: $black;
      }
      &--second {
        color: $white;
      }
      &--third {
        color: $white;
      }
    }
  }
</style>
