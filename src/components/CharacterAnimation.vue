<template>
  <div>
    <h3>Babylon character animation</h3>
    <canvas></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BasicScene } from '@/TypeScript/BasicScene';
import { StandardMaterials } from '@/TypeScript/StandardMaterials';
import { PBR } from '@/TypeScript/PBR';
import { Animations } from '@/TypeScript/Animations';
import { CharacterAnimations } from '@/TypeScript/CharacterAnimations';

export default defineComponent({
  name: 'CharacterAnimation',
  mounted(){
    const canvas = document.querySelector("canvas")!;
    // new BasicScene(canvas);
    // new StandardMaterials(canvas);
    // new PBR(canvas);
    new CharacterAnimations(canvas);
  }
  
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

canvas {
  width: 70%;
  height: 70%;
}

</style>
