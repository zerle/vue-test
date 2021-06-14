import MessageList from '@/pages/test4/MessageList'
import {shallowMount} from '@vue/test-utils'

describe('Test for MessageList of Test4 Component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(MessageList, {
      slots: {
        default: '<div class="fake-msg"></div>'
      }
    })
  })
  afterEach(() => {
    wrapper.destroy()
  })

  //  组件中应该通过slots插入了div.fake-msg
  test('Messages are inserted in a ul.list-messages element', () => {
    const list = wrapper.find('ul.list-messages')
    expect(list.contains('div.fake-msg')).toBeTruthy()
  })

  // 渲染命名插槽的默认内容
  test('Header slot renders a default header text', () => {
    const header = wrapper.find('.list-header')
    expect(header.text()).toBe('This is a default header')
  })

  // 向header插槽中插入内容
  test('Header slot is rendered withing .list-header', () =>{
    wrapper = shallowMount(MessageList, {
      slots: {
        header: '<header>What an awesome header</header>'
      }
    })
    const header =  wrapper.find('.list-header')
    expect(header.text()).toBe('What an awesome header')
  })
})