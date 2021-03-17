function calcul() {
	var initial= document.getElementById("txtbox-initiale").value;
	var futur= document.getElementById("txtbox-futur").value;
	var jour = 0;
	
	while (Number(initial)< Number(futur)) {
		var initial = Number(initial)*1.02;
		var jour = Number(jour) + 1;
	}
	alert('Il faudra ' + jour + " jours");
}