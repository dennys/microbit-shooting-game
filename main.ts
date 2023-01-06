input.onButtonPressed(Button.A, function () {
    monkey.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    bullet = game.createSprite(monkey.get(LedSpriteProperty.X), monkey.get(LedSpriteProperty.Y))
    bullet.turn(Direction.Left, 90)
    for (let index = 0; index < 4; index++) {
        bullet.move(1)
        basic.pause(200)
        if (bullet.isTouching(banana)) {
            game.addScore(1)
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
            strip.showRainbow(1, 360)
            for (let index = 0; index < 30; index++) {
                strip.rotate(1)
                basic.pause(100)
            }
            basic.pause(1000)
            strip.clear()
            banana.set(LedSpriteProperty.X, randint(0, 3))
        }
    }
    bullet.delete()
})
input.onButtonPressed(Button.B, function () {
    monkey.change(LedSpriteProperty.X, 1)
})
let bullet: game.LedSprite = null
let monkey: game.LedSprite = null
let banana: game.LedSprite = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
banana = game.createSprite(randint(0, 3), 0)
monkey = game.createSprite(2, 4)
game.setScore(0)
game.startCountdown(10000)
basic.forever(function () {
    basic.pause(randint(500, 5000))
    banana.set(LedSpriteProperty.X, randint(0, 3))
})
