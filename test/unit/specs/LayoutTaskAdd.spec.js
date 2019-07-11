import { mount } from '@vue/test-utils'
import LayoutTaskAdd from '../../../src/components/Task/TaskAdd/TaskAdd'

test('sanity test', () => {
  expect(true).toBe(true)
})

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
    expect(wrapper.props().projects[0].clientName).toBe('Edinburgh Napier University')

    expect(wrapper.props().projects[0].projectId).toBe("56")

    expect(wrapper.props().projects[0].projectName).toBe("Dissertation Summer 2019")

    expect(wrapper.html()).toContain('<option value=\"56\">Edinburgh Napier University: Dissertation Summer 2019</option>')

    expect(wrapper.html()).toContain('<option value=\"3\">Gerrard</option>')

    expect(wrapper.html()).toContain('<input readonly=\"readonly\" placeholder=\"Fri1300\">')

    expect(wrapper.html()).toContain('<input readonly=\"readonly\" placeholder=\"Fri1700\">')

  })
})

describe('LayoutTaskAdd', () => {
  test('should call handleFormSubmisison when Add Task is clicked', () => {
    const wrapper = mount(LayoutTaskAdd, {
      methods: {
        handleFormSubmission(Task)
      }
    })

    wrapper.find('form').trigger('submit.prevent')
    expect(handleFormSubmission(Task)).toHaveBeenCalled()
  })
})


describe('LayoutTaskAdd', () => {
  it('should call handleFormSubmisison when Add Task is clicked', () => {
    const handleFormSubmission = jest.fn()
    const wrapper = mount(LayoutTaskAdd);

    wrapper.vm.$on('click', handleFormSubmission)
    wrapper.vm.click('Clean the car');

    expect(handleFormSubmission).toBeCalledWith('Clean the car')
  })
});
