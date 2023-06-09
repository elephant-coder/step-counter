let step = 0
input.onGesture(Gesture.Shake, function () {
    step += 1
    led.stopAnimation()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(step)
})
basic.forever(function () {
	
})
