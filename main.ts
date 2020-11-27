basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 22) {
        servos.P1.setAngle(58)
    }
    if (input.temperature() <= 22) {
        servos.P1.setAngle(90)
    }
})
