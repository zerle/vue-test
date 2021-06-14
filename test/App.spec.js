import {mount, shallowMount} from '@vue/test-utils'

import App from '@/App'

describe('App.test.js', () => {
  let wrapper,
  vm;

  beforeEach(() => {
    // wrapper = mount(App)
    wrapper = shallowMount(App)
    vm = wrapper.vm
    wrapper.setProps({messages: ['Hello Jest', 'Hello Vue']})
  })

  test('equals messages to ["Hello Jest", "Hello Vue"]', () => {
    expect(vm.messages).toEqual(['Hello Jest', 'Hello Vue'])
  })

  // 为App的单元测试增加快照 (snapshot)
  test('has the expected html structrue', () => {
    expect(vm.$el).toMatchSnapshot()
  })
})