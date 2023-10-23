<template>
  <section
    :class="['cv-studies', 'cv-section', { 'cv-studies--broken': broken }]"
    id="studies"
    :style="`--power: ${power}px;`"
  >
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
        <House class="cv-studies__section-image cv-studies__section-image--house" />
      </div>
      <div class="cv-studies__section cv-studies__section--second">
        <div class="cv-studies__section-text">
          <h3 class="cv-studies__section-title cv-studies__section-title--third">
            Master's degree in Interactive Design
          </h3>
          <p class="cv-studies__section-info">2017-2018</p>
          <p class="cv-studies__section-info">Escuela Superior de Diseño de Madrid</p>
        </div>
        <Pallete class="cv-studies__section-image cv-studies__section-image--pallete" />
      </div>
      <div class="cv-studies__section cv-studies__section--third">
        <div class="cv-studies__section-text">
          <h3 class="cv-studies__section-title cv-studies__section-title--third">
            1 year Full stack Web Development Bootcamp
          </h3>
          <p class="cv-studies__section-info">2018-2019</p>
          <p class="cv-studies__section-info">KeepCoding</p>
        </div>
        <Laptop class="cv-studies__section-image cv-studies__section-image--laptop" />
      </div>
      <div class="cv-studies__section cv-studies__section--fourth">
        <div class="cv-studies__section-text">
          <h3 class="cv-studies__section-title cv-studies__section-title--fourth">
            5+ years of Front-end experience
          </h3>
          <p class="cv-studies__section-info">2017-present</p>
        </div>
        <Net class="cv-studies__section-image cv-studies__section-image--net" />
      </div>
      <div class="cv-studies__section cv-studies__section--fifth">
        <div class="cv-studies__section-text">
          <h3 class="cv-studies__section-title cv-studies__section-title--fifth">
            Best Overall Enterprise DevPortal + Best Visual Design
          </h3>
          <p class="cv-studies__section-info">2022</p>
          <p class="cv-studies__section-info">DevPortal Awards</p>
        </div>
        <Trophy class="cv-studies__section-image cv-studies__section-image--trophy" />
      </div>
    </div>
    <div class="cv-studies__power-wrapper">
      <label class="cv-studies__power-label" for="power"><Lightning /></label>
      <input
        class="cv-studies__power-range"
        type="range"
        id="power"
        name="power"
        v-model="power"
        min="1"
        max="20"
      />
      <span class="cv-studies__power-measure">
        {{ broken ? 'Overload!' : power }}
      </span>
      <div
        class="cv-studies__fix-button"
        v-if="broken"
        @click="
          broken = false;
          power = 6;
        "
      >
        Fix
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
  import { watch } from 'vue';
  import House from '../assets/icons/house.svg?component';
  import Pallete from '../assets/icons/pallete.svg?component';
  import Laptop from '../assets/icons/laptop.svg?component';
  import Net from '../assets/icons/net.svg?component';
  import Trophy from '../assets/icons/trophy.svg?component';
  import Lightning from '../assets/icons/lightning.svg?component';

  const power = ref(6);
  const broken = ref(false);

  watch(power, () => {
    if (power.value == 20 && !broken.value) {
      const interval = setInterval(() => {
        power.value = Number(power.value) + 10;
        if (power.value > 100) {
          clearInterval(interval);
          broken.value = true;
        }
      }, 200);
    }
  });
</script>
<style lang="scss" scoped>
  .cv-studies {
    $component-class: &;
    @mixin neonElement() {
      box-shadow: 0 0 calc(var(--power) * 0.5) $white, 0 0 calc(var(--power) * 2) $white,
        0 0 calc(var(--power) * 4) $light-blue, 0 0 calc(var(--power) * 8) $light-blue,
        0 0 calc(var(--power) * 10) $light-blue, inset 0 0 calc(var(--power) * 0.5) $white,
        inset 0 0 calc(var(--power) * 2) $white, inset 0 0 calc(var(--power) * 4) $light-blue,
        inset 0 0 calc(var(--power) * 8) $light-blue, inset 0 0 calc(var(--power) * 10) $light-blue;
      @media screen and (max-width: $breakpoint__tablet--max) {
        box-shadow: 0 0 calc(var(--power) * 0.5) $white, 0 0 calc(var(--power) * 4) $light-blue,
          0 0 calc(var(--power) * 10) $light-blue, inset 0 0 calc(var(--power) * 0.5) $white,
          inset 0 0 calc(var(--power) * 4) $light-blue,
          inset 0 0 calc(var(--power) * 10) $light-blue;
      }
    }
    @mixin neonSvg($color: $light-blue) {
      filter: drop-shadow(0 0 calc(var(--power) * 0.03) $white)
        drop-shadow(0 0 calc(var(--power) * 0.125) $white)
        drop-shadow(0 0 calc(var(--power) * 0.25) $color)
        drop-shadow(0 0 calc(var(--power) * 0.5) $color)
        drop-shadow(0 0 calc(var(--power) * 0.625) $color)
        drop-shadow(0 0 calc(var(--power) * 0.75) $color);
      @media screen and (max-width: $breakpoint__tablet--max) {
        filter: drop-shadow(0 0 calc(var(--power) * 0.03) $white)
          drop-shadow(0 0 calc(var(--power) * 0.5) $color)
          drop-shadow(0 0 calc(var(--power) * 0.75) $color);
      }
    }
    background: linear-gradient(0deg, $dark-blue 0%, $blue 100%);
    padding-top: rem(40px);
    padding-bottom: rem(40px);
    &--broken {
      #{$component-class} {
        &__section {
          &:before,
          &:after {
            box-shadow: 0 0 8px $white, inset 0 0 8px $white;
          }
        }
        &__section-image {
          filter: drop-shadow(0 0 8px $white);
        }
      }
    }
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
      &:hover {
        &:before,
        &:after {
          box-shadow: 0 0 8px $white, inset 0 0 8px $white;
        }
      }
      &:before {
        content: '';
        position: absolute;
        z-index: 2;
        background-color: $white;
        @include neonElement();
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
        @include neonElement();
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
          @include neonElement();
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
          @include neonElement();
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
          @include neonElement();
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
          @include neonElement();
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
      position: absolute;
      width: rem(100px);
      height: rem(100px);
      z-index: 2;
      &--house {
        bottom: rem(-50px);
        right: 10%;
        transform: rotate(10deg);
        @include neonSvg($red);
      }
      &--pallete {
        bottom: rem(-50px);
        right: 10%;
        @include neonSvg($green);
      }
      &--laptop {
        bottom: rem(-50px);
        right: 10%;
        width: rem(120px);
        height: rem(120px);
        transform: rotate(10deg);
        @include neonSvg($purple);
      }
      &--net {
        bottom: rem(-50px);
        right: 20%;
        transform: rotate(12deg);
        @include neonSvg($green);
      }
      &--trophy {
        bottom: rem(-50px);
        right: 10%;
        transform: rotate(8deg);
        @include neonSvg($red);
      }
    }
    &__power-wrapper {
      display: flex;
      align-items: center;
      padding: rem(100px) 0 rem(40px);
      width: 100%;
    }
    &__power-range {
      position: relative;
      -webkit-appearance: none;
      appearance: none;
      background: linear-gradient(90deg, $dark-black 0%, $highlight 100%);
      border-radius: rem(20px);
      cursor: pointer;
      width: rem(200px);
      height: 5px;
      &::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        background-color: $white;
        height: rem(12px);
        width: rem(12px);
        border: none;
        border-radius: 50%;
        &:hover {
          background-color: $light-blue;
        }
      }
    }
    &__power-label {
      margin-right: rem(20px);
      @include neonSvg();
    }
    &__power-measure {
      margin-left: rem(20px);
      color: $white;
    }
    &__fix-button {
      padding: rem(2px) rem(8px);
      margin-left: rem(10px);
      background-color: $white;
      border-radius: rem(20px);
      cursor: pointer;
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
      &__section-image {
        &--laptop {
          right: 8%;
        }
        &--net {
          right: 10%;
        }
      }
      &__power-wrapper {
        padding: rem(100px) 10% rem(40px);
      }
      &__power-range {
        width: 50%;
      }
    }
  }
</style>
