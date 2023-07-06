// Функция для добавления новой строки в таблицу
function addTableRow(data) {
    var tableBody = document.getElementById("table-body");
    var newRow = document.createElement("tr");

    // Создание ячеек и заполнение их данными
    for (var i = 0; i < data.length; i++) {
        var cell = document.createElement("td");
        cell.textContent = data[i];
        newRow.appendChild(cell);
    }

    // Добавление новой строки в таблицу
    tableBody.appendChild(newRow);
}

// Пример использования функции addTableRow
var rowData = ["1", "Название товара", "Материал", "100", "50", "10", "фото.jpg", "100$"];
addTableRow(rowData);
