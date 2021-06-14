import {shallowMount} from '@vue/test-utils'
import MyButton from '@/pages/MyButton'
describe('Test for MyButton Component', () => {
  const wrapper = shallowMount(MyButton)

  test('calls increment when click on button', () => {
    // 创建mock函数
    const mockFn = jest.fn()
    // 设置wrapper vm的方法并强制更新
    wrapper.setMethods({
      increment: mockFn
    })
    // 触发按钮的点击事件
    wrapper.find('button').trigger('click')
    expect(mockFn).toBeCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})