
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { HongKongCsdiSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = HongKongCsdiSDK.test()
    equal(testsdk instanceof HongKongCsdiSDK, true,
      'HongKongCsdiSDK.test() must return a client synchronously')
  })

})
