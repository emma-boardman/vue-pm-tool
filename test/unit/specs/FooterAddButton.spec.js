import { shallowMount } from '@vue/test-utils'
import FooterAddButton from '../../../src/components/Footer/AddButton/AddButton'


test('calls handleAddTaskClick when image is clicked', () => {
    const handleAddTaskClick = jest.fn() 
    const wrapper = shallowMount(FooterAddButton, {
        methods: {
             handleAddTaskClick
            }
        });
    wrapper.find('img').trigger('click')             
    expect(handleAddTaskClick).toHaveBeenCalled()                  
  })
