<template>
  <main class="home">
    <header class="header">
      <svg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='-15 0 178 175' style="font-family: 'Archivo Black'; font-size: 90px; font-weight: 600;">
        <text class="p" x="2" y="75" fill="#FFF" style="transform: skewX(20deg);">P</text>
        <text class="o" x="50" y="100" fill="#FFF" style="transform: skewX(20deg);">O</text>
        <text class="n" x="38" y="140" fill="#FFF" style="transform: skewX(-20deg);">N</text>
        <text class="d" x="101" y="162" fill="#FFF" style="transform: skewX(-20deg);">D</text>
        <text class="dot" x="162" y="162" fill="#FFF" style="transform: skewX(-20deg);">.</text>
      </svg>
      <div class="header__links">
        <a href="/cv">CV</a>
      </div>
    </header>
  </main>
</template>

<script setup lang="ts">
</script>
<style lang="scss" scoped>
.home {
  background-color: #000;
  height: 100%;
}
.header {
 display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}
</style>