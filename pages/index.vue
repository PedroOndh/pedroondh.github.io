<template>
  <div class="home">
    <header class="header">
      <svg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='-15 0 178 175' style="font-family: 'Archivo Black', sans-serif; font-size: 90px; font-weight: 600;">
        <text class="p" x="2" y="75" fill="#FFF" style="transform: skewX(20deg);">P</text>
        <text class="o" x="50" y="100" fill="#FFF" style="transform: skewX(20deg);">O</text>
        <text class="n" x="38" y="140" fill="#FFF" style="transform: skewX(-20deg);">N</text>
        <text class="d" x="101" y="162" fill="#FFF" style="transform: skewX(-20deg);">D</text>
        <text class="dot" x="162" y="162" fill="#FFF" style="transform: skewX(-20deg);">.</text>
      </svg>
      <div class="header__links">
        <a class="header__link" href="/cv">CV</a>
      </div>
    </header>
    <main>
      <h2 class="subtitle">Games</h2>
      <div class="game__list">
        <a v-for="game in games" class="game__item" :href="game.link">
          <img class="game__item-background" :src="game.image" :alt="game.title" />
          <span class="game__item-title">{{ game.title }}</span>
        </a>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Pedro Ondiviela',
  meta: [{
    name: 'description',
    content: 'My personal website with a CV and some games.'
  }],
})

const games = [{
  title: 'Pink ice',
  link: '/games/pink-ice',
  image: '/assets/games/pink-ice.png'
},
  {
    title: 'Ducky Fog',
    link: '/games/ducky-fog',
    image: '/assets/games/ducky-fog.png'
  }]
</script>
<style lang="scss" scoped>
.home {
  color: $white;
  background-color: #000;
  min-height: 100vh;
  * {
    font-family: 'Archivo Black', sans-serif !important;
  }
}
.header {
 display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  &__link {
    padding: 0.5rem;
    color: $white;
    text-decoration: none;
    border-radius: 0.5rem;
    transition: background-color 0.3s;
    &:hover {
      background-color: rgba($white, 0.2);
    }
  }
}
.subtitle {
  padding-left: 2rem;
  margin: 0;
  color: rgba($white, 0.6);
  font-style: italic;
  text-align: left;
}
.game {
  &__list {
   display: flex;
    flex-wrap: wrap;
    padding: 2rem;
    gap: 1rem;
  }
  &__item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 20rem;
    border-radius: 1rem;
    box-shadow: inset 0 0 8px #000;
    color: $white;
    text-decoration: none;
    overflow: hidden;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: inset 0 0 8px #000;
    }
    &:hover {
      .game__item-background {
        transform: rotate(4deg) scale(1.1);
      }
    }
  }
  &__item-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    opacity: 0.5;
  }
  &__item-title {
    position: relative;
    text-transform: uppercase;
    color: $white;
  }
}

@media screen and (max-width: 1024px) {
  .game {
    &__list {
      flex-direction: column;
      align-items: center;
    }
    &__item {
      width: 100%;
    }
  }
}
</style>