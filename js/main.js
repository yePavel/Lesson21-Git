'use strict'

var gBallSize = 100

function onBallClick(elBall) {
    if (gBallSize >= 400) gBallSize = 50
    const size = getRandomInt(20, 60)

    gBallSize += size
    elBall.style.height = gBallSize + 'px'
    elBall.style.width = gBallSize + 'px'

    elBall.innerText = gBallSize
}