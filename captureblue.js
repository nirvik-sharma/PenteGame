function CaptureUp(row, col, myColor, oppColor) {
    var myR = (row - 3)
    var myC = col
    var opp1 = (row - 1)
    var opp2 = (row - 2)
    if(SpaceOwnerShip[myR][myC] == myColor) {
        if(SpaceOwnerShip[opp1][myC] == oppColor && SpaceOwnerShip[opp2][myC] == oppColor) {
            SpaceOwnerShip[opp1][myC] = 0
            SpaceOwnerShip[opp2][myC] = 0
            if(myColor == -1) {
                CapturedBlue++
            }
            else {
                CapturedGreen++
            }
        }
    }
}

function CaptureRight(row, col, myColor, oppColor) {
    var myR = row
    var myC = col + 3
    var opp1 = col + 1
    var opp2 = col + 2

    if(SpaceOwnerShip[myR][myC] == myColor) {
        if(SpaceOwnerShip[myR][opp2] == oppColor && SpaceOwnerShip[myR][opp1] == oppColor) {
            SpaceOwnerShip[myR][opp2] = 0
            SpaceOwnerShip[myR][oop1] = 0
            if(myColor == -1) {
                CapturedBlue++
            }
            else {
                CapturedGreen++
            }
            
        }
    }

}

function CaptureDown(row, col, myColor, oppColor) {
    var myR = (row + 3)
    var myC = col
    var opp1 = (row + 1)
    var opp2 = (row + 2)
    if(SpaceOwnerShip[myR][myC] == myColor) {
        if(SpaceOwnerShip[opp1][myC] == oppColor && SpaceOwnerShip[opp2][myC] == oppColor) {
            SpaceOwnerShip[opp1][myC] = 0
            SpaceOwnerShip[opp2][myC] = 0
            if(myColor == -1) {
                CapturedBlue++
            }
            else {
                CapturedGreen++
            }
        }
    }
    
}

function CaptureLeft(row, col, myColor, oppColor) {
    var myR = row
    var myC = col - 3
    var opp1 = col - 1
    var opp2 = col - 2

    if(SpaceOwnerShip[myR][myC] == myColor) {
        if(SpaceOwnerShip[myR][opp2] == oppColor && SpaceOwnerShip[myR][opp1] == oppColor) {
            SpaceOwnerShip[myR][opp2] = 0
            SpaceOwnerShip[myR][opp1] = 0
            if(myColor == -1) {
                CapturedBlue++
            }
            else {
                CapturedGreen++
            }
        }
    }
    
}