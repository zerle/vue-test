
import Test1 from '@/pages/Test1'
import MyButton from '@/pages/MyButton'
import {shallowMount, mount} from '@vue/test-utils'
describe('Test for Test1 Component', () => {
  let wrapper,
  vm;
  beforeEach(() => {
    // 如果要测子组件，就要用mount
    wrapper = mount(Test1, {
      propsData: {
        messages: ['byte']
      }
    })
  })

  test('is a Test1 component', () => {
    // 使用Vue组件选择器
    expect(wrapper.is(Test1)).toBe(true)
    // 使用CSS选择器
    expect(wrapper.is('.outer')).toBe(true);
    // 使用CSS选择器
    expect(wrapper.contains('p')).toBe(true)
  })

  // exists()：断言 Wrapper 或 WrapperArray 是否存在。
  test('不存在img', () => {
    expect(wrapper.findAll('img').exists()).toBeFalsy()
  })
  // isEmpty()：断言 Wrapper 并不包含子节点。
  test('MyButton组件不为空', () => {
    expect(wrapper.find(MyButton).isEmpty()).toBeFalsy()
  })
  // attributes()：返回 Wrapper DOM 节点的特性对象
  // classes()：返回 Wrapper DOM 节点的 class 组成的数组
  test('MyButton组件有my-button类', () => {
    expect(wrapper.find(MyButton).attributes().class).toContain('my-button')
    expect(wrapper.find(MyButton).classes()).toContain('my-button')
  })

  // props：返回 Wrapper vm 的 props 对象。
  test('接收到了byte作为props', () => {
    expect(wrapper.props().messages).toContain('byte')
  })
})

// vm.$options返回Vue实例的初始化选项

describe('验证props的各个属性', () => {
  let wrapper,
  vm,
  messages;
  beforeEach(() => {
    // 如果要测子组件，就要用mount
    wrapper = mount(Test1, {
      propsData: {
        messages: ['bye1', 'bye2', 'bye3']
      }
    })
    vm = wrapper.vm
    messages = vm.$options.props.messages
  })

  test('messages is of  type array', () => {
    expect(messages.type).toBe(Array)
  })

  test('messages is required', () => {
    expect(messages.required).toBeTruthy()
  })

  test('messages has at least length 2', () => {
    expect(messages.validator && messages.validator(['a'])).toBeFalsy()
    expect(messages.validator && messages.validator(['a', 'b'])).toBeTruthy()
  });

})

describe('increment方法会触发add方法', () =>{
  const wrapper = mount(MyButton);
  test('triggers a addCounter event when a handleClick method is called', () => {
    // mock 自定义事件
    const mockFn1 = jest.fn()
    wrapper.vm.$on('add', mockFn1)
    wrapper.find('button').trigger('click');
    expect(mockFn1).toBeCalled()
    expect(mockFn1).toHaveBeenCalledWith(1)
    // 再次触发按钮的点击事件
    wrapper.find('button').trigger('click');
    expect(mockFn1).toHaveBeenCalledTimes(2);
    expect(mockFn1).toHaveBeenCalledWith(2);
  })
})

// $emit 触发自定义事件
describe('验证addcounter是否被触发', () => {
  const wrapper = mount(Test1)

  test('addCounter Fn should be called', () => {
    const mockFn = jest.fn()
    wrapper.setMethods({
      'addCounter': mockFn
    })
    wrapper.find(MyButton).vm.$emit('add', 100)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
