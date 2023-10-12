<template>
  <Header />
  <div class="cv-layout">
    <NuxtPage/>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.cv-layout {
  text-align: center;
  overflow: hidden;

  @media screen and (max-width: $breakpoint__tablet--max) {
    padding-top: rem(90px);
  }
}
</style>