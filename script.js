let heartCount = 0;
//heart icon
const heartIcon = document.querySelectorAll('.heart-btn');
heartIcon.forEach(icon => {
    icon.addEventListener('click', function () {

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
    button.addEventListener('click', function () {
        //alert
        if (coinCount >= 20) {
            coinCount -= 20;
            const card = button.closest(".card-div");
            const serviceName = card.querySelector(".service-tag").innerText;
            const serviceNumber = card.querySelector(".number").innerText;

            alert(`calling ${serviceName} : ${serviceNumber}`);
            const countCoinValue = document.getElementById('coin-number');
            countCoinValue.textContent = coinCount;

        } else {
            alert('Insufficient coin');
            return;
        }

        //get number
        const number = this.closest("div").parentNode.querySelector(".number").textContent;
        const title = this.closest("div").parentNode.querySelector(".service-tag").textContent;

        //add to history
        const historyList = document.getElementById("historyList");
        const time = new Date().toLocaleTimeString();

        const li = document.createElement("li");
        li.className = "flex justify-between";
        li.innerHTML = `<div class="flex items-center w-full bg-[#DFEFFF] rounded-xl justify-between p-2">
        <div>
        <span class="font-bold">${title}</span><br>
        <span>${number}</span>
        </div>
        <span class="text-gray-500">${time}</span>
        </div>`;

        historyList.prepend(li);
    })
})
//clear history
function clearHistory() {
    document.getElementById("historyList").innerHTML = "";
}
//copy button
let copyCount = 0;

const copyBtn = document.querySelectorAll('.copy-btn');
copyBtn.forEach(button => {
    button.addEventListener('click', function () {

        //find hotline number
        const card = this.closest(".card-div");
        const number = card.querySelector(".number").textContent;
        //copy to clipboard
        navigator.clipboard.writeText(number).then(() => {
            alert("copy button clicked");
            copyCount++;
            const countCopyValue = document.getElementById('copy-number');
            countCopyValue.textContent = copyCount;
        });
    })
})