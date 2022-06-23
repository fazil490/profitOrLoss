var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click', submitHandler)

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitOrLoss(ip, qty, curr);
}

function showOutput(message) {
    outputBox.innerHTML = message;
}

function calculateProfitOrLoss(initial, quantity, current) {
    if(initial>0 && quantity>0 && current>0) {
        if (initial*quantity > current) {
            var loss = (initial*quantity - current);
            var lossPercentage = ((loss / (initial*quantity)) * 100).toFixed(2);
            showOutput("Oh oh! the loss is " + loss + " and the loss percent is  " + lossPercentage + "%");
        } else if (current > initial*quantity) {
            var profit = (current - initial*quantity) ;
            var profitPercentage = ((profit / current) * 100).toFixed(2);
            showOutput("Hey! the profit is " + profit + " and the Profit percent is " + profitPercentage + "%")
        } else {
            showOutput("No pain No gain and No gain No pain");
        }
    } else {
        showOutput("Please enter the valid inputs (Greater than 0)");
    }
    
}

