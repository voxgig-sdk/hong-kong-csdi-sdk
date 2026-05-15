
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { HongKongCsdiSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await HongKongCsdiSDK.test()
    equal(null !== testsdk, true)
  })

})
