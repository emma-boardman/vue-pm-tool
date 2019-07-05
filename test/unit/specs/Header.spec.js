import { mount } from '@vue/test-utils'
import Header from '../../../src/components/Header/Header'

describe('Header', () => {
    test('company name should render content correctly', () => {
        const wrapper = mount(Header);
        expect(wrapper.find('h1').text()).toEqual(
            'Company X'
        )
    })
})

