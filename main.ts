basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 100) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.No)
    }
})
