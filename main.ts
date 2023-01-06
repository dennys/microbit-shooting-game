input.onButtonPressed(Button.A, function () {
    monkey.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground)
    bullet = game.createSprite(monkey.get(LedSpriteProperty.X), monkey.get(LedSpriteProperty.Y))
    bullet.turn(Direction.Left, 90)
    for (let index = 0; index < 4; index++) {
        bullet.move(1)
        basic.pause(200)
    }
    if (bullet.isTouching(banana)) {
        banana.delete()
        bullet.delete()
        game.addScore(1)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
        strip.showRainbow(1, 360)
        for (let index = 0; index < 30; index++) {
            strip.show()
            strip.rotate(1)
            basic.pause(100)
        }
        basic.pause(1000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.clear()
        banana = game.createSprite(randint(0, 3), 0)
    } else {
        bullet.delete()
    }
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
game.startCountdown(50000)
basic.forever(function () {
    basic.pause(randint(500, 5000))
    banana.set(LedSpriteProperty.X, randint(0, 3))
})
