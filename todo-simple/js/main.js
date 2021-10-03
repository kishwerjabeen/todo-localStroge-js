// Create a new list item when clicking on the "Add" button

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var inputValueNode = document.createTextNode(inputValue);
    li.appendChild(inputValueNode);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    // document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";
}