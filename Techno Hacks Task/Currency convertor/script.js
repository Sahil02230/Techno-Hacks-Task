const exchangeRates = {
    USD: 1,
    EUR: 0.86,
    GBP: 0.75,
};

function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
    document.getElementById("result").textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
