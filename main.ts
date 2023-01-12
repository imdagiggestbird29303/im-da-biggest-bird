input.onButtonPressed(Button.A, function () {
    music.playMelody("A F E F A F E F ", 120)
})
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Sad)
})
