package core

type HongKongCsdiError struct {
	IsHongKongCsdiError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewHongKongCsdiError(code string, msg string, ctx *Context) *HongKongCsdiError {
	return &HongKongCsdiError{
		IsHongKongCsdiError: true,
		Sdk:              "HongKongCsdi",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *HongKongCsdiError) Error() string {
	return e.Msg
}
