// function FeetTomile

function feetTomile(feet) {
	// 1 mile = 5280 feet
	let mile = feet / 5280;
	if (feet < 1) {
		console.log('Please enter 1 feet  or more ');
	} else {
		mile = mile.toFixed(5);
		console.log(`${feet} Feet = ${mile} Mile's`);
	}
}
feetTomile(10000);

// woodCalculator
function woodCalculator(a, b, c) {
	let chair = 1; // To make a chair need 1 cubic feet wood
	let table = 3; //To make a Table need 3 cubic feet wood
	let bed = 5; //To make a Bed need 5 cubic feet wood

	let total = chair * a + table * b + bed * c;
	console.log(
		`${a} chair, ${b} table and ${c} bed To make need = ${total} cubic feet wood`
	);
}
woodCalculator(12, 2, 3);
