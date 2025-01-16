import { describe, expect, test } from "vitest";
import MyCounter from '@/components/MyCounter.vue';
import { mount } from '@vue/test-utils'

describe('<MyCounter/>', () => {
    test ('shoul match snapshot', () => {
        
        const wrapper = mount(MyCounter, {
            props: {
                value: 5,
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    test('renders the counter value correctly', () => {
        const wrapper = mount(MyCounter, {
            props: {
                value: 5,
            }
        });
        
        const [counterLabel, squareLabel] = wrapper.findAll('h3');


        //console.log(expect(wrapper.find('h3').text()).toContain(`Counter:${value}`));
        //console.log(expect(wrapper.find('[data-testid="square-label"').text()).toContain(`Square:${value * value}`));


        expect(counterLabel.text()).toContain(`Counter: ${value}`);
        expect(squareLabel.text()).toContain(`Square: ${value * value}`);

        //console.log(wrapper.html());

    })

})