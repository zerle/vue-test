import { shallowMount, mount } from "@vue/test-utils"
import Test2 from '@/pages/Test2'
describe('Test for Test2 Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Test2)
  })
  afterEach(() => {
    wrapper.destroy()
  })

  test('returns the string in normal order if reversed property is not true', async() => {
    await wrapper.setProps({
      needReverse: false
    })
    wrapper.vm.inputValue = 'ok'
    expect(wrapper.vm.outputValue).toBe('ok')
  })

  test('returns the string in normal order if reversed property is note provided', () => {
    wrapper.vm.inputValue= 'ok'
    expect(wrapper.vm.outputValue).toBe('ok')
  })

  test('returns the string in reversed order if reversed property is true', async() => {
    await wrapper.setProps({
      needReverse: true
    })
    wrapper.vm.inputValue = '123'
    expect(wrapper.vm.outputValue).toBe('321')
  })
})

describe('Test watch', () => {
  let spy,wrapper
  beforeEach(() => {
    wrapper = shallowMount(Test2)
    spy = jest.spyOn(console, 'log')
  })
  afterEach(() => {
    wrapper.destroy()
    spy.mockClear()
  })

  test('is called with the new value in other cases', (done) => {
    wrapper.vm.inputValue = 'ok'
    wrapper.vm.$nextTick(() => {
      expect(spy).toBeCalled()
      done()
    })
  })

  test('is not called with same value', (done) => {
    wrapper.vm.inputValue = 'ok'
    wrapper.vm.$nextTick(() => {
      // 清除已发生的状态
      spy.mockClear()
      wrapper.vm.inputValue = 'ok'
      wrapper.vm.$nextTick(() => {
        expect(spy).not.toBeCalled()
        done()
      })
    })
  })
})
