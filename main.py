def on_forever():
    if input.temperature() > 21:
        servos.P1.set_angle(58)
    if input.temperature() < 18:
        servos.P1.set_angle(90)
basic.forever(on_forever)
