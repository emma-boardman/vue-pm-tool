import { mount } from '@vue/test-utils'
import Calendar from '../../../src/components/Calendar/Calendar'


describe('Calendar', () => {
    let wrapper 

    beforeEach(() => {
        wrapper = mount(Calendar)
    })

    test("component is rendered", () => {
        expect(wrapper.element).toMatchSnapshot();
    })
})