function formulaCountdown() {
    const formulaDate = new Date("March 2, 2024 08:00");
    const now = new Date();
    const diff = formulaDate - now;


    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;


    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerId);
        watchFormula();
    }
}




let timerId = setInterval(formulaCountdown, 1000);

function watchFormula() {
    const heading = document.querySelector("h1");
    heading.textContent = "RACE TIME!!!";
    heading.classList.add("race");

    const headingTwo = document.querySelector("h2");
    headingTwo.classList.add("raceTwo");

    const linkOne = document.createElement('a');
    linkOne.innerText = 'Watch the race';
    linkOne.href = "https://www.formula1.com/";
    linkOne.target = '_blank';
    linkOne.classList.add('raceBtn');
    const btnElement = document.querySelector("#second");                                                                     
    btnElement.appendChild(linkOne);

}




const button = document.querySelector("#myButton");
const audio = document.querySelector("#myAudio");

button.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        button.classList.toggle("pause");
    }

    else {
        audio.pause();
        button.classList.toggle("pause");
    }
})
