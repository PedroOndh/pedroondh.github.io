<template>
  <footer class="cv-footer">
    <a
      class="cv-footer__media-link"
      href="https://es.linkedin.com/in/pedro-ondiviela"
      target="newwindow"
    >
      <img class="cv-footer__link-image" src="/assets/social/linkedin.svg" alt="LinkedIn logo" />
    </a>
    <a
      class="cv-footer__media-link"
      href="https://github.com/PedroOndh/cv-pedro"
      target="newwindow"
    >
      <img class="cv-footer__link-image" src="/assets/social/github.svg" alt="Github logo" />
    </a>
  </footer>
</template>

<style lang="scss" scoped>
  .cv-footer {
    $component-class: &;
    position: relative;
    display: flex;
    justify-content: center;
    padding-bottom: rem(20px);
    color: $white;
    background-color: $dark-black;

    &__media-link {
      display: inline-block;
      color: $white;
      margin-right: rem(20px);
      margin-top: rem(20px);
    }

    &__link-image {
      color: $white;
      width: rem(40px);
    }
  }
</style>
