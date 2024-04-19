const clock = document.getElementById('digital-clock');

setInterval(() => {

    const date = new Date();

    if (clock) {

        clock.innerHTML = date.toLocaleTimeString();
    }

}, 1000);
