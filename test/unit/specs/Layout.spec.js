import { mount } from '@vue/test-utils'
import Layout from '../../../src/containers/Layout'


describe('Layout', () => {
    let wrapper 

    beforeEach(() => {
        wrapper = mount(Layout)
    })

    test("component is rendered", () => {
        expect(wrapper.element).toMatchSnapshot();
    })

    test("handleResourceAvailability returns first available timeslot", () => {
        wrapper.vm.handleResourceAvailability({
            resourceId: '2',
            taskEstimate: '4'
        })
        expect(wrapper.vm.firstAvailableStartTime).toEqual('Tues1300');
        expect(wrapper.vm.firstAvailableEndTime).toEqual('Tues1700');
    })
})