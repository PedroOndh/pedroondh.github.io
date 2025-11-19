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
    <div
      class="wed-section__confirmation-form"
      :class="{ 'wed-section__confirmation-form--disabled': previousForm?.length || !guest }"
    >
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
        v-if="!previousForm?.length && guest"
        :class="{
          'wed-section__confirmation-form-button--disabled': disabled
        }"
        @click="submitForm"
        :disabled="disabled"
      >
        Enviar
      </button>
    </div>
    <div v-if="!guest" class="wed-section__confirmation-form-created">
      No se ha encontrado el invitado
    </div>
    <div v-if="previousForm?.length" class="wed-section__confirmation-form-created">
      ¡Gracias por confirmar tu asistencia!
    </div>
  </section>
</template>

<script setup lang="ts">
  import guests from '../../utils/guests';
  import { useRoute } from 'vue-router';
  import { createClient } from '@supabase/supabase-js';

  const supabaseUrl = 'https://ymzquqylsbbmyjuqksod.supabase.co';
  const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltenF1cXlsc2JibXlqdXFrc29kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzU4NDUwNSwiZXhwIjoyMDc5MTYwNTA1fQ.w41WLd59-_NPXtoFnGMrwYGPa0KUdFJFH1iDadSC4EQ';
  const supabase = createClient(supabaseUrl, supabaseKey);

  const previousForm = ref();

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
    return (
      !form.value.name ||
      form.value.guests === undefined ||
      (form.value.bus && (!form.value.busStop || !form.value.busSites))
    );
  });

  async function submitForm() {
    try {
      const { data, error } = await supabase
        .from('Wedding guests')
        .insert([{ ...form.value }])
        .select();
      if (error) {
        console.error(error);
      } else {
        console.log('added data', data);
        previousForm.value = [form.value];
      }
    } catch (e) {
      console.error(e);
    }
  }

  onMounted(async () => {
    let { data, error } = await supabase.from('Wedding guests').select('*').eq('id', form.value.id);
    console.log('retrieved data', data);
    if (error) {
      console.error(error);
    } else if (data?.length) {
      previousForm.value = data || [];
      form.value = previousForm.value[0];
    }
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
      &--disabled {
        opacity: 0.8;
        pointer-events: none;
      }
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
    &__confirmation-form-created {
      font-size: 1rem;
      font-weight: bold;
      background-color: $light-pink;
      padding: 1rem;
      border-radius: 0.5rem;
      margin: 1rem 0;
      width: 100%;
      max-width: 35rem;
      margin: 0 auto;
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
