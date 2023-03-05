const show = () => {
    table.style.visibility = "visible";

    allList.forEach((element) => {
        console.log(element);
        const tr = document.createElement("tr");
        const title = document.createElement("td");
        const desc = document.createElement("td");
        const batch = document.createElement("td");
        const date = document.createElement("td");
        title.innerHTML = element.title1;
        desc.innerHTML = element.desc1;
        batch.innerHTML = element.batch1;
        date.innerHTML = element.due1;
        tr.append(title, desc, batch, date);
        table.append(tr);
    })
}
const hidden = () => {
    table.style.visibility = "hidden";
}


addBtn.addEventListener("click", show);
// addBtn.addEventListener("click", hidden);

const pastAssignment = [];
const futureAssignment = [];
let temp;
let allList = [];


const main = (event) => {
    hidden();
    event.preventDefault();
    const obj = {
        title1: title.value,
        desc1: desc.value,
        batch1: batch.value,
        due1: due.value
    }
    allList.push(obj);

    // let templet = `
    // <tr>
    // <td>   ${obj.title1} </td>
    // <td>   ${obj.desc1} </td>
    // <td>   ${obj.batch1}</td>
    // <td>   ${obj.due1}  </td>
    // <td>   <button onclick="remove1()" >Delete</button>  </td>
    // </tr>
    // `

    // table.innerHTML += templet;


    const dateCam = obj.due1;
    let date = new Date();
    let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split("T")[0];
    if (dateString > dateCam) {
        pastAssignment.push(obj);
        temp = pastAssignment;
        console.log("past", pastAssignment)
    } else {

        futureAssignment.push(obj);
        temp1 = futureAssignment;
        console.log("futur", futureAssignment);
    }
}
submit.addEventListener("click", main);
const remove1 = () => {
    alert("do it by youself-- don't disturb us--- milkr bnaya hai sbne.. jo krna kr lo...")
}

const pastData = () => {
    show();
    // hidden()
    table.innerHTML = "";
    temp.forEach((element) => {
        console.log(element);
        const tr = document.createElement("tr");
        const title = document.createElement("td");
        const desc = document.createElement("td");
        const batch = document.createElement("td");
        const date = document.createElement("td");
        title.innerHTML = element.title1;
        desc.innerHTML = element.desc1;
        batch.innerHTML = element.batch1;
        date.innerHTML = element.due1;
        tr.append(title, desc, batch, date);
        table.append(tr);
    })
}
pastBtn.addEventListener("click", pastData);

const futureData = () => {
    show();
    table.innerHTML = "";
    temp1.forEach((element) => {
        console.log(element);
        const tr = document.createElement("tr");
        const title = document.createElement("td");
        const desc = document.createElement("td");
        const batch = document.createElement("td");
        const date = document.createElement("td");
        title.innerHTML = element.title1;
        desc.innerHTML = element.desc1;
        batch.innerHTML = element.batch1;
        date.innerHTML = element.due1;
        tr.append(title, desc, batch, date);
        table.append(tr);
    })
}
futureBtn.addEventListener("click", futureData);