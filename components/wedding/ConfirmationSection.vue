<template>
  <section class="wed-section wed-section__confirmation">
    <h2>Confirma tu asistencia</h2>
    <div>
      ¿Vas a acompañarnos en este día? Confirma tu asistencia.
      <br />
      Nos vendría bien saberlo antes del
      <b>1 de Febrero</b>
      .
    </div>
    <div class="wed-section__confirmation-form">
      <label for="name">Nombre*</label>
      <input type="text" id="name" name="name" v-model="form.name" />
      <label for="guests">Asistentes*</label>
      <select type="select" id="guests" name="guests" v-model="form.guests">
        <option value="0">No asistiré</option>
        <option v-for="i in guest?.guests" :key="i" :value="i">{{ i }}</option>
      </select>
      <div class="wed-section__confirmation-form-bus-container">
        <div class="flex">
          <input type="checkbox" id="bus" name="bus" v-model="form.bus" />
          <label for="bus">Utilizaré el autobus</label>
        </div>
        <div class="wed-section__confirmation-form-bus-note">
          Fletaremos un autobus Gijón - Candás - La Martona
        </div>
        <template v-if="form.bus">
          <label for="busStop">Parada de autobus*</label>
          <select type="select" id="busStop" name="busStop" v-model="form.busStop">
            <option value="candas">Candás</option>
            <option value="gijon">Gijón</option>
          </select>
          <label for="busSites">Plazas de autobus*</label>
          <select type="select" id="busSites" name="busSites" v-model="form.busSites">
            <option v-for="i in guest?.guests" :key="i" :value="i">{{ i }}</option>
          </select>
        </template>
      </div>
      <div class="wed-section__confirmation-form-allergies-container">
        <div class="flex">
          <input type="checkbox" id="vegan" name="vegan" v-model="form.vegan" />
          <label for="vegan">Vegetariano/Vegano</label>
        </div>
        <div class="flex">
          <input type="checkbox" id="gluten" name="gluten" v-model="form.gluten" />
          <label for="gluten">Sin gluten</label>
        </div>
        <div class="flex">
          <input type="checkbox" id="lactose" name="lactose" v-model="form.lactose" />
          <label for="lactose">Sin lactosa</label>
        </div>
        <label class="wed-section__confirmation-form-allergies-label" for="allergies">
          Otras alergias, condiciones alimentarias, etc.
        </label>
        <textarea
          class="wed-section__confirmation-form-allergies-textarea"
          id="allergies"
          name="allergies"
          v-model="form.allergies"
        ></textarea>
      </div>
      <label for="message">Comentarios</label>
      <textarea id="message" name="message" rows="3" v-model="form.message"></textarea>
      <button
        :class="{
          'wed-section__confirmation-form-button--disabled': disabled
        }"
        @click="submitForm"
        :disabled="disabled"
      >
        Enviar
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
  import guests from '../../utils/guests';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const guest = guests.find(guest => guest.id === (route.query.id as string));

  const form = ref({
    id: guest?.id || 0,
    name: guest?.name || '',
    guests: guest?.guests || 0,
    bus: false,
    busStop: undefined,
    busSites: undefined,
    vegan: false,
    gluten: false,
    lactose: false,
    allergies: undefined,
    message: undefined
  });

  const disabled = computed(() => {
    console.log(form.value.bus && (!form.value.busStop || !form.value.busSites));
    return (
      !form.value.name ||
      form.value.guests === undefined ||
      (form.value.bus && (!form.value.busStop || !form.value.busSites))
    );
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
    &__confirmation-form-bus-container,
    &__confirmation-form-allergies-container {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
      padding: 1rem;
      border: 1px solid $dark-blue;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
    }
    &__confirmation-form-bus-note {
      font-size: 0.8rem;
    }
    &__confirmation-form-button--disabled {
      opacity: 0.5;
      pointer-events: none;
    }
    &__confirmation-form-allergies-label {
      margin-top: 1rem;
    }
    &__confirmation-form-allergies-textarea {
      margin: 0;
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

  input[type='checkbox'] {
    width: auto;
    margin: 0 0.5rem 0 0;
    width: 1.4rem;
    height: 1.4rem;
    accent-color: $dark-blue;
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

  .flex {
    display: flex;
    align-items: center;
    width: 100%;
  }
</style>
