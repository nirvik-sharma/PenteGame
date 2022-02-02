var is_Player_One_Turn = true


var SpaceOwnerShip = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var CapturedBlue = 0;
var CapturedGreen = 0;


$(document).ready(function(){
    $(".space").click(function(){

		var n = ($(this).prevAll().length + 1)
			var a = findPieceLocationROW(n)
			var b = findPieceLocationCOL(n)	
			
			
			var x = a + 3;
			var y = b + 3;
			
			if(!is_Player_One_Turn)
					document.getElementById("turn").innerHTML = "<p id='turn'><b><span style='color:blue; font-size: 1.4em;'>Blue's</span></b> Turn</p>"
				else
					document.getElementById("turn").innerHTML = "<p id='turn'><b><span style='color:green; font-size: 1.4em;'>Green's</span></b> Turn</p>"
			
		if(SpaceOwnerShip[x][y] == 0)
		{	
			if(is_Player_One_Turn){				
				$(this).css("background-color", "blue")	
				
					SpaceOwnerShip[x][y] = -1;

					CaptureUp(x, y, -1, 1);
					CaptureDown(x, y, -1, 1);
					CaptureRight(x, y, -1, 1);
					CaptureLeft(x, y, -1, 1);

					CaptureDiagDownLeft(x, y, -1, 1);
					CaptureDiagDownRight(x, y, -1, 1);
					CaptureDiagUpLeft(x, y, -1, 1);
					CaptureDiagUpRight(x, y, -1, 1);
					
					
					// CheckWinnerDownB(x, y)
					// CheckWinnerLRB(x, y)
					// CheckWinnerUPDOWNDiB(x, y)
					// CheckWinnerDOWNUPDiB(x, y)
										
			}else{
				
				$(this).css("background-color", "green")
					SpaceOwnerShip[x][y] = 1;

					CaptureUp(x, y, 1, -1);
					CaptureDown(x, y, 1, -1);
					CaptureRight(x, y, 1, -1);
					CaptureLeft(x, y, 1, -1);
					
					CaptureDiagDownLeft(x, y, 1, -1);
					CaptureDiagDownRight(x, y, 1, -1);
					CaptureDiagUpLeft(x, y, 1, -1);
					CaptureDiagUpRight(x, y, 1, -1);
				// 	CaptureD1GREEN(x, y)
				// 	CaptureD2GREEN(x, y)
				// 	CaptureD3GREEN(x, y)
				// 	CaptureD4GREEN(x, y)
				
				// CheckWinnerDownG(x, y)
				// CheckWinnerLRG(x, y)
				// CheckWinnerUPDOWNDiG(x, y)
				// CheckWinnerDOWNUPDiG(x, y)
			}
		
		
		is_Player_One_Turn = is_Player_One_Turn ? false : true;
		console.log(is_Player_One_Turn)
		
		ClearSpaces()
		updateScore()
		
		
				
		}
	});
});


function bluewins() {
	document.getElementById("turn").innerHTML = "<p id='turn'><b><span style='color:blue; font-size: 1.6em;'>Blue</span></b> Wins!</p>"
}

function greenwins() {
	document.getElementById("turn").innerHTML = "<p id='turn'><b><span style='color:green; font-size: 1.6em;'>Green</span></b> Wins!</p>"
}


function findPieceLocationROW(n) {
		var x
		if(n % 19 == 0 )
			x = (n/19) - 1
		else
			x = Math.floor(n/19);
			
	return x
}
function findPieceLocationCOL(n) {	
		if(n % 19 != 0)
			y = (n % 19 - 1)
		else 
			y = 18
		
	return y
}



function updateScore() {
	document.getElementById("greenStats").innerHTML = "Green's Stolen Pebbles: " + CapturedBlue 
	document.getElementById("blueStats").innerHTML = "Blue's Stolen Pebbles: " + CapturedGreen

		if(CapturedGreen == 5)
			bluewins()
		if(CapturedBlue == 5)
			greenwins()
}


function ClearSpaces() {
	var SPOTSTOCLEAR = []
	for(var x = 3; x < 15; x++)
	{
		for(var y = 3; y < 22; y++)			// X ROW Y is COL
		{
			//alert("ROW: " + (x -3) + " COL: " + (y -3))
			var Z = ((x - 3) * 19) + (y - 2)
			
			if(SpaceOwnerShip[x][y] == 0) //set back to normanl
			{
				SPOTSTOCLEAR.push(Z)
			}else{
				//alert(Z)
			}			
		}	
	}

	//alert(SPOTSTOCLEAR)
	ClrPT2(SPOTSTOCLEAR)
}



function ClrPT2(SPOTSTOCLEAR) {
	
	var counter = 0
	
			$(".space").each(function() {
					var s = ($(this).prevAll().length + 1)

						if(SPOTSTOCLEAR.indexOf(s) != -1)
						{  
							$(this).css("background-color", "lightblue")
							//alert("clear")
							
						}
							
							
									
			});
	
}