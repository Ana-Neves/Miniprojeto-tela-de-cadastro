class Data {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

let dataList = [];
let formContainer = document.getElementById('formContainer');
let dataForm = document.getElementById('dataForm');
let dataListContainer = document.getElementById('dataList');

function showForm() {
    formContainer.style.display = 'block';
}

function saveData() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let newData = new Data(name, email);
    dataList.push(newData);

    displayDataList();
    clearForm();
}

function displayDataList() {
    dataListContainer.innerHTML = '';

    dataList.forEach((data, index) => {
        let dataItem = document.createElement('div');
        dataItem.innerHTML = `<strong>${data.name}</strong> - ${data.email} 
                             <button onclick="editData(${index})">Editar</button>
                             <button onclick="deleteData(${index})">Deletar</button>`;
        dataListContainer.appendChild(dataItem);
    });
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    formContainer.style.display = 'none';
}

function editData(index) {
    let selectedData = dataList[index];
    document.getElementById('name').value = selectedData.name;
    document.getElementById('email').value = selectedData.email;

    dataList.splice(index, 1);
    displayDataList();
}

function deleteData(index) {
    dataList.splice(index, 1);
    displayDataList();
}