/* eslint-disable */

import helloWorld from '../HelloWorld.vue'
import { mount, createLocalVue } from '@vue/test-utils'
import Quasar, { utils } from 'quasar'

describe('helloWorld', () => {
  it('passes the sanity check and creates a wrapper', () => {
    const localVue = createLocalVue()
    localVue.use(Quasar, { utils: ['utils'] })
    const wrapper2 = mount(helloWorld, {
      localVue
    })
    expect(wrapper2.isVueInstance()).toBe(true)
  })
})
