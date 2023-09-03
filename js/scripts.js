var a = 0;

function myFunction() {
	var input_nr = document.getElementById("InputNr").value;
	if (input_nr % 2 == 0) {
		a = "Par";
	}
	else {
		a = "Impar"
	}
	document.getElementById("Paragraph").innerHTML = a;

	var list = document.getElementById('list');
	var entry = document.createElement('li');
	entry.appendChild(document.createTextNode(input_nr + ' ' + a));
	list.appendChild(entry);
}

