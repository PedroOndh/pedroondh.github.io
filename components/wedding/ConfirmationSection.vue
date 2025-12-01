<template>
  <section class="wed-section wed-section__confirmation">
    <h2>Confirma tu asistencia</h2>
    <div class="text">
      Nos sentiríamos muy afortunados de que nos acompañaseis en este día tan feliz para nosotros.
      <br />
      <br />
      Por favor confirma tu asistencia antes del
      <b>1 de Abril</b>
      para poder tenerlo todo organizado.
    </div>
    <ClientOnly>
      <div class="wed-section__confirmation-form">
        <label for="name">Nombre*</label>
        <input type="text" id="name" name="name" v-model="form.name" :disabled="disabledForm" />
        <label for="guests">Asistentes*</label>
        <select
          type="select"
          id="guests"
          name="guests"
          v-model="form.guests"
          :disabled="disabledForm"
        >
          <option value="0">No asistiré</option>
          <option v-for="i in guest?.guests" :key="i" :value="i">{{ i }}</option>
        </select>
        <div class="wed-section__confirmation-form-bus-container">
          <div class="flex">
            <input
              type="checkbox"
              id="bus"
              name="bus"
              v-model="form.bus"
              :disabled="disabledForm"
            />
            <label for="bus">Utilizaré el autobus</label>
          </div>
          <div class="wed-section__confirmation-form-bus-note">
            Para facilitaros la ida y sobre todo la vuelta, fletaremos un autobus Gijón - Candás -
            La Martona / La Martona - Candás - Gijón
          </div>
          <template v-if="form.bus">
            <label for="busStop">Parada de autobus*</label>
            <select
              type="select"
              id="busStop"
              name="busStop"
              v-model="form.busStop"
              :disabled="disabledForm"
            >
              <option value="candas">Candás</option>
              <option value="gijon">Gijón</option>
            </select>
            <label for="busSites">Plazas de autobus*</label>
            <select
              type="select"
              id="busSites"
              name="busSites"
              v-model="form.busSites"
              :disabled="disabledForm"
            >
              <option v-for="i in guest?.guests" :key="i" :value="i">{{ i }}</option>
            </select>
          </template>
        </div>
        <div class="wed-section__confirmation-form-allergies-container">
          <div class="flex">
            <input
              type="checkbox"
              id="gluten"
              name="gluten"
              v-model="form.gluten"
              :disabled="disabledForm"
            />
            <label for="gluten">Sin gluten</label>
          </div>
          <div class="flex">
            <input
              type="checkbox"
              id="vegan"
              name="vegan"
              v-model="form.vegan"
              :disabled="disabledForm"
            />
            <label for="vegan">Vegetariano/Vegano</label>
          </div>

          <label class="wed-section__confirmation-form-allergies-label" for="allergies">
            Alergias, intoleracias o cosas que creas que debamos saber:
          </label>
          <textarea
            class="wed-section__confirmation-form-allergies-textarea"
            id="allergies"
            name="allergies"
            v-model="form.allergies"
            :disabled="disabledForm"
          ></textarea>
        </div>
        <label for="message">Comentarios</label>
        <textarea
          id="message"
          name="message"
          rows="3"
          v-model="form.message"
          :disabled="disabledForm"
        ></textarea>
        <button
          v-if="!disabledForm"
          :class="{
            'wed-section__confirmation-form-button--disabled': disabledSubmit
          }"
          @click="submitForm"
          :disabled="disabledSubmit"
        >
          Enviar
        </button>
      </div>
    </ClientOnly>
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

  const guest = computed(() => guests.find(guest => guest.id === (route.query.id as string)));

  const form = ref({
    id: guest?.value?.id || 0,
    name: guest?.value?.name || '',
    guests: guest?.value?.guests || 0,
    bus: false,
    busStop: undefined,
    busSites: undefined,
    vegan: false,
    gluten: false,
    allergies: undefined,
    message: undefined
  });

  const disabledForm = computed(() => {
    return !!previousForm.value?.length || !guest.value;
  });

  const disabledSubmit = computed(() => {
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
      text-align: left;
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
    transition: background-color 0.3s ease;
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
