import { shallowMount } from "@vue/test-utils"
import Test3 from '@/pages/Test3'
import axios from 'axios'

const mockData = {
  data: {
    answer: 'mock_yes',
    image: 'mock.png'
  }
}
// jest.mock('axios', () => ({
//   get: jest.fn(() => Promise.resolve(mockData))
// }))

describe('Test for Test3 Component', () => {
  let wrapper
  beforeEach(() => {
    axios.get.mockClear()
    wrapper = shallowMount(Test3)
    // jest.resetModules()
    // jest.clearAllMocks()
  })
  afterEach(() => {
    wrapper.destroy()
  })

  // 点击按钮后调用了 getAnswer 方法
  test('getAnswer Fn sholud be called', () => {
    const mockFn = jest.fn()
    wrapper.setMethods({
      getAnswer: mockFn
    })
    wrapper.find('button').trigger('click')
    expect(mockFn).toBeCalled()
  })

  // 点击按钮后调用了axios.get方法
  test('axios.get Fn should be called', () => {
    const URL = 'https://yesno.wtf/api'
    wrapper.find('button').trigger('click')
    expect(axios.get).toBeCalledWith(URL)
  })

  // axios.get方法返回值（Promise）
  test('Calls get promise result', () => {
    return expect(wrapper.vm.getAnswer()).resolves.toEqual(mockData)
  })

  // 如果不清除模块状态此条断言会失败
  test('Axios should not be called here', () => {
    expect(axios.get).not.toBeCalled()
  })
})
