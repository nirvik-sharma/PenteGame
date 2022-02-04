//Check for capture functions

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

function CaptureDiagDownRight(row, col, myColor, oppColor) {
    var myR = row + 3
    var myC = col + 3
    var oppRow1 = row + 1
    var oppRow2 = row + 2
    var oppCol1 = col + 1
    var oppCol2 = col + 2

    if(SpaceOwnerShip[myR][myC] == myColor) {

        if(SpaceOwnerShip[oppRow1][oppCol1] == oppColor && SpaceOwnerShip[oppRow2][oppCol2] == oppColor) {

            SpaceOwnerShip[oppRow1][oppCol1] = 0
            SpaceOwnerShip[oppRow2][oppCol2] = 0

            if(myColor == -1) {
                CapturedBlue++
            }
            else {
                CapturedGreen++
            }
        }
    }
    
}

function CaptureDiagUpRight(row, col, myColor, oppColor) {
    var myR = row - 3
    var myC = col + 3
    var oppRow1 = row - 1
    var oppRow2 = row - 2
    var oppCol1 = col + 1
    var oppCol2 = col + 2

    if(SpaceOwnerShip[myR][myC] == myColor) {
        
        if(SpaceOwnerShip[oppRow1][oppCol1] == oppColor && SpaceOwnerShip[oppRow2][oppCol2] == oppColor) {

            SpaceOwnerShip[oppRow1][oppCol1] = 0
            SpaceOwnerShip[oppRow2][oppCol2] = 0

            if(myColor == -1) {
                CapturedBlue++
            }
            else {
                CapturedGreen++
            }
        }
    }
    
}

function CaptureDiagDownRight(row, col, myColor, oppColor) {
    var myR = row + 3
    var myC = col + 3
    var oppRow1 = row + 1
    var oppRow2 = row + 2
    var oppCol1 = col + 1
    var oppCol2 = col + 2

    if(SpaceOwnerShip[myR][myC] == myColor) {
        
        if(SpaceOwnerShip[oppRow1][oppCol1] == oppColor && SpaceOwnerShip[oppRow2][oppCol2] == oppColor) {

            SpaceOwnerShip[oppRow1][oppCol1] = 0
            SpaceOwnerShip[oppRow2][oppCol2] = 0

            if(myColor == -1) {
                CapturedBlue++
            }
            else {
                CapturedGreen++
            }
        }
    }
    
}

function CaptureDiagUpLeft(row, col, myColor, oppColor) {
    var myR = row - 3
    var myC = col - 3
    var oppRow1 = row - 1
    var oppRow2 = row - 2
    var oppCol1 = col - 1
    var oppCol2 = col - 2

    if(SpaceOwnerShip[myR][myC] == myColor) {
        
        if(SpaceOwnerShip[oppRow1][oppCol1] == oppColor && SpaceOwnerShip[oppRow2][oppCol2] == oppColor) {

            SpaceOwnerShip[oppRow1][oppCol1] = 0
            SpaceOwnerShip[oppRow2][oppCol2] = 0

            if(myColor == -1) {
                CapturedBlue++
            }
            else {
                CapturedGreen++
            }
        }
    }
    
}

function CaptureDiagDownLeft(row, col, myColor, oppColor) {
    var myR = row + 3
    var myC = col - 3
    var oppRow1 = row + 1
    var oppRow2 = row + 2
    var oppCol1 = col - 1
    var oppCol2 = col - 2

    if(SpaceOwnerShip[myR][myC] == myColor) {
        
        if(SpaceOwnerShip[oppRow1][oppCol1] == oppColor && SpaceOwnerShip[oppRow2][oppCol2] == oppColor) {

            SpaceOwnerShip[oppRow1][oppCol1] = 0
            SpaceOwnerShip[oppRow2][oppCol2] = 0

            if(myColor == -1) {
                CapturedBlue++
            }
            else {
                CapturedGreen++
            }
        }
    }
    
}

// Check for win funtions

function CheckWinUp(row, col, myColor) {
    var myR1 = row - 4
    var myR2 = row - 3
    var myR3 = row - 2
    var myR4 = row - 1
    var myC = col
    if(SpaceOwnerShip[myR1][myC] == myColor && SpaceOwnerShip[myR2][myC] == myColor && SpaceOwnerShip[myR3][myC] == myColor && SpaceOwnerShip[myR4][myC] == myColor) {
        if(myColor == -1) {
            bluewins()
        }
        else {
            greenwins()
        }
    }
}

function CheckWinRight(row, col, myColor) {
    var myR = row
    var myC1 = col + 4
    var myC2 = col + 3
    var myC3 = col + 2
    var myC4 = col + 1
    if(SpaceOwnerShip[myR][myC1] == myColor && SpaceOwnerShip[myR][myC2] == myColor && SpaceOwnerShip[myR][myC3] == myColor && SpaceOwnerShip[myR][myC4] == myColor) {
        if(myColor == -1) {
            bluewins()
        }
        else {
            greenwins()
        }
    }
}

function CheckWinDown(row, col, myColor) {
    var myR1 = row + 4
    var myR2 = row + 3
    var myR3 = row + 2
    var myR4 = row + 1
    var myC = col
    if(SpaceOwnerShip[myR1][myC] == myColor && SpaceOwnerShip[myR2][myC] == myColor && SpaceOwnerShip[myR3][myC] == myColor && SpaceOwnerShip[myR4][myC] == myColor) {
        if(myColor == -1) {
            bluewins()
        }
        else {
            greenwins()
        }
    }
}

function CheckWinLeft(row, col, myColor) {
    var myR = row
    var myC1 = col - 4
    var myC2 = col - 3
    var myC3 = col - 2
    var myC4 = col - 1
    if(SpaceOwnerShip[myR][myC1] == myColor && SpaceOwnerShip[myR][myC2] == myColor && SpaceOwnerShip[myR][myC3] == myColor && SpaceOwnerShip[myR][myC4] == myColor) {
        if(myColor == -1) {
            bluewins()
        }
        else {
            greenwins()
        }
    }
}