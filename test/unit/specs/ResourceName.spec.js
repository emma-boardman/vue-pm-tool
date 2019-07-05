import Vue from 'vue'
import ResourceName from '../../../src/components/Resource/ResourceName/ResourceName'

function getRenderedText (Component, propsData) {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor({ propsData: propsData }).$mount()
    return vm.$el.textContent
  }
  
  describe('ResourceName', () => {
    it('renders correctly with different props', () => {
      expect(getRenderedText(ResourceName, {
        name: "Jonny"
      })).toBe('Jonny  ')
  
      expect(getRenderedText(ResourceName, {
        job: "UI Designer"
      })).toBe(' UI Designer ')

      expect(getRenderedText(ResourceName, {
        contractType: "Part Time"
      })).toBe('  ')

      expect(getRenderedText(ResourceName, {
        contractType: "Contract"
      })).toBe('  Contract')
    })
  })