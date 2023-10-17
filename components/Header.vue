<template>
  <header :class="['cv-header', { 'cv-header--scrolled': scrolled }]">
    <nav class="cv-header__menu">
      <NuxtLink class="cv-header__link cv-header__link--home" @click="toggleMenu(false)" to="/">
        Pedro
        <br />
        Ondiviela
      </NuxtLink>
      <div :class="['cv-header__links', { 'cv-header__links--opened': isMenuVisible }]">
        <div class="cv-header__link-container">
          <NuxtLink class="cv-header__link" @click="toggleMenu()" to="#experience">
            Experience
          </NuxtLink>
          <NuxtLink class="cv-header__link" @click="toggleMenu()" to="#studies">Studies</NuxtLink>
        </div>
      </div>
      <div class="cv-header__burguer-menu-wrapper" @click="isMenuVisible = !isMenuVisible">
        <div
          :class="['cv-header__burguer-menu', { 'cv-header__burguer-menu--opened': isMenuVisible }]"
        ></div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { throttle } from '~/utils/custom';

  const isMenuVisible = ref(false);
  const scrolled = ref(false);
  const watchScroll: () => void = throttle(() => fixHeader(), 300);

  onMounted(() => window.addEventListener('scroll', watchScroll));
  onUnmounted(() => window.removeEventListener('scroll', watchScroll));

  function fixHeader(): void {
    const currentScroll: number = Math.abs(document.body.getBoundingClientRect().top);
    scrolled.value = currentScroll > 0;
  }

  const toggleMenu = (value: boolean = !isMenuVisible.value): void => {
    if (window.innerWidth <= 1023) {
      isMenuVisible.value = value;
    }
  };
</script>

<style lang="scss" scoped>
  .cv-header {
    $component-class: &;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 999;
    &--scrolled {
      #{$component-class} {
        &__menu {
          background-color: $dark-black;
        }
        &__link {
          color: $white;
        }
      }
    }

    &__menu {
      position: relative;
      height: rem(80px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: rem(16px) rem(40px) rem(16px) rem(40px);
      transition-property: background-color, box-shadow;
      transition-duration: 0.2s;
    }

    &__links {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    &__link-container {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }

    &__link {
      display: inline-block;
      margin: rem(20px);
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.11em;
      white-space: nowrap;
      &--home {
        font-weight: $font-weight--bold;
      }
    }

    &__burguer-menu-wrapper {
      display: none;
    }

    @media screen and (max-width: $breakpoint__small-desktop--max) {
      &__link {
        margin: rem(16px);
      }
    }
    @media screen and (max-width: $breakpoint__tablet--max) {
      &__menu {
        padding: 0 rem(20px) 0 rem(20px);
        height: rem(60px);
        background-color: $dark-black;
      }

      &__link {
        color: $white;
        &--home {
          z-index: 1;
          margin: 0;
          transform: scale(0.8);
        }
      }

      &__links {
        display: flex;
        position: absolute;
        width: 100vw;
        height: 100vh;
        left: calc(200vw);
        background-color: $dark-black;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: rem(140px);
        padding-left: rem(60px);
        transition-property: left;
        transition-duration: 0.5s;

        &--opened {
          top: 0;
          left: 0;
        }

        .router-link-active {
          border-bottom: solid 1px $white;
          width: fit-content;
        }
      }

      &__link {
        padding-bottom: rem(5px);
      }

      &__link-container {
        flex-direction: column;
      }

      &__burguer-menu-wrapper {
        display: flex;
        height: rem(30px);
        width: rem(30px);
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      &__burguer-menu {
        display: block;
        width: rem(20px);
        height: rem(2px);
        background-color: $white;
        position: relative;

        &::before {
          content: '';
          display: block;
          width: rem(20px);
          height: rem(2px);
          background-color: $white;
          position: absolute;
          top: rem(-7px);
          transition-property: width, transform, top;
          transition-duration: 0.5s;
        }

        &::after {
          content: '';
          display: block;
          width: rem(20px);
          height: rem(2px);
          background-color: $white;
          position: absolute;
          top: rem(7px);
          transition-property: width, transform, top;
          transition-duration: 0.5s;
        }

        &--opened {
          height: 0;

          &::before {
            width: rem(30px);
            transform: rotate(45deg);
            top: rem(-2px);
            left: rem(-6px);
          }

          &::after {
            width: rem(30px);
            transform: rotate(-45deg);
            top: rem(-2px);
            left: rem(-6px);
          }
        }
      }
    }
  }
</style>
