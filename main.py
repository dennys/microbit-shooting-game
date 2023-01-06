def on_button_pressed_a():
    monkey.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global bullet
    music.play_sound_effect(music.create_sound_effect(WaveShape.SQUARE,
            1600,
            1,
            255,
            0,
            300,
            SoundExpressionEffect.NONE,
            InterpolationCurve.CURVE),
        SoundExpressionPlayMode.UNTIL_DONE)
    bullet = game.create_sprite(monkey.get(LedSpriteProperty.X),
        monkey.get(LedSpriteProperty.Y))
    bullet.turn(Direction.LEFT, 90)
    for index in range(4):
        bullet.move(1)
        basic.pause(200)
        if bullet.is_touching(banana):
            game.add_score(1)
            music.play_sound_effect(music.builtin_sound_effect(soundExpression.happy),
                SoundExpressionPlayMode.IN_BACKGROUND)
            strip.show_rainbow(1, 360)
            for index2 in range(30):
                strip.rotate(1)
                basic.pause(100)
            basic.pause(1000)
            strip.clear()
            banana.set(LedSpriteProperty.X, randint(0, 3))
    bullet.delete()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    monkey.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

bullet: game.LedSprite = None
monkey: game.LedSprite = None
banana: game.LedSprite = None
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
banana = game.create_sprite(randint(0, 3), 0)
monkey = game.create_sprite(2, 4)
game.set_score(0)
game.start_countdown(10000)

def on_forever():
    basic.pause(randint(500, 5000))
    banana.set(LedSpriteProperty.X, randint(0, 3))
basic.forever(on_forever)
