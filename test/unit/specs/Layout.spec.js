import Layout from '../../../src/containers/Layout'
import { mount, shallowMount } from '@vue/test-utils'
import Modal from '../../../src/components/UI/Modal/Modal'
import LayoutTaskAdd from '../../../src/components/Task/TaskAdd/TaskAdd'

describe('Layout', () => {
  test('hides Modal when Backdrop emits closemodal', () => {
    const wrapper = shallowMount(Layout)
    wrapper.find(Modal).vm.$emit('closeModal')
    expect(wrapper.find(Modal).exists()).toBeFalsy()
  })
})

describe('Layout', () => {
  test('should show Add Task Modal when state is true', () => {
    const wrapper = mount(LayoutTaskAdd, {
      propsData: {
        isAddTaskFormShowing: true
      }
    })
    expect(wrapper.find(LayoutTaskAdd).exists()).toBeFalsy()
  })
})