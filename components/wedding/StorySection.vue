<template>
  <div class="wed-section wed-section__story">
    <h2>Nuestra historia</h2>
    <div class="wed-section__story-text text">
      Hay momentos en la vida en los que te paras, miras atrás y sonríes. Estos años se nos han
      pasado en un abrir y cerrar de ojos y aunque hemos disfrutado cada momento juntos, no nos
      hemos dado casi ni cuenta
      <br />
      <br />
      Hemos creado juntos una historia llena de recuerdos maravillosos, con muchos viajes, planes
      improvisados, conversaciones interminables, muchos experimentos culinarios, innumerables coca
      colas zero, mucho aprendizaje y decisiones importantes, un nuevo miembro gatuno en la familia,
      horas y horas en el mar y bastantes conciertos de rap. Lo que está claro es que juntos todos
      los días son mejores
      <br />
      <br />
      Y aunque no teníamos ni idea del camino, vamos de la mano y en la misma dirección, creciendo
      juntos y eligiéndonos cada día
      <br />
      <br />
      Después de todos estos años compartiendo nuestra vida - y aprendiendo cada día a ser mejor
      equipo - queremos celebrar nuestra unión rodeados de las personas a las que más queremos
      <br />
      <br />
      Nos hace muchísima ilusión que formes parte de este día y nos acompañes en este momento tan
      especial. Gracias por compartir con nosotros este camino y estar siempre
    </div>
    <div class="wed-section__story-images">
      <img class="photo" src="/assets/wedding/candas-1.jpg" alt="Sara y Pedro" />
      <img class="photo" src="/assets/wedding/candas-2.jpg" alt="Sara y Pedro" />
      <img class="photo" src="/assets/wedding/candas-3.webp" alt="Sara y Pedro" />
      <img class="photo" src="/assets/wedding/candas-1.jpg" alt="Sara y Pedro" />
      <img class="photo" src="/assets/wedding/candas-2.jpg" alt="Sara y Pedro" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../assets/styles/wedding.scss';

  .wed-section {
    &__story {
      background: linear-gradient(180deg, $highlight 0%, $light-blue 100%);
    }
    &__story-text {
      font-style: italic;
      margin-bottom: 2rem;
    }
    &__story-images {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      width: 100%;
      max-width: 50rem;
      margin: 1rem auto 0;
    }
  }
</style>
