controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite2.destroy()
    info.changeScoreBy(1)
    music.playMelody("B D B D B D B D ", 200)
    game.splash("now get the rest")
})
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . 2 f 2 . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f . f f f f f f . . . . 
    . . . . f . f f f f . f . . . . 
    . . . . f . f f f f . f . . . . 
    . . . . f . f f f f . f . . . . 
    . . . . f . f f f f . f . . . . 
    . . . . f . f f f f . f . . . . 
    . . . . f . f f f f . f . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . . f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . . f e d e e d f . . . . . . 
    . . . f d 8 d 8 d f . . . . . . 
    . . . f d d d d d f . . . . . . 
    . . . . f d d f f . . . . . . . 
    . . . f 1 1 1 1 f . . . . . . . 
    . . f 1 1 1 1 1 f 1 . . . . . . 
    . f 1 1 f 1 1 1 f 8 f . . . . . 
    f 8 8 f 4 4 4 4 f 8 8 f . . . . 
    f 8 8 f 1 1 1 1 f d d f . . . . 
    f d d f 1 1 1 1 f d f . . . . . 
    . f f f f f f f f f . . . . . . 
    . . . d d . . d d . . . . . . . 
    . . . f f . . f f . . . . . . . 
    `, SpriteKind.Enemy)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(1)
controller.moveSprite(mySprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 10))
info.setScore(0)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(13, 10))
