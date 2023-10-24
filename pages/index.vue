<template>
  <main class="cv-main">
    <Intro />
    <Experience />
    <Studies />
    <!-- <Portfolio /> -->
    <AboutThis />
  </main>
</template>
<style lang="scss" scoped>
  .cv-main {
    &__title-highlight {
      color: $highlight;
      display: block;
      line-height: rem(86px);
    }

    &__title {
      font-size: $font-size--big;
      text-transform: uppercase;
      font-weight: $font-weight--bolder;
      line-height: rem(67px);
      letter-spacing: 0;
      text-align: center;
      margin-top: 0;
      margin-bottom: rem(30px);
    }

    @media screen and (max-width: $breakpoint__tablet--max) {
      &__title {
        margin-bottom: rem(20px);
      }
    }
  }
</style>
