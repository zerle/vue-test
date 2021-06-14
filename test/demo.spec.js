import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld', () => {
  test('是一个Vue实例', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
