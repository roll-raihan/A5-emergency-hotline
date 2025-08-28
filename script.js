let heartCount = 0;
// document.getElementById('heart-btn').addEventListener('click', function (e) {
//     e.preventDefault();

//     heartCount++;
//     const countHeartValue = document.getElementById('heart-number');
//     countHeartValue.textContent = heartCount;
// })
//heart icon
const heartIcon = document.querySelectorAll('.heart-btn');
heartIcon.forEach(icon => {
    icon.addEventListener('click',function(){

        // e.preventDefault();

    heartCount++;
    const countHeartValue = document.getElementById('heart-number');
    countHeartValue.textContent = heartCount;
    })
})

let coinCount = 100;

//call button
const callButton = document.querySelectorAll('.call-btn');
callButton.forEach(button => {
    button.addEventListener('click',function(){
        //alert
        if (coinCount >= 20) {
        coinCount -= 20;
        alert('call button clicked');
        const countCoinValue = document.getElementById('coin-number');
        countCoinValue.textContent = coinCount;

    } else {
        alert('Insufficient coin');
    }

        //get number
        const number = this.closest("div").parentNode.querySelector(".number").textContent;
        const title = this.closest("div").parentNode.querySelector("h2").textContent;

        //add to history
         const historyList = document.getElementById("historyList");
        const time = new Date().toLocaleTimeString();

        const li = document.createElement("li");
        li.className = "flex justify-between";
        li.innerHTML = `<span>${title}</span><span class="text-gray-500">${time}</span>`;

        historyList.prepend(li);
    })
})
//clear history
function clearHistory() {
      document.getElementById("historyList").innerHTML = "";
    }