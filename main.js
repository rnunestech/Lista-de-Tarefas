function addNewTask() {
	var list = document.getElementById("list");
	var text = document.getElementById("task_name").value;

	if(text.length === 0) {
		alert("Você não Digitou Nada!");
		return;
	}
	var listItem = document.createElement("li");
	listItem.className = "list-Item";

	const textElement = document.createTextNode(text);
	listItem.appendChild(textElement);
	list.appendChild(listItem);
}
	