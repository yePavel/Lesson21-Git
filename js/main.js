'use strict'

var gBallSize = 100

function onBallClick(elBall) {
    const size = 50
    if (gBallSize === 400) gBallSize = 50

    gBallSize += size
    elBall.style.height = gBallSize + 'px'
    elBall.style.width = gBallSize + 'px'

    elBall.innerText = gBallSize
}