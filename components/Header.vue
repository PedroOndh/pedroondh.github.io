<template>
  <header class="cv-header">
    <nav class="cv-header__menu rti-layout-wrapper">
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
          <NuxtLink class="cv-header__link" @click="toggleMenu()" to="#portfolio">
            Portfolio
          </NuxtLink>
          <NuxtLink class="cv-header__link" @click="toggleMenu()" to="#contact">Contact</NuxtLink>
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

  const isMenuVisible = ref(false);

  const toggleMenu = (value: boolean = !isMenuVisible.value): void => {
    if (window.innerWidth <= 1023) {
      isMenuVisible.value = value;
    }
  };
</script>

<style lang="scss" scoped>
  .cv-header {
    position: fixed;
    top: 0;
    width: 100vw;
    background-color: $white;
    z-index: 999;

    &__menu {
      position: relative;
      background-color: $dark-black;
      color: $white;
      height: rem(80px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: rem(16px) rem(40px) rem(16px) rem(40px);
      box-shadow: 0 10px 30px 0 rgba($light-black, 0.75);
    }

    &__links {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    &__link-container {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    &__link {
      display: inline-block;
      color: $white;
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
        margin: 0 rem(20px);
        top: rem(20px);
        padding: 0 rem(20px) 0 rem(20px);
        height: rem(60px);
      }

      &__link {
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
        top: rem(-20px);
        left: calc(200vw);
        background-color: $black;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: rem(140px);
        padding-left: rem(60px);
        transition-property: left;
        transition-duration: 0.5s;

        &--opened {
          top: rem(-20px);
          left: rem(-20px);
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