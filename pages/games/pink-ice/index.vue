<template>
  <GameLayout
      :level="level"
      :titleScreen="gameState === 'title'"
      @top="topFunction"
      @left="leftFunction"
      @right="rightFunction"
      @bottom="bottomFunction"
      @restart="position = [...initialPosition]"
  >
      <div class="game" :class="{
        'game--tutorial': level === 0,
        'game--win': gameState === 'win',
        'game--lose': gameState === 'lose',
        'game--final-win': gameState === 'final-win',
      }" :style="`--cell: ${width / puzzles[level][0].length}rem`">
        <template v-for="level in puzzles[level]">
          <div v-for="(cell, cellIndex) in level.split('')" :key="cellIndex" class="game__cell" :class="{
            'game__cell--rock': cell === 'x',
            'game__cell--lava': cell === 'l',
            'game__cell--stop': cell === 's',
            'game__cell--end': cell === 'e',
          }"></div>
        </template>
        <div class="game__player" :style="`--positionLeft: ${position[0]}; --positionTop: ${position[1]}`"></div>
      </div>
    <template #title-screen>
      <div class="title-screen">
        <div class="title-screen__title">PINK <span class="title-screen__word">ICE</span></div>
        <button class="title-screen__button" @click="gameState = 'playing'">Play</button>
      </div>
    </template>
  </GameLayout>
</template>
<script setup lang="ts">
import GameLayout from "~/components/games/GameLayout.vue";
import puzzles from "assets/levels/pink-ice";

useHead({
  title: 'Pink Ice',
  meta: [{
    name: 'description',
    content: 'A minimalistic sliding game with 50+ levels, increasing difficulty and different special tiles. Play it with arrow keys or cursor! Adapted for desktop and mobile, and with a fullscreen mode. :D'
  }],
})

const width = 29;

const gameState = ref<'title' | 'playing' | 'win' | 'lose' | 'final-win'>("title");
const level = ref(0)
const initialPosition = ref([0,0]);
const position = ref([0,0]);
const end = ref([0,0]);
const rocks = ref<Array<[number, number, string]>>([]);
const start = ref(Date.now());
const timer = ref('')

const buildLevel = () => {
  // Reset rocks
  rocks.value = [];
  puzzles[level.value].forEach((row, rowIndex) => {
    const cells = row.split("");
    cells.forEach((cell, cellIndex) => {
      if (cell === "o") {
        initialPosition.value = [cellIndex, rowIndex];
        position.value = [cellIndex, rowIndex];
      } else if (cell === "x") {
        rocks.value.push([cellIndex, rowIndex, "rock"]);
      } else if (cell === "l") {
        rocks.value.push([cellIndex, rowIndex, "lava"]);
      } else if (cell === "s") {
        rocks.value.push([cellIndex, rowIndex, "stop"]);
      } else if (cell === "e") {
        end.value = [cellIndex, rowIndex];
      }
    });
  });
};

const winLevel = () => {
  gameState.value = "win";
  setTimeout(() => {
    level.value = level.value + 1;
    buildLevel();
    gameState.value = "playing";
  }, 500);
};

const loseLevel = () => {
  gameState.value = "lose";
  setTimeout(() => {
    position.value = [...initialPosition.value];
    gameState.value = "playing";
  }, 500);
};

const nextLevel = () => {
  if (position.value[0] === end.value[0] && position.value[1] === end.value[1]) {
    if (level.value === puzzles.length - 1) {
      // If this was the last level: win the game
      const s = (Date.now() - start.value) / 1000;
      timer.value = `${s / 60 / 60}h ${
          (s / 60) % 60
      }m ${s % 60}s`;
      gameState.value = "final-win";
    } else {
      winLevel();
    }
  }
};

const movePlayer = (axis: 0 | 1, perpendicularAxis: 0 | 1, movingForward: boolean) => {
  const relevantRocks = rocks.value
      .filter((rock) => rock[axis] === position.value[axis]) // Filtering rocks in this axis
      .filter((rock) =>
          movingForward
              ? rock[perpendicularAxis] > position.value[perpendicularAxis]
              : rock[perpendicularAxis] < position.value[perpendicularAxis]
      ); // Filtering rocks that are in the desired direction
  if (relevantRocks.length) {
    // If there are rocks in this path
    const minmax = movingForward
        ? Math.min(...relevantRocks.map((rock) => rock[perpendicularAxis]))
        : Math.max(...relevantRocks.map((rock) => rock[perpendicularAxis]));
    const relevantRock = relevantRocks.filter(
        (rock) => rock[perpendicularAxis] === minmax
    )[0];
    if (relevantRock[2] === "rock") {
      position.value[perpendicularAxis] = movingForward ? minmax - 1 : minmax + 1;
    } else {
      position.value[perpendicularAxis] = minmax;
      if (relevantRock[2] === "lava") {
        loseLevel();
      }
    }
  } else {
    const maxCells =
        axis === 1 ? puzzles[level.value][position.value[1]].length : puzzles[level.value].length;
    position.value[perpendicularAxis] = movingForward ? maxCells - 1 : 0;
  }
  nextLevel();
};

const topFunction = () => movePlayer(0, 1, false);
const leftFunction = () => movePlayer(1, 0, false);
const rightFunction = () => movePlayer(1, 0, true);
const bottomFunction = () => movePlayer(0, 1, true);

const keyDown = (event: KeyboardEvent) => {
  if (gameState.value !== 'playing') return
  if (event.key === 'ArrowUp') topFunction();
  if (event.key === 'ArrowLeft') leftFunction();
  if (event.key === 'ArrowRight') rightFunction();
  if (event.key === 'ArrowDown') bottomFunction();
}

onMounted(() => {
  buildLevel();
  document.addEventListener('keydown', keyDown)
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', keyDown)
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap");
@import "../../../assets/styles/games/pink-ice";

html {
  font-size: 3vh;
  @media (orientation: portrait) {
    font-size: 2.9vw;
  }
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  color: $white;
  background-color: $black;
  overflow: hidden;
  font-family: "Archivo Black", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
}

.game {
  $component-class: &;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 29.03rem; // .03 for errors when summing cells on Mozilla
  &--tutorial {
    &:before {
      position: absolute;
      bottom: -4rem;
      content: "Use arrow keys (recommended) or click the arrows to play";
      color: $white;
      font-size: 1.2rem;
      font-weight: 500;
      text-align: center;
      text-transform: uppercase;
      @media (max-width: 767px) {
        // Removing arrow keys recommendation for hanheld devices
        display: none;
      }
    }
  }
  &--win,
  &--lose,
  &--final-win {
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: $white;
      background-color: rgba($black, 0.5);
      font-size: 2rem;
      text-transform: uppercase;
    }
  }
  &--win {
    &:after {
      content: "You win! Next level";
    }
  }
  &--lose {
    &:after {
      content: "You lose! Try again!";
    }
  }
  &--final-win {
    &:after {
      content: "Game completed!";
    }
  }
  &__player {
    position: absolute;
    width: var(--cell);
    height: var(--cell);
    background-color: $pink;
    top: calc(var(--positionTop) * var(--cell));
    left: calc(var(--positionLeft) * var(--cell));
    transition-property: top, left;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    @media (max-width: 767px) {
      transition-duration: 0.1s;
    }
  }
  &__cell {
    width: var(--cell);
    height: var(--cell);
    background-color: $white;
    &--rock {
      background: $black;
    }
    &--lava {
      background: linear-gradient(45deg, $orange, $red 150%);
    }
    &--stop {
      position: relative;
      background: linear-gradient(45deg, $light-blue -50%, $white 100%);
    }
    &--end {
      background: $green;
    }
  }
}

</style>