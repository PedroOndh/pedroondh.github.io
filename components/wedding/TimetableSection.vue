<template>
  <section ref="timetableSection" class="wed-section wed-section__info">
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
          stroke-width="0.2rem"
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
            <img :src="item.icon" :alt="item.title" />
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
  import { throttle } from '../../utils/custom';

  const timetableSection = ref<HTMLElement | null>(null);

  const timetable = [
    {
      hour: '12:00',
      title: 'Recepción',
      description: 'Damos la bienvenida a todos los invitados',
      icon: '/assets/wedding/icons/hand.png'
    },
    {
      hour: '12:30',
      title: 'Ceremonia',
      description: 'Iniciamos la ceremonia',
      icon: '/assets/wedding/icons/rings.png'
    },
    {
      hour: '13:00',
      title: 'Cocktail',
      description: 'Un buen pinchoteo',
      icon: '/assets/wedding/icons/cocktail.png'
    },
    {
      hour: '15:00',
      title: 'Comida',
      icon: '/assets/wedding/icons/dish.png'
    },
    {
      hour: '17:00',
      title: 'Baile',
      icon: '/assets/wedding/icons/music.png'
    },
    {
      hour: '18:00',
      title: 'Fiesta',
      icon: '/assets/wedding/icons/celebration.png'
    },
    {
      hour: '21:00',
      title: 'Cena',
      icon: '/assets/wedding/icons/pizza.png'
    }
  ];

  function getSectionScrollPercentage(section) {
    // Get the element if a selector string was passed
    const el = typeof section === 'string' ? document.querySelector(section) : section;

    if (!el) {
      console.error('Section not found');
      return 0;
    }

    // Get section position and dimensions
    const rect = el.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const sectionHeight = rect.height;
    const viewportHeight = window.innerHeight;

    // Current scroll position
    const scrollPos = window.scrollY;

    // Calculate when section starts and ends being visible
    const scrollStart = sectionTop - viewportHeight;
    const scrollEnd = sectionTop + sectionHeight;

    // Calculate percentage
    const totalScrollDistance = scrollEnd - scrollStart - viewportHeight;
    const currentScroll = scrollPos - scrollStart;
    const percentage = (currentScroll / totalScrollDistance) * 100;

    // Clamp between 0 and 100
    const progress = Math.max(0, Math.min(100, percentage));
    section.style = `--progress: ${progress}`;
  }

  onMounted(() => {
    window.addEventListener(
      'scroll',
      throttle(() => {
        getSectionScrollPercentage(timetableSection.value);
      }, 100)
    );
  });
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
      path {
        stroke-dasharray: 1400;
        stroke-dashoffset: calc(2800 - calc(2800 * (var(--progress) / 100)));
        transition: stroke-dashoffset 0.3s ease;
      }
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
      img {
        width: 6rem;
        height: 6rem;
      }
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
        transform: scale(0.7);
      }
      &__info-icon-wrapper {
        gap: 0;
      }
      &__info-icon {
        width: 7rem;
        height: 7rem;
        img {
          width: 4rem;
          height: 4rem;
        }
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
