
import { Context } from './Context'


class HongKongCsdiError extends Error {

  isHongKongCsdiError = true

  sdk = 'HongKongCsdi'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  HongKongCsdiError
}

