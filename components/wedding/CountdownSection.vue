<template>
  <section class="wed-section wed-section__time">
    <h2>Cuenta atrás</h2>
    <img
      class="wed-section__time-icon"
      src="/assets/wedding/icons/hourglass.png"
      alt="Reloj de arena"
    />
    <div>¡Tic Tac!</div>
    <div class="wed-section__time-content">
      <div class="wed-section__time-item">
        <div class="wed-section__time-item-number">{{ days }}</div>
        días
      </div>
      <div class="wed-section__time-item">
        <div class="wed-section__time-item-number">{{ hours }}</div>
        horas
      </div>
      <div class="wed-section__time-item">
        <div class="wed-section__time-item-number">{{ minutes }}</div>
        minutos
      </div>
      <div class="wed-section__time-item">
        <div class="wed-section__time-item-number">{{ seconds }}</div>
        segundos
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const interval = ref<NodeJS.Timeout | null>(null);
  const weddingDate = new Date('2026-05-09 12:00:00');

  const days = ref(0);
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);

  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate.getTime() - now.getTime();
    days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((diff % (1000 * 60)) / 1000);
  }

  onMounted(() => {
    updateCountdown();
    interval.value = setInterval(updateCountdown, 1000);
  });

  onUnmounted(() => {
    if (interval.value) {
      clearInterval(interval.value);
    }
  });
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/wedding.scss';

  .wed-section {
    &__time {
      background-color: $light-pink;
    }
    &__time-icon {
      width: 7rem;
      height: 7rem;
    }
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    &__time-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      width: 100%;
      max-width: 35rem;
      margin: 2rem auto 0;
    }
    &__time-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
    &__time-item-number {
      font-size: 2rem;
      font-weight: bold;
      color: $dark-blue;
    }
  }
</style>
