let aleatorio = 0
let Aleatorio1 = 0
input.onButtonPressed(Button.A, function () {
    aleatorio = randint(0, 10)
    basic.showNumber(aleatorio)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    Aleatorio1 = randint(0, 10)
    basic.showNumber(Aleatorio1)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showNumber(aleatorio + Aleatorio1)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    aleatorio = randint(0, 10)
    basic.showNumber(aleatorio)
    basic.showLeds(`
        # . . . .
        . . # # #
        . # . . .
        . # . . .
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    Aleatorio1 = aleatorio * 1.8 + 32
    basic.showNumber(Aleatorio1)
    basic.clearScreen()
})
