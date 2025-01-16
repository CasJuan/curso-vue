<template>

    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3 data-testid="square-label">Square: {{ squareCounter }}</h3>

        <div>
            <button class="p-5  bg-blue-500 rounded hover:bg-blue-700 mr-2" @click="counter++"> +1</button>
            <button class="p-5  bg-blue-500 rounded hover:bg-blue-700 mr-2" @click="counter--"> -1</button>
        </div>
    </section>


</template>


<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';



/* import {computed, ref} from 'vue'; */

/* const props = defineProps({
    value: {type: Number, required:true},
    }); */
    
    interface Props {
        value: number;
    }
    const props = defineProps<Props>(); 
    
    const {counter, squareCounter} =  useCounter(props.value);
/* 
    const counter = ref(props.value);
    const squareCounter = computed(() => counter.value * counter.value); */

</script>

<!-- /* <style scoped lang="postcss">
    .btn{
        @apply p-5 bg bg-blue-500 rounded hover:bg-blue-700 mr-2;
    }

</style>  */ -->

