import { mount } from '@vue/test-utils'
import Layout from '../../../src/component/Footer/Footer'


describe('Footer', () => {
    let wrapper 

    beforeEach(() => {
        wrapper = mount(Footer)
    })

    test("component is rendered", () => {
        expect(wrapper.element).toMatchSnapshot();
    })

})