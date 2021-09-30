// jasy he page refresh karhay thay sab task gaib horahy thy 
// oskay liay yahna per show task ka funtion call karwadienga 

showtask();


let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click", function () {
    addtaskinputval = addtaskinput.value;

    //     console.log(addtaskinput.value)

    // use condition ager koi space ya empty ho tw wo kathm kardy

    if (addtaskinputval.trim() != 0) {

        // check local Storage mae kuch ha ya naeh 
        let webtask = localStorage.getItem("localtask");
        if (webtask == null) {
            taskObj = [];
        }
        else {
            // get karty time hum parse karygae 
            taskObj = JSON.parse(webtask);
        }

        // jo bhi value ho wo add hojye local strogae mae 

        taskObj.push(addtaskinputval);
        // ab local stroage mae dalygae 
        // set karty time hum stringify karygae
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        // let addtaskinputvals = document.getElementById('addtaskinput').value = '';

        // show task wala funtion rkahygae 
    }
    showtask();

})

// hello = () => {
//     return "Hello World!";
//   }

// show task at website 

function showtask() {
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
        taskObj = [];
    }
    else {
        // get karty time hum parse karygae 
        taskObj = JSON.parse(webtask);
    }

    let html = "";
    let addedtasklist = document.getElementById("addedtasklist");
    taskObj.forEach((item, index) => {
        html += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${item}</td>
        <td><button type="button"onClick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
        <td><button type="button" onClick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
    </tr>`;

    });
    addedtasklist.innerHTML = html;
}

// edit task
function edittask(index) {
    // add and save button ko get karingae
    let addtaskbtn = document.getElementById("addtaskbtn");
    let savetaskbtn = document.getElementById("savetaskbtn");

    // jo hidden input bani ha osko get karingae 
    let saveindex = document.getElementById("saveindex");
    saveindex.value = index;

    // jo localStroge sya data get horah tha wo line likhygae 
    let webtask = localStorage.getItem("localtask");

    let taskObj = JSON.parse(webtask);

    // textbox ki value chaey 
    addtaskinput.value = taskObj[index];

    // edit mae hammy add task wala button naeh dekhna chaey tw hum add wala ha osko  display none kardiengae or save wlay ko show 
    addtaskbtn.style.display = "none";
    savetaskbtn.style.display = "block";

}
// save task
let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click", function () {
    // data get karny kay liya 
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);

    let addtaskbtn = document.getElementById("addtaskbtn");

    savetaskbtn.style.display = "none";
    addtaskbtn.style.display = "block";

    let saveindex = document.getElementById("saveindex").value;
    taskObj[saveindex] = addtaskinput.value;
    localStorage.setItem("localtask", JSON.stringify(taskObj));

    // value blank hojyegae 
    addtaskinput.value = '';


    showtask();
})

// delete item 
function deleteitem(index) {
    // data get karny kay liya 
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    // splic say remove hoga  jahan sya milrha ha osmae say ak agay del kardo
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
}

// delete all
let deleteallbtn = document.getElementById("deleteallbtn");
deleteallbtn.addEventListener("click", function () {
    let webtask = localStorage.getItem("locltask");
    let taskObj = JSON.parse(webtask);

    let savetaskbtn = document.getElementById("savetaskbtn");
    let addtaskbtn = document.getElementById("addtaskbtn");



    // check lagyagae kay data hay ya naeh 

    if (webtask == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webtask);
        taskObj = [];

    }

    savetaskbtn.style.display = "none";
    addtaskbtn.style.display = "block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
})

// searchlist 
let searchtextbox = document.getElementById("searchtextbox");
searchtextbox.addEventListener("input", function () {
    let trlist = document.querySelectorAll("tr");
    // html kay element ko array banaty ha arrary.from
    Array.from(trlist).forEach(function (item) {
        let searchedtext = item.getElementsByTagName("td")[0].innerText;
        let searchtextboxval = searchtextbox.value;
        let re = new RegExp(searchtextboxval, 'gi');

        // condition lagay gae jo serech karhy ha wo matach akrta ha ya naeh 

        if (searchedtext.match(re)) {
            // item.style.display = "block";
            // block ki jaga hum table row dyagae tw sai dekhyga

            item.style.display = "table-row";

        }
        else {
            item.style.display = "none";
        }


    })
})