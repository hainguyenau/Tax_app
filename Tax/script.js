$(document).ready(function(){
	$('#btnCalc').click(function(){
		var income =  document.getElementById("Income").value;
		var result = single(income);
		document.getElementById('Result').innerHTML = result;

	})
})

function single(income) {
		if (income <= 9325)
			return income*0.1;
		else if (income < 37950)
			return 9325*0.1 + (income - 9325)*0.15;
		else if (income < 91900)
			return 9325*0.1 + (37950-9325)*0.15 + (income - 37950)*0.25;
		else if (income < 191650)
			return 9325*0.1 + (37950-9325)*0.15 + (91900 - 37950)*0.25 + (income-91900)*0.28;
		else if (income < 416700)
			return 9325*0.1 + (37950-9325)*0.15 + (91900 - 37950)*0.25 + (191650-91900)*0.28 + (income-91900)*0.33;
		else if (income < 418400)
			return 9325*0.1 + (37950-9325)*0.15 + (91900 - 37950)*0.25 + (191650-91900)*0.28 + (41670-91900)*0.33 + (income-41670)*0.35;
		else if(income >= 418400)
			return 9325*0.1 + (37950-9325)*0.15 + (91900 - 37950)*0.25 + (191650-91900)*0.28 + (41670-91900)*0.33 + (418400-41670)*0.35 + (income-418400)*0.396;
		else
			return 0;
	
}