// tax scale 	wage (yearly)			income tax
// scale 1		€ 0 t/m € 19.922		36,55%
// scale 2		€ 19.923 t/m € 33.715	40,15%
// scale 3		€ 33.716 t/m € 66.421	40,15%
// sacle 4		€ 66.422 of meer		52,00%

// started at 10:10, finished at 10:55
// normal logic was done around 10:30, testing was from 10:30 to 10:55

console.log('usage: node incometax.js <grossIncome>')

function runProgram(){
	var grossIncome = process.argv[2]
	var netIncome = calculateNetIncome(grossIncome)
	console.log("Your net income is: ")
	console.log(netIncome)
}

function calculateNetIncome(grossAmount){
	var netAmount = 0
	if(grossAmount > 0){
		if(grossAmount > 19922){
			netAmount = 12640.509
		}
		else{
			netAmount = grossAmount - (grossAmount * .3655)
		}
		grossAmount = grossAmount - 19922
	}

	if( grossAmount > 0){
		if(grossAmount > 46498){
			netAmount = netAmount + 46498 - (46498 * .4015)
		}
		else {
			netAmount = netAmount + grossAmount - (grossAmount * .4015)
		}
		grossAmount = grossAmount - 46498
	}

	if( grossAmount > 0){
		netAmount =  netAmount + grossAmount - (grossAmount * .52)
	}
	return netAmount
}

runProgram()

// testing the program
// in order to see if this program works correctly

// case 1: 10000 euro
// > 10000 * .3655
// [1] 3655
// > 10000 - 3655
// [1] 6345

//Your net income is:
// 6345

// case 2: 35000 euro

// > 35000 - 19922
// [1] 15078
// > 19922 * .3655
// [1] 7281.491
// > 19922 - 7281.491
// [1] 12640.51
// > 15078 * .3655
// [1] 5511.009
// > 15078 - 5511.009
// [1] 9566.991
// > 12640.51 + 9566.991
// [1] 22207.5
// > 15078 * .4015
// [1] 6053.817
// > 15078 - 6053.817
// [1] 9024.183
// > 12640.51 + 9024.183
// [1] 21664.69

// Your net income is:
// 20947.5

// try 2
// Your net income is:
// 21664.692

// case 3: 75000 euro

// > (19922 - 7281.491) + (46498 - 18668.95) + (8580 - 4461.6)
// [1] 44587.96

// Your net income is:
// 45604.691999999995

// node incometax.js 66421
// Your net income is:
// 40470.1605

// Your net income is:
// 40470.042


//try 2
// > (19922 - 7281.491) + (46498 - 18668.95) + (8580 - 4461.6)
// [1] 44587.96

// Your net income is:
// 44587.962