import { mount } from '@vue/test-utils'
import LayoutTaskAdd from '../../../src/components/Task/TaskAdd/TaskAdd'

describe('LayoutTaskAdd', () => {
  test('should populate project list dropdown correctly', () => {
  const wrapper = mount(LayoutTaskAdd, {
      propsData: {
        projects: [{
          clientName: 'Edinburgh Napier University',
          projectId: "56",
          projectName: "Dissertation Summer 2019"
      }],
      resources: [{
          resourceId: "3",
          resourceJobTitle: "Full Stack Developer",
          resourceName: "Gerrard"
      }],
      availableTimes: {
        endTime: "Fri1700",
        startTime: "Fri1300"
      }
    } 
  })
  expect(wrapper.props().projects.clientName).toBe('Edinburgh Napier University')

  expect(wrapper.props().projects.projectId).toBe("56")

  expect(wrapper.props().projects.projectName).toBe("Dissertation Summer 2019")

  expect(wrapper.html()).toContain('<option data-v-11a222e2="" value="56">Edinburgh Napier University: Dissertation Summer 2019</option>')

})
})
