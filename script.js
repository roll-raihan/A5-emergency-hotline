let heartCount = 0;
document.getElementById('heart-btn').addEventListener('click', function (e) {
    e.preventDefault();

    heartCount++;
    const countHeartValue = document.getElementById('heart-number');
    countHeartValue.textContent = heartCount;
})
let coinCount = 100;
document.getElementById('call-btn').addEventListener('click', function (e) {
    e.preventDefault();
    // const serviceName = {
    //     name: document.getElementById('service-name')
    // };

    if (coinCount >= 20) {
        coinCount -= 20;
        alert('call button clicked');
        const countCoinValue = document.getElementById('coin-number');
        countCoinValue.textContent = coinCount;

    } else {
        alert('Insufficient coin');
    }
})