import { mount } from '@vue/test-utils'
import FooterAddButton from '../../../src/components/Footer/AddButton/AddButton'

describe('LayoutTaskAdd', () => {
    test('calls handleAddTaskClick when image is clicked', () => {
        const wrapper = mount(FooterAddButton)
        const handleAddTaskClickStub = jest.fn();

        wrapper.setMethods({ handleAddTaskClick: handleAddTaskClickStub })
        wrapper.find('img').trigger('click')
        expect(handleAddTaskClickStub).toHaveBeenCalled();
    })
})
