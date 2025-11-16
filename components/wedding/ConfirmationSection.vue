<template>
  <section class="wed-section wed-section__confirmation">
    <h2>Confirmación de asistencia</h2>
    <label for="name">Nombre</label>
    <input type="text" id="name" name="name" />
    <label for="guests">Número de invitados</label>
    <input type="number" id="guests" name="guests" />
    <label for="message">Comentarios</label>
    <textarea id="message" name="message"></textarea>
    <button>Enviar</button>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @import '../../assets/styles/wedding.scss';

  .wed-section {
    $component-class: &;
    &__confirmation {
      background: linear-gradient(180deg, $white 0%, $light-blue 100%);
    }
  }
</style>
