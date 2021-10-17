const initialStockPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stocks-quantity");
const currentStockPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

function calculateProfitOrLoss(initialPrice, stockQnty, currentPrice) {

    if(currentPrice < initialPrice) {
        var lossValue = ((initialPrice-currentPrice)*stockQnty).toFixed(2);
        var lossPercentage = ((lossValue/(initialPrice*stockQnty))*100).toFixed(2);

        if(lossPercentage > 50){
            output.style.color = "#d00000"
            showMessage(`Mubaarak ho, aap barbaad ho chuke hain. Aapko Rs ${lossValue} matlab ki ${lossPercentage}% ka loss hua. Isliye ab thoda rest kar lijiye, warna rest in peace ho jayenge...`)

        } else {
            output.style.color = "red";
            showMessage(`Aapko to ${lossPercentage}% yani ki Rs ${lossValue} ka loss hua hai, ab kya kijiyega?`)
        }
    } else if (initialPrice < currentPrice) {
        var profitValue = ((currentPrice-initialPrice)*stockQnty).toFixed(2);
        var profitPercentage = ((profitValue/(initialPrice*stockQnty))*100).toFixed(2);
        output.style.color = "green";
        showMessage(`You have a profit of Rs ${profitValue} on your investment, which means you have gained ${profitPercentage}% profit on your investment. Matlab "Paisa hi Paisa hoga"...`);
    }
}

function showMessage(msg) {
    output.innerText = msg;
}

function clickButtonHandler() {
    var inip = Number(initialStockPrice.value);
    var sq = Number(stockQuantity.value);
    var curp = Number(currentStockPrice.value);
    
    if(inip && sq && curp) {
        calculateProfitOrLoss(inip, sq, curp);
    } else {
        showMessage("Please fill all the details first!!");
    }
}

checkBtn.addEventListener("click", clickButtonHandler);

