<template>
  <section class="wed-section wed-section__info">
    <h2>Horario</h2>
    <div class="wed-section__info-content">
      <svg
        class="wed-section__info-lines"
        width="10rem"
        height="82rem"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 160 80 C 160 80, 160 180, 0 240 C 0 240, 0 350, 160 400 C 160 400, 160 520, 0 560 C 0 560, 160 640, 160 720 C 160 720, 160 840, 0 880 C 0 880, 160 940, 160 1040"
          stroke="#fd7a7b"
          stroke-width="2px"
          fill="transparent"
        />
      </svg>
      <div
        v-for="(item, index) in timetable"
        :key="item.hour"
        class="wed-section__info-item"
        :class="{ 'wed-section__info-item--odd': index % 2 === 0 }"
      >
        <div class="wed-section__info-icon-wrapper">
          <p class="wed-section__info-hour">
            <b>{{ item.hour }}</b>
          </p>
          <div class="wed-section__info-icon">
            <img :src="`/images/wedding/icons/${item.icon}.svg`" :alt="item.title" />
          </div>
        </div>
        <div class="wed-section__info-text">
          <p class="wed-section__info-title">
            <b>{{ item.title }}</b>
          </p>
          <p class="wed-section__info-description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const timetable = [
    {
      hour: '12:00',
      title: 'Recepción',
      description: 'Damos la bienvenida a todos los invitados'
    },
    {
      hour: '12:30',
      title: 'Ceremonia',
      description: 'Iniciamos la ceremonia'
    },
    {
      hour: '13:00',
      title: 'Cocktail',
      description: 'Un buen pinchoteo'
    },
    {
      hour: '15:00',
      title: 'Comida'
    },
    {
      hour: '17:00',
      title: 'Baile'
    },
    {
      hour: '18:00',
      title: 'Fiesta'
    },
    {
      hour: '21:00',
      title: 'Cena'
    }
  ];
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/wedding.scss';

  .wed-section {
    $component-class: &;
    &__info {
      background: linear-gradient(180deg, $white 0%, $light-blue 100%);
    }
    &__info-content {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 35rem;
      margin: 0 auto;
    }
    &__info-lines {
      position: absolute;
      top: 0;
      left: calc(50% - 5rem);
    }
    &__info-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      &:last-child .wed-section__info-icon::before {
        display: none;
      }
      &--odd {
        flex-direction: row-reverse;
        #{$component-class}__info-icon-wrapper {
          justify-content: start;
          flex-direction: row-reverse;
        }
        #{$component-class}__info-text p {
          text-align: right;
        }
        #{$component-class}__info-icon::before {
          transform: rotate(45deg);
        }
      }
    }
    &__info-icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 0.5rem;
      width: 50%;
    }
    &__info-hour {
      font-size: 1rem;
      color: $dark-blue;
      margin: 0;
      width: 4rem;
    }
    &__info-icon {
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10rem;
      height: 10rem;
      background-color: $white;
      border-radius: 50%;
    }
    &__info-text {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      text-align: left;
      width: 50%;
      p {
        margin: 0.25rem 0;
      }
    }
    &__info-title {
      font-size: 1.25rem;
    }
    &__info-description {
      font-size: 1rem;
    }
    @media screen and (max-width: $breakpoint__tablet--max) {
      &__info-lines {
        transform-origin: center top;
        transform: scale(0.75);
      }
      &__info-icon-wrapper {
        gap: 0;
      }
      &__info-icon {
        width: 7.5rem;
        height: 7.5rem;
      }
      &__info-title {
        font-size: 1rem;
      }
      &__info-description {
        font-size: 0.8rem;
      }
      &__info-hour {
        font-size: 0.8rem;
        width: 3rem;
      }
    }
  }
</style>
