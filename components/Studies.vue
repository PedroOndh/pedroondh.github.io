<template>
  <section class="cv-studies cv-section" id="studies">
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
        <img
          class="cv-studies__section-image"
          src="/assets/pedro--first.svg"
          alt="Pedro in architecture"
        />
      </div>
      <div class="cv-studies__section cv-studies__section--second">
        <div class="cv-studies__section-text">
          <h3 class="cv-studies__section-title cv-studies__section-title--third">
            Master's degree in Interactive Design
          </h3>
          <p class="cv-studies__section-info">2017-2018</p>
          <p class="cv-studies__section-info">Escuela Superior de Diseño de Madrid</p>
        </div>
        <img
          class="cv-studies__section-image"
          src="/assets/pedro--second.svg"
          alt="Pedro in design"
        />
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
        <img
          class="cv-studies__section-image"
          src="/assets/pedro--third.svg"
          alt="Pedro as programmer"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
  .cv-studies {
    $component-class: &;
    background: $black;
    padding-top: rem(40px);
    padding-bottom: rem(40px);
    &__wrapper {
      display: grid;
      grid-template-areas:
        "first third"
        "second third";
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 2fr;
      gap: rem(40px);
    }
    &__title {
      color: $white;
    }
    &__section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: rem(20px);
      border-radius: rem(20px);
      background: linear-gradient(145deg, $white, $grey);
      &--first {
        grid-area: first;
        text-align: left;
      }
      &--second {
        grid-area: second;
        text-align: left;
      }
      &--third {
        grid-area: third;
        text-align: right;
      }
    }
    &__section-title,
    &__section-info {
      color: $black;
    }
    &__section-image {
      width: rem(100px);
      height: rem(100px);
      margin-top: rem(20px);
    }
    @media screen and (max-width: $breakpoint__tablet--max) {
      background: $grey;
      &__wrapper {
        flex-direction: column;
      }
      &__title {
        color: $black;
      }
      &__section {
        width: 100%;
        &--first {
          background-color: $grey;
        }
        &--second {
          background-color: $dark-blue;
        }
        &--third {
          background-color: $dark-black;
        }
      }
    }
  }
</style>
