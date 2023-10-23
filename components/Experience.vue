<template>
  <section :class="['cv-experience', 'cv-section', { 'cv-experience--day': day }]" id="experience">
    <div class="cv-experience__background">
      <svg class="cv-experience__star-wrapper" width="100%" height="100%">
        <Star
          v-for="index in 500"
          lass="cv-experience__star"
          :mobile="index % 5 === 0"
          :key="index"
        />
      </svg>
      <img class="cv-experience__moon" src="/assets/moon.svg" alt="Moon" />
      <div class="cv-experience__earth" />
      <div class="cv-experience__sun" />
      <img
        class="cv-experience__cloud cv-experience__cloud--1"
        src="/assets/cloud-1.svg"
        alt="Cloud"
      />
      <img
        class="cv-experience__cloud cv-experience__cloud--2"
        src="/assets/cloud-2.svg"
        alt="Cloud"
      />
      <img
        class="cv-experience__cloud cv-experience__cloud--3"
        src="/assets/cloud-3.svg"
        alt="Cloud"
      />
      <img
        class="cv-experience__cloud cv-experience__cloud--4"
        src="/assets/cloud-4.svg"
        alt="Cloud"
      />
    </div>
    <button
      :class="[
        'cv-experience__button',
        { 'cv-experience__button--day': day, 'cv-experience__button--night': !day }
      ]"
      @click="day = !day"
    />
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

  const day = ref(false);
  const experiences = [
    {
      title: 'Front-end Engineer',
      start: 'mar 2021',
      end: 'present',
      duration: '2y 9m',
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
    background: linear-gradient(0deg, $light-blue 0%, $blue 25%, $dark-blue 50%, $dark-black 100%);
    background-size: 100% 200%;
    background-position: 0 0;
    padding-top: rem(40px);
    padding-bottom: rem(100px);
    transition: background-position 1s ease;
    overflow: hidden;
    &--day {
      background-position: 0 100%;
      &:deep(circle) {
        transform: scale(0);
        animation: none;
      }
      #{$component-class} {
        &__sun {
          transform: rotate(0deg);
        }
        &__moon {
          transform: rotate(90deg);
        }
        &__cloud {
          &--1 {
            left: rem(-50px);
          }

          &--2 {
            left: 60%;
          }

          &--3 {
            left: 80%;
          }

          &--4 {
            left: 10%;
          }
        }
        &__button {
          color: $white;
          background-color: $dark-black;
        }
      }
    }
    &__background {
      width: 100%;
      height: 100%;
    }
    &__star-wrapper {
      position: absolute;
      top: 0;
      left: 0;
    }
    &__moon,
    &__earth,
    &__sun,
    &__cloud {
      position: absolute;
    }
    &__moon {
      top: 0;
      left: 60vw;
      width: 30vw;
      transition-property: transform;
      transition-duration: 1s;
      transform-origin: -50% 400%;
    }
    &__earth {
      bottom: -55vw;
      left: 10vw;
      width: 80vw;
      height: 80vw;
      border-radius: 50%;
      background-color: $dark-blue;
      overflow: hidden;
      &:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: url('/assets/map.svg');
        background-size: cover;
        transition: background-position 0.5s ease;
        @keyframes globeSpinning {
          0% {
            background-position: 0 0;
          }

          100% {
            background-position: 288% 0;
          }
        }
        animation: globeSpinning;
        animation-duration: 300s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
    }
    &__sun {
      top: -35vw;
      right: -10vw;
      width: 50vw;
      height: 50vw;
      border-radius: 50%;
      background-color: $highlight;
      transform: rotate(-90deg);
      transition-property: transform;
      transition-duration: 1s;
      transform-origin: -50% 250%;
    }
    &__cloud {
      left: -100vw;
      width: rem(300px);
      height: rem(300px);
      transition-property: top, left;
      transition-duration: 1s;
      &--1 {
        top: 10%;
      }
      &--2 {
        top: 20%;
      }
      &--3 {
        top: 50%;
      }
      &--4 {
        top: 60%;
      }
    }
    &__button {
      position: absolute;
      top: rem(20px);
      right: rem(20px);
      display: flex;
      justify-content: center;
      align-items: center;
      width: rem(60px);
      height: rem(30px);
      background: linear-gradient(90deg, $light-blue 0%, $blue 50%, $dark-black 100%);
      background-size: 200% 100%;
      border-radius: rem(20px);
      text-transform: uppercase;
      transition-property: background-position;
      transition-duration: 1s;
      overflow: hidden;
      cursor: pointer;
      &:after {
        content: '';
        width: rem(20px);
        height: rem(20px);
        border-radius: 50%;
        background: linear-gradient(180deg, $red -100%, $highlight 50%, $light-black 100%);
        background-size: 100% 200%;
        transform-origin: center 200%;
        transition-property: transform, background-position;
        transition-duration: 1s;
      }
      &--day {
        background-position: 0 0;
        &:after {
          transform: scale(1.5, 1.5) rotate(-35deg) translateY(60%);
          background-position: 0 0;
        }
      }
      &--night {
        background-position: 100% 0;
        &:after {
          transform: rotate(45deg);
          background-position: 0 100%;
        }
      }
      @media screen and (min-width: $breakpoint__small-desktop--min) {
        &:hover {
          &:after {
            transform: none;
          }
        }
      }
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
      flex-wrap: wrap;
      list-style: none;
      width: 60%;
      &:nth-child(odd) {
        margin: rem(20px) calc(40% - 20px) rem(20px) 20px;
      }
      &:nth-child(even) {
        margin: rem(20px) 20px rem(20px) calc(40% - 20px);
      }
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
          pointer-events: none;
          transition: border 0.5s;
        }
        &:nth-child(odd) {
          &:after {
            left: rem(39px);
            bottom: rem(-48px);
            width: calc(66.66% - #{rem(80px)});
            height: calc(100% + #{rem(3px)});
            border-left: 2px dashed $white;
            border-bottom: 2px dashed $white;
            border-bottom-left-radius: rem(80px);
          }
        }
        &:nth-child(even) {
          &:after {
            left: rem(39px);
            bottom: rem(-20px);
            height: calc(100% - #{rem(26px)});
            border-left: 2px dashed $white;
          }
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
    &__list-item-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 90%;
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
      justify-content: center;
      width: 90%;
      padding: rem(10px);
      margin-left: 10%;
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
      &__list-item-text {
        width: 80%;
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
        height: 90vw;
      }
      &__list-item {
        flex-direction: column;
        width: 90%;
        &:nth-child(odd),
        &:nth-child(even) {
          margin: rem(20px) 5%;
        }
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
      &__technologies-wrapper {
        margin-left: 0;
      }
    }
    @media screen and (max-width: $breakpoint__mobile--max) {
      padding-top: rem(40px);
      &__moon {
        top: rem(100px);
        left: 50vw;
        width: 70vw;
      }
      &__earth {
        left: -10vw;
        bottom: -40vw;
        width: 120vw;
        height: 120vw;
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
