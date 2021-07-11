function calculateTip() {
    var billamt     = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numPeople   = document.getElementById("peopleAmt").value;


    if(billamt === "" || serviceQual == 0 ){
        alert("Please Enter Fields");
        return;
    }

    if(numPeople === "" || numPeople<=1){
        numPeople = 1;
    }


    var total = (billamt * serviceQual) / numPeople;

    total= Math.round(total * 100) / 100;

    total = total.toFixed(2);

    document.getElementById("tip").innerText = total;
}

document.getElementById("calculate").onclick = function(){
    calculateTip();
}