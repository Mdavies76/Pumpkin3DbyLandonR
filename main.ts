namespace SpriteKind {
    export const Food2 = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Food2, function (sprite) {
    sprite.lifespan = 15000
    list.push(sprite)
})
info.onCountdownEnd(function () {
    game.setGameOverEffect(true, effects.smiles)
    game.setGameOverMessage(true, "you won the game I hope you had fun:)")
    game.gameOver(true)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onDestroyed(SpriteKind.Food2, function (sprite) {
    list.removeAt(list.indexOf(sprite))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 0))
})
let Pumpkin03: Sprite = null
let list: Sprite[] = []
let mySprite: Sprite = null
info.startCountdown(60)
info.setLife(5)
info.setScore(0)
game.splash("to play use arrow keys to move collect pumpkins give points! :)")
tiles.setCurrentTilemap(tilemap`level`)
Render.setViewMode(ViewMode.raycastingView)
mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 0))
list = []
scene.setBackgroundColor(14)
tiles.placeOnTile(Render.getRenderSpriteInstance(), tiles.getTileLocation(7, 14))
mySprite.follow(Render.getRenderSpriteInstance(), 45)
game.onUpdateInterval(2000, function () {
    Pumpkin03 = sprites.create(assets.image`myImage2`, SpriteKind.Food2)
    tiles.placeOnRandomTile(Pumpkin03, assets.tile`myTile0`)
})
forever(function () {
    for (let value of list) {
        value.sayText(value.lifespan)
    }
})
