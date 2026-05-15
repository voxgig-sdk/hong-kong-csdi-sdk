-- HongKongCsdi SDK error

local HongKongCsdiError = {}
HongKongCsdiError.__index = HongKongCsdiError


function HongKongCsdiError.new(code, msg, ctx)
  local self = setmetatable({}, HongKongCsdiError)
  self.is_sdk_error = true
  self.sdk = "HongKongCsdi"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function HongKongCsdiError:error()
  return self.msg
end


function HongKongCsdiError:__tostring()
  return self.msg
end


return HongKongCsdiError
