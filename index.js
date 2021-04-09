var tableForm = document.getElementById('table-control');
var tableArea = document.getElementById('table-area');

function stopDefAction(event) {
    event.preventDefault();
}

function newTable(event) {
    let table = document.getElementById('myTable');
    let formData = new FormData(tableForm);
    let rows = formData.get('row');
    let columns = formData.get('column');
    if(columns < 1 || rows < 1) {
        alert('columns and rows can not be less than 1');
        return;
    }
    if(table) {
        table.remove()
    }
    table = document.createElement("table");
    table.setAttribute("id", "myTable");
    tableArea.appendChild(table);
    for(let i = 0; i < rows; i++ ) {
        let row = table.insertRow(i);
        for(let j = 0; j < columns; j++) {
            row.insertCell(j);
        }
    }
}

function fillTable(event) {
    let table = document.getElementById('myTable');
    console.debug(table.rows.length);
    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];
        for(let j = 0; j < row.cells.length; j++) {
            let cell = row.cells[j];
            let text = document.createTextNode(`${i}-${j}`);
            cell.appendChild(text);
            cell.addEventListener('click', fillCell);
        }
    }
}

function fillCell(event) {
    let cell = event.target;
    if(cell.hasAttribute('class')) {
        cell.removeAttribute('class');
    } else {
        cell.setAttribute('class', 'active-cell');
    }

}

tableForm.addEventListener('submit', stopDefAction, false);
tableForm.addEventListener('submit', newTable);
tableForm.addEventListener('submit', fillTable);

