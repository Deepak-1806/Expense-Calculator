const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalAmount = document.getElementById('total-amount');

let total = 0;

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById("expense-name").value.trim();
    const category = document.getElementById("category").value;
    const amount = Number(document.getElementById("amount").value);
    const date = document.getElementById("date").value;

    const row = document.createElement('tr');

    [name, category, amount.toFixed(2), date].forEach(function (value) {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    const actionCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "X";
    removeButton.addEventListener("click", function () {
        row.remove();
        total -= amount;
        totalAmount.textContent = total.toFixed(2);
    });
    actionCell.appendChild(removeButton);
    row.appendChild(actionCell);

    expenseList.appendChild(row);

    total += amount;
    totalAmount.textContent = total.toFixed(2);

    expenseForm.reset();
});