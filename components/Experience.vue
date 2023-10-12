<template>
  <section class="cv-experience cv-section" id="experience">
    <div class="cv-experience__background">
      <svg viewBox="0 100 100" width="100%" height="100%">
        <Star v-for="index in 1000" :key="index" />
      </svg>
      <img class="cv-experience__moon" src="/assets/moon.svg" alt="Moon" />
      <img class="cv-experience__earth" src="/assets/earth.svg" alt="Earth" />
    </div>
    <h2 class="cv-experience__title">Experience</h2>
    <ul class="cv-experience__list">
      <li v-for="experience in experiences" class="cv-experience__list-item">
        <div class="cv-experience__list-item-background" />
        <div class="cv-experience__list-item-duration">{{ experience.duration }}</div>
        <div class="cv-experience__list-item-text">
          <h3 class="cv-experience__list-item-title">{{ experience.title }}</h3>
          <div class="cv-experience__list-item-company">
            <b>{{ experience.company }}</b>
          </div>
          <div class="cv-experience__list-item-time">
            {{ experience.start }} - {{ experience.end }}
          </div>
          <p class="cv-experience__list-item-description">{{ experience.description }}</p>
        </div>
        <div class="cv-experience__technologies-wrapper">
          <div
            v-if="experience.front"
            class="cv-experience__list-item-technologies cv-experience__list-item-technologies--front"
          >
            <div class="cv-experience__technology-title">Front</div>
            <div class="cv-experience__list-item-technology-wrapper">
              <span
                v-for="technology in experience.front"
                class="cv-experience__list-item-technology"
              >
                {{ technology }}
              </span>
            </div>
          </div>
          <div
            v-if="experience.test"
            class="cv-experience__list-item-technologies cv-experience__list-item-technologies--test"
          >
            <div class="cv-experience__technology-title">Test</div>
            <div class="cv-experience__list-item-technology-wrapper">
              <span
                v-for="technology in experience.test"
                class="cv-experience__list-item-technology"
              >
                {{ technology }}
              </span>
            </div>
          </div>
          <div
            v-if="experience.back"
            class="cv-experience__list-item-technologies cv-experience__list-item-technologies--back"
          >
            <div class="cv-experience__technology-title">Back</div>
            <div class="cv-experience__list-item-technology-wrapper">
              <span
                v-for="technology in experience.back"
                class="cv-experience__list-item-technology"
              >
                {{ technology }}
              </span>
            </div>
          </div>
          <div
            v-if="experience.ops"
            class="cv-experience__list-item-technologies cv-experience__list-item-technologies--ops"
          >
            <div class="cv-experience__technology-title">DevOps</div>
            <div class="cv-experience__list-item-technology-wrapper">
              <span
                v-for="technology in experience.ops"
                class="cv-experience__list-item-technology"
              >
                {{ technology }}
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
  import Star from '~/components/Star.vue';

  const experiences = [
    {
      title: 'Front-end Engineer',
      start: 'mar 2021',
      end: 'present',
      duration: '2y 8m',
      months: 31,
      company: 'Empathy.co',
      description: 'Front-end Engineer leading tech in the Documentation and web teams (3-4 devs).',
      front: ['Typescript', 'Vue', 'React', 'D3.js', 'Vuepress', 'Redux', 'Vuex', 'Nuxt', 'Jekyll'],
      test: ['Jest', 'Cypress'],
      back: ['Node.js', 'Express'],
      ops: ['Github actions', 'AWS', 'Jenkins']
    },
    {
      title: 'UX & Front-end',
      start: 'feb 2020',
      end: 'mar 2021',
      duration: '1y 2m',
      months: 14,
      company: 'Empathy.co',
      description:
        'Front-end Developer and UX Designer as part of the UX Team.\n' +
        '\n' +
        'Centered in developing complex layouts and animations.',
      front: ['Typescript', 'Vue', 'Vuex', 'React', 'Webpack', 'Nuxt', 'Jekyll', 'UX']
    },
    {
      title: 'Front-end Developer',
      start: 'oct 2019',
      end: 'feb 2020',
      duration: '5m',
      months: 5,
      company: 'Capgemini',
      description: 'Front-end development with React, Redux, websockets and API REST services',
      front: ['Typescript', 'React', 'Redux', 'Webpack'],
      back: ['Websockets', 'API REST']
    },
    {
      title: 'UX/UI Developer',
      start: 'oct 2018',
      end: 'sep 2019',
      duration: '1y',
      months: 12,
      company: 'DIL SE Estudio Creativo',
      description:
        'Development and layout of custom web pages with HTML, CSS, JavaScript, PHP, WordPress, responsive layouts & Génesis Framework.\n' +
        '\n' +
        'Occasional intervention in the design process, highlighting UX values of the final product.',
      front: ['HTML', 'CSS', 'SCSS', 'Javascript', 'Wordpress', 'UX'],
      back: ['PHP']
    },
    {
      title: 'Scholarship in web development',
      start: 'may 2018',
      end: 'sep 2018',
      duration: '5m',
      months: 5,
      company: '3WAYS',
      description:
        'Edition and updating of Apps and web pages with HTML, CSS, JavaScript, JQuery & Bootstrap.\n' +
        'Edition of back and databases with PHP, MySQL y PHPMyAdmin.',
      front: ['HTML', 'CSS', 'Javascript', 'JQuery', 'Bootstrap'],
      back: ['PHP', 'MySQL']
    }
  ];
</script>
<style lang="scss" scoped>
  .cv-experience {
    $component-class: &;
    position: relative;
    background: linear-gradient(0deg, $dark-blue 0%, $dark-black 100%);
    padding-top: rem(100px);
    padding-bottom: rem(100px);
    overflow: hidden;
    &__background {
      width: 100%;
      height: 100%;
    }
    &__moon,
    &__earth {
      position: absolute;
    }
    &__moon {
      top: 0;
      left: 60vw;
      width: 30vw;
    }
    &__earth {
      bottom: -55vw;
      left: 10vw;
      width: 80vw;
    }
    &__title {
      position: relative;
      color: $white;
    }
    &__list {
      position: relative;
      padding: 0;
    }
    &__list-item {
      position: relative;
      display: flex;
      list-style: none;
      margin: rem(20px) 0;
      &:first-child {
        #{$component-class}__list-item-duration {
          color: $white;
          background-color: $dark-black;
        }
      }
      &:not(:last-child) {
        &:after {
          content: '';
          position: absolute;
          z-index: 2;
          bottom: rem(-30px);
          left: rem(38px);
          border-right: 2px dashed $white;
          height: calc(100% - 15px);
          //background-color: $white;
        }
      }
    }
    &__list-item-background {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba($white, 0.8);
      border-radius: rem(20px);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(7px);
    }
    &__list-item-duration,
    &__list-item-text,
    &__technologies-wrapper {
      position: relative;
    }
    &__list-item-duration {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: rem(60px);
      height: fit-content;
      margin: rem(10px) 0 0 rem(10px);
      padding: rem(10px);
      color: $black;
      background-color: $white;
      border-radius: rem(15px);
      font-size: $font-size--tiny;
    }
    &__list-item-text,
    &__technologies-wrapper {
      width: 50%;
    }
    &__list-item-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: rem(10px) rem(20px);
    }
    &__list-item-title {
      margin: 0 0 rem(10px);
    }
    &__list-item-description {
      text-align: left;
    }
    &__technologies-wrapper {
      display: flex;
      padding: rem(10px);
    }
    &__list-item-technology-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    &__list-item-technologies {
      padding: rem(6px);
      margin: rem(6px) 0;
      &:not(:first-child) {
        border-left: 1px solid $black;
      }
    }
    &__months-wrapper {
      display: flex;
    }
    &__month {
      display: block;
      width: 4px;
      height: 4px;
      margin: 0;
      background-color: $blue;
      border-radius: 99999px;
    }
    &__technology-title {
      color: $dark-black;
      font-weight: $font-weight--bold;
      margin-bottom: rem(6px);
    }
    &__list-item-technology {
      color: $white;
      background-color: $dark-black;
      padding: rem(2px) rem(10px);
      margin: rem(4px);
      border-radius: 9999px;
      font-size: $font-size--small;
    }
    @media screen and (max-width: $breakpoint__small-desktop--max) {
      &__list-item {
        margin-left: rem(20px);
        margin-right: rem(20px);
      }
      &__list-item-technology {
        padding: rem(1px) rem(6px);
        font-size: $font-size--tiny;
      }
    }
    @media screen and (max-width: $breakpoint__tablet--max) {
      &__moon {
        left: 70vw;
      }
      &__earth {
        left: 5vw;
        width: 90vw;
      }
      &__list-item {
        flex-direction: column;
        &:after {
          display: none;
        }
      }
      &__list-item-duration {
        margin: rem(10px);
      }
      &__list-item-text,
      &__technologies-wrapper {
        width: 100%;
      }
    }
    @media screen and (max-width: $breakpoint__mobile--max) {
      &__moon {
        top: rem(100px);
        left: 50vw;
        width: 70vw;
      }
      &__earth {
        bottom: 10vw;
      }
      &__list-item-text,
      &__technologies-wrapper {
        flex-direction: column;
      }
      &__list-item-technologies {
        &:not(:first-child) {
          border-top: 1px solid $black;
          border-left: none;
        }
      }
    }
  }
</style>
