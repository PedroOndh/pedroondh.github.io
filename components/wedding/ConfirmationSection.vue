<template>
  <section class="wed-section wed-section__confirmation">
    <h2>Confirmación de asistencia</h2>
    <div class="wed-section__confirmation-form">
      <label for="name">Nombre</label>
      <input type="text" id="name" name="name" v-model="form.name" />
      <label for="guests">Asistentes</label>
      <select type="select" id="guests" name="guests" v-model="form.guests">
        <option value="0">No asistiré</option>
        <option v-for="i in guest?.guests" :key="i" :value="i">{{ i }}</option>
      </select>
      <label for="bus">Autobus</label>
      <input type="checkbox" id="bus" name="bus" v-model="form.bus" />
      <label for="allergies">Alergias</label>
      <textarea id="allergies" name="allergies" v-model="form.allergies"></textarea>
      <label for="message">Comentarios</label>
      <textarea id="message" name="message" rows="3" v-model="form.message"></textarea>
      <button @click="submitForm">Enviar</button>
    </div>
  </section>
</template>

<script setup lang="ts">
  import guests from '../../utils/guests';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const guest = guests.find(guest => guest.id === Number(route.query.id));

  const form = ref({
    id: guest?.id || 0,
    name: guest?.name || '',
    guests: guest?.guests || 0,
    allergies: '',
    message: '',
    bus: false
  });
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/wedding.scss';

  .wed-section {
    $component-class: &;
    &__confirmation {
      background: linear-gradient(180deg, $white 0%, $light-blue 100%);
    }
    &__confirmation-form {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
      max-width: 35rem;
      margin: 2rem auto 0;
    }
  }

  label {
    font-weight: bold;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid $dark-blue;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  button {
    font-size: 1rem;
    background-color: $dark-blue;
    color: $white;
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-transform: uppercase;
    &:hover {
      background-color: $pink;
    }
  }
</style>
