<template>
  <section class="wed-section wed-section__info">
    <h2>Horario</h2>
    <div class="wed-section__info-content">
      <div v-for="item in timetable" :key="item.hour" class="wed-section__info-item">
        <p class="wed-section__info-hour">
          <b>{{ item.hour }}</b>
        </p>
        <div class="wed-section__info-icon">
          <img :src="`/images/wedding/icons/${item.icon}.svg`" :alt="item.title" />
        </div>
        <div class="wed-section__info-text">
          <p>
            <b>{{ item.title }}</b>
          </p>
          <p>{{ item.description }}</p>
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
      title: 'Comida',
      description: 'Comida'
    },
    {
      hour: '17:00',
      title: 'Comida',
      description: 'Baile'
    },
    {
      hour: '18:00',
      title: 'Fiesta',
      description: 'Baile'
    },
    {
      hour: '21:00',
      title: 'Cena',
      description: 'Baile'
    }
  ];
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/wedding.scss';

  .wed-section {
    &__info {
      background: linear-gradient(180deg, $white 0%, $light-blue 100%);
    }
    &__info-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 35rem;
      margin: 0 auto;
    }
    &__info-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      margin-bottom: 2rem;
      &:last-child .wed-section__info-icon::before {
        display: none;
      }
    }
    &__info-hour {
      font-size: 1rem;
      color: $dark-blue;
      margin: 0;
      width: 4rem;
    }
    &__info-icon {
      position: relative;
      width: 4rem;
      height: 4rem;
      background-color: $white;
      border-radius: 50%;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      &::before {
        content: '';
        position: absolute;
        bottom: -5rem;
        left: 2rem;
        width: 1px;
        height: 5rem;
        background-color: $pink;
      }
    }
    &__info-text {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      text-align: left;
      p {
        margin: 0.5rem 0;
      }
    }
  }
</style>
