<template>
  <section class="cv-studies" id="studies">
    <h2 class="cv-studies__title">Studies</h2>
    <div class="cv-studies__wrapper">
      <div class="cv-studies__section cv-studies__section--first">
        <div class="cv-studies__section-text">
          <h3 class="cv-studies__section-title cv-studies__section-title--second">
            Bachelor in architecture
          </h3>
          <p class="cv-studies__section-info">2011-2017</p>
          <p class="cv-studies__section-info">Universidad de Valladolid</p>
        </div>
        <img class="cv-studies__section-image" src="/assets/pedro--first.svg" alt="Pedro in architecture" />
      </div>
      <div class="cv-studies__section cv-studies__section--second">
        <div class="cv-studies__section-text">
          <h3 class="cv-studies__section-title cv-studies__section-title--third">
            Master's degree in Interactive Design
          </h3>
          <p class="cv-studies__section-info">2017-2018</p>
          <p class="cv-studies__section-info">Escuela Superior de Diseño de Madrid</p>
        </div>
        <img class="cv-studies__section-image" src="/assets/pedro--second.svg" alt="Pedro in design" />
      </div>
      <div class="cv-studies__section cv-studies__section--third">
        <div class="cv-studies__section-text">
          <h3 class="cv-studies__section-title cv-studies__section-title--third">
            Full stack Web Development Bootcamp
          </h3>
          <p class="cv-studies__section-info">2017-2018</p>
          <p class="cv-studies__section-info">Escuela Superior de Diseño de Madrid</p>
          <h3 class="cv-studies__section-title cv-studies__section-title--third">
            5+ years of Front-end experience
          </h3>
          <p class="cv-studies__section-info">2017-present</p>
        </div>
        <img class="cv-studies__section-image" src="/assets/pedro--third.svg" alt="Pedro as programmer" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
  .cv-studies {
    $component-class: &;
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
      &--first {
        #{$component-class} {
          &__section-title,
          &__section-info {
            color: $black;
          }
        }
      }
      &--second,
      &--third {
        #{$component-class} {
          &__section-title,
          &__section-info {
            color: $white;
          }
        }
      }
    }
  }
</style>
