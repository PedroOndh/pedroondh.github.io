<template>
  <section class="cv-portfolio cv-section" id="portfolio">
    <h2>Portfolio</h2>
    <ul>
      <li v-for="project in portfolio">
        <a :href="project.link">
          <img :src="project.image" :alt="project.title" />
          <h3>{{ project.title }}</h3>
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
  const portfolio = [
    { title: 'Empathy Platform Docs', link: 'https://docs.empathy.co/', image: '' },
    { title: 'Imagine Your Data', link: 'https://imagineyourdata.com/', image: '' }
  ];
</script>
