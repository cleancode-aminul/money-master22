// JavaScript for calculating expenses
document.addEventListener('DOMContentLoaded', function () {
    const incomeInput = document.getElementById('income');
    const foodInput = document.getElementById('food');
    const rentInput = document.getElementById('rent');
    const clothesInput = document.getElementById('clothes');
    const calculateButton = document.getElementById('calculate');
    const totalExpensesSpan = document.getElementById('total-expenses');
    const balanceSpan = document.getElementById('balance');

    calculateButton.addEventListener('click', function () {
        const income = parseFloat(incomeInput.value) || 0;
        const food = parseFloat(foodInput.value) || 0;
        const rent = parseFloat(rentInput.value) || 0;
        const clothes = parseFloat(clothesInput.value) || 0;

        const totalExpenses = food + rent + clothes;
        const balance = income - totalExpenses;

        totalExpensesSpan.textContent = `$${totalExpenses.toFixed(2)}`;
        balanceSpan.textContent = `$${balance.toFixed(2)}`;
    });
});
