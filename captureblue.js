function CaptureUp(row, col, myColor, oppColor) {
    var myR = (row - 3)
    var myC = col
    var opp1 = (row - 1)
    var opp2 = (row - 2)
    if(SpaceOwnerShip[myR][myC] == myColor) {
        if(SpaceOwnerShip[opp1][myC] == oppColor && SpaceOwnerShip[opp2][myC] == oppColor) {
            
        }
    }
}

function CaptureRight(row, col, color) {

}

function CaptureDown(row, col, color) {
    
}

function CaptureLeft(row, col, color) {
    
}