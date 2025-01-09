import { computed, ref } from "vue";

export const useCounter = (initalValue:number = 5) => {

    const counter = ref(initalValue);
    //const squareCounter = computed(() => counter.value * counter.value);


    return{
        counter,



        //read only
        squareCounter:computed(() => counter.value * counter.value),
    }
}