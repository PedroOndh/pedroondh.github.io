<template>
  <section class="cv-studies cv-section" id="studies">
    <h2 class="cv-studies__title">Studies & achievements</h2>
    <div class="cv-studies__wrapper">
      <div class="cv-studies__section cv-studies__section--first">
        <div class="cv-studies__section-text">
          <h3 class="cv-studies__section-title cv-studies__section-title--second">
            Bachelor in architecture
          </h3>
          <p class="cv-studies__section-info">2011-2017</p>
          <p class="cv-studies__section-info">Universidad de Valladolid</p>
        </div>
        <House class="cv-studies__section-image" />
      </div>
      <div class="cv-studies__section cv-studies__section--second">
        <div class="cv-studies__section-text">
          <h3 class="cv-studies__section-title cv-studies__section-title--third">
            Master's degree in Interactive Design
          </h3>
          <p class="cv-studies__section-info">2017-2018</p>
          <p class="cv-studies__section-info">Escuela Superior de Diseño de Madrid</p>
        </div>
        <!--
        <img
          class="cv-studies__section-image"
          src="/assets/pedro--second.svg"
          alt="Pedro in design"
        />
        -->
      </div>
      <div class="cv-studies__section cv-studies__section--third">
        <div class="cv-studies__section-text">
          <h3 class="cv-studies__section-title cv-studies__section-title--third">
            Full stack Web Development Bootcamp
          </h3>
          <p class="cv-studies__section-info">2017-2018</p>
          <p class="cv-studies__section-info">Escuela Superior de Diseño de Madrid</p>
        </div>
        <!--
        <img
          class="cv-studies__section-image"
          src="/assets/pedro--third.svg"
          alt="Pedro as programmer"
        />
        -->
      </div>
      <div class="cv-studies__section cv-studies__section--fourth">
        <div class="cv-studies__section-text">
          <h3 class="cv-studies__section-title cv-studies__section-title--fourth">
            5+ years of Front-end experience
          </h3>
          <p class="cv-studies__section-info">2017-present</p>
        </div>
        <!--
        <img
            class="cv-studies__section-image"
            src="/assets/pedro--third.svg"
            alt="Pedro as programmer"
        />
        -->
      </div>
      <div class="cv-studies__section cv-studies__section--fifth">
        <div class="cv-studies__section-text">
          <h3 class="cv-studies__section-title cv-studies__section-title--fifth">
            Best Overall Enterprise DevPortal + Best Visual Design
          </h3>
          <p class="cv-studies__section-info">2022</p>
          <p class="cv-studies__section-info">DevPortal Awards</p>
        </div>
        <Trophy class="cv-studies__section-image" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
  import House from '../assets/icons/house.svg?component';
  import Trophy from '../assets/icons/trophy.svg?component';
</script>
<style lang="scss" scoped>
  .cv-studies {
    $component-class: &;
    @mixin neonAnimation($randomSeed: 1) {
      @keyframes neon {
        0%,
        9%,
        11%,
        13%,
        100% {
          box-shadow: 0 0 3px $white, 0 0 5px $white, 0 0 10px $white, 0 0 21px $light-blue,
            0 0 41px $light-blue, 0 0 46px $light-blue, 0 0 51px $light-blue, 0 0 75px $light-blue,
            inset 0 0 3px $white, inset 0 0 5px $white, inset 0 0 10px $white,
            inset 0 0 21px $light-blue, inset 0 0 41px $light-blue, inset 0 0 46px $light-blue,
            inset 0 0 51px $light-blue, inset 0 0 75px $light-blue;
        }
        10%,
        12% {
          box-shadow: none;
        }
      }
      animation: neon;
      animation-duration: 8s;
      animation-delay: #{random($randomSeed) * -1s};
      animation-iteration-count: infinite;
    }
    background: linear-gradient(0deg, $dark-blue 0%, $blue 100%);
    padding-top: rem(40px);
    padding-bottom: rem(40px);
    &__wrapper {
      display: grid;
      grid-template-areas:
        'second third fifth'
        'first fourth fourth';
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr;
      gap: rem(30px);
    }
    &__title {
      color: $white;
    }
    &__section {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: rem(40px);
      margin: rem(20px);
      border-radius: rem(20px);
      background: linear-gradient(145deg, $white, $grey);
      text-align: left;
      &:before {
        content: '';
        position: absolute;
        z-index: 2;
        background-color: $white;
        @include neonAnimation(1);
      }
      &:after {
        content: '';
        position: absolute;
        top: rem(-20px);
        left: rem(-20px);
        width: calc(100% + #{rem(40px)});
        height: calc(100% + #{rem(40px)});
        border: 1px solid $white;
        border-radius: rem(20px);
        @include neonAnimation(3);
      }
      &--first {
        grid-area: first;
        &:before {
          top: rem(-50px);
          left: 50%;
          width: 2px;
          height: rem(30px);
        }
        &:after {
          @include neonAnimation(4);
        }
      }
      &--second {
        grid-area: second;
        &:before {
          top: 50%;
          right: rem(-50px);
          width: rem(30px);
          height: 2px;
        }
        &:after {
          @include neonAnimation(5);
        }
      }
      &--third {
        grid-area: third;
        &:before {
          left: 50%;
          bottom: rem(-50px);
          width: 2px;
          height: rem(30px);
        }
        &:after {
          @include neonAnimation(6);
        }
      }
      &--fourth {
        grid-area: fourth;
        &:before {
          top: rem(-50px);
          right: 25%;
          width: 2px;
          height: rem(30px);
        }
        &:after {
          @include neonAnimation(7);
        }
      }
      &--fifth {
        grid-area: fifth;
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
      path {
        @include neonAnimation(2);
      }
    }
    @media screen and (max-width: $breakpoint__tablet--max) {
      &__wrapper {
        grid-template-areas: none;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      }
      &__section {
        width: 80%;
        margin: rem(20px) 10%;
        grid-area: auto;
        &:before {
          top: unset;
          left: 50%;
          bottom: rem(-50px);
          right: unset;
          width: 2px;
          height: rem(30px);
        }
        &:last-child:before {
          display: none;
        }
        &:after {
          width: 110%;
          left: -5%;
        }
      }
    }
  }
</style>
