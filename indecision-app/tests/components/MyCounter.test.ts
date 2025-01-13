import { describe, test } from "vitest";
import MyCounter from '@/components/MyCounter.vue';
import { mount } from '@vue/test-utils'

describe('<MyCounter/>', () => {
    test ('shoul match snapshot', () => {
        
        const wrapper = mount(MyCounter, {
            props: {
                value: 5,
            }
        });

        console.log(wrapper.html());


    });
})