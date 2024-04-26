function Submit() {
	let Name = document.getElementById("name").value;
	let SecondName = document.getElementById("secondname").value;
	let Number = document.getElementById("number").value;
	let age = parseInt(document.getElementById("age").value);
	Name = Name.toUpperCase();
	SecondName = SecondName.toUpperCase();
	if (age < 18) {
		alert("Карта выдается только после 18 лет");
		return;
	}
	var cardNumber = Math.floor(Math.random() * 1000000) + 1;
	if (age > 17) {
		alert("\nФамилия: " + Name + "\nИмя: " + SecondName + "\nНомер карты клиента: " + cardNumber + "\nНомер телефона: " + Number);
	}
	document.getElementById("name").value = "";
	document.getElementById("secondname").value = "";
	document.getElementById("number").value = "";
	document.getElementById("age").value = "";
}
function clearform() {
	document.getElementById("name").value = "";
	document.getElementById("secondname").value = "";
	document.getElementById("number").value = "";
	document.getElementById("age").value = "";

}