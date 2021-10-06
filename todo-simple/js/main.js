console.log("hi arqum")

var list = document.getElementById("list");

function addTodo() {
    let todo_item = document.getElementById("todo-item");

    //    Creat li tag with text node ;

    var li = document.createElement("li");
    // var liText = document.createTextNode("arqum");
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);
    // oper tak console mae print hoga ab hum asko ul kay sath append kariengae taky front per show ho
    list.appendChild(li);

    // end Creat li tag with text node 

    // create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("delete");

    // class diengae set attribute say 
    delBtn.setAttribute("class", "btn btn-primary")

    // DELETE button ko attribute daygae (onClick)

    delBtn.setAttribute("onclick", "deleteItem()");
    delBtn.appendChild(delText);
    li.appendChild(delBtn);
    list.appendChild(li);

    // Edit Button

    // var editBtn = document.createElement("button");
    // var editBtnText = document.createTextNode("edit");

    // editBtn.appendChild(editBtnText);
    // list.appendChild(editBtn);






    // ab jab hum koi item add karwien tw list empty hojye 

    todo_item.value = "";

    // console.log(liText);
    console.log(li);
    console.log(todo_item.value);
}



function deleteItem() {
    console.log("del horah ha bahi logo ")
}

























// showtask();

// // Create a new list item when clicking on the "Add" button


// let addtaskinput = document.getElementById("myInput");
// let addtaskbtn = document.getElementById("addBtn");

// addtaskbtn.addEventListener("click", function () {
//     addtaskinputval = myInput.value;



//     if (addtaskinputval.trim() != 0) {

//         // check local Storage mae kuch ha ya naeh 
//         let webtask = localStorage.getItem("localtask");
//         if (webtask == null) {
//             taskObj = [];
//         }
//         else {
//             // get karty time hum parse karygae 
//             taskObj = JSON.parse(webtask);
//         }

//         // jo bhi value ho wo add hojye local strogae mae 

//         taskObj.push(addtaskinputval);
//         // ab local stroage mae dalygae 
//         // set karty time hum stringify karygae
//         localStorage.setItem("localtask", JSON.stringify(taskObj));
//         // let addtaskinputvals = document.getElementById('addtaskinput').value = '';

//         // show task wala funtion rkahygae 
//     }

//     showtask()
// });

// /*function newElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("myInput").value;
//     var inputValueNode = document.createTextNode(inputValue);
//     li.appendChild(inputValueNode);


//     if (inputValue === '') {
//         alert("You must write something!");
//     } else {
//         document.getElementById("myUL").appendChild(li);
//     }
//     // document.getElementById("myUL").appendChild(li);
//     document.getElementById("myInput").value = "";


//     showtask()

//     // var span = document.createElement("SPAN");
//     // var txt = document.createTextNode("\u00D7");

//     // span.className = "close";

//     // span.appendChild(txt);
//     // li.appendChild(span);

//     // for (i = 0; i < close.length; i++) {
//     //     close[i].onclick = function () {
//     //         var div = this.parentElement;
//     //         // div.style.display = "none";
//     //     }
//     // }
// }*/

// function showtask() {
//     let webtask = localStorage.getItem("localtask");
//     if (webtask == null) {
//         taskObj = [];
//     }
//     else {
//         // get karty time hum parse karygae 
//         taskObj = JSON.parse(webtask);
//     }

//     let html = "";
//     // let addedtasklist = document.getElementById("myUL");
//     // taskObj.forEach((item, index) => {
//     //     html += `<tr>
//     //     <th scope="row">${index + 1}</th>
//     //     <td>${item}</td>
//     //     <td><button type="button"onClick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
//     //     <td><button type="button" onClick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
//     // </tr>`;

//     // });

//     let addedtasklist = document.getElementById("myUL");

//     taskObj.forEach((item, index) => {

//         html += `<li class="list-group-item d-flex justify-content-between align-item-center">
//         <span>${index + 1}</span>
//             <span>${item}</span>
//                 <td><button type="button"onClick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
//                 <td><button type="button" onClick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>

//         </li>`;
//     });
//     addedtasklist.innerHTML = html;
// }