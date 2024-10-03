let cupSmalls = document.querySelectorAll(".cupSmall");
let cup = document.querySelector(".cup");
let empty = document.querySelector(".empty");
let water = document.querySelector(".water");
let titleEmpty = document.querySelector(".empty b");
let full = [];

cupSmalls.forEach((cupsmall, index) => {

    cupsmall.addEventListener('click', (event) => {
        let clickOnCupSmall = event.target;
        // console.log(clickOnCupSmall);
        // clickOnCupSmall.classList.remove('full');
       // clickOnCupSmall.classList.toggle("full");
        cupSmalls.forEach((item) => {
            item.classList.remove("full");
        });

        let cupNumber = cupsmall.id.split("-");

        for (let i = 0; i <= cupNumber[1]; i++) {

            cupSmalls[i].classList.add("full");
            cupSmalls[i].style.transition = "all 1s";
        }
        
        console.log(cupNumber[1]);
        switch (cupNumber[1]) {
            case "0":
                empty.style.height = (260 - 32.5) + "px";
                water.style.height = "32.5px";
                water.innerHTML = "12.5%";
                titleEmpty.innerHTML = "1.75L";
                styleWaterMove();
                break;
            case "1":
                empty.style.height = (260 - 65) + "px";
                water.style.height = "65px";
                water.innerHTML = "25%";
                titleEmpty.innerHTML = "1.5L";
                styleWaterMove();
                break;
            case "2":
                empty.style.height = (260 - 97.5) + "px";
                water.style.height = "97.5px";
                water.innerHTML = "37.5%";
                titleEmpty.innerHTML = "1.25L";
                styleWaterMove();
                break;
            case "3":
                empty.style.height = (265 - 130) + "px";
                water.style.height = "130px";
                water.innerHTML = "50%";
                titleEmpty.innerHTML = "1L";
                styleWaterMove();
                break;
            case "4":
                empty.style.height = (265 - 162.5) + "px";
                water.style.height = "162.5px";
                water.innerHTML = "62.5%";
                titleEmpty.innerHTML = "0.75L";
                styleWaterMove();
                break;
            case "5":
                empty.style.height = (265 - 195) + "px";
                water.style.height = "195px";
                water.innerHTML = "75%";
                titleEmpty.innerHTML = "0.5L";
                styleWaterMove();
                break;
            case "6":
                empty.style.height = (265 - 227.5) + "px";
                water.style.height = "227.5px";
                water.innerHTML = "87.5%";
                titleEmpty.innerHTML = "0.25L";
                styleWaterMove();
                break;
            case "7":
                empty.style.height = (265 - 265) + "px";
                water.style.height = "265px";
                water.innerHTML = "100%";
                titleEmpty.innerHTML = "0L";
                styleWaterMove();
                break;
        }
    });
});

function styleWaterMove(){
    water.style.transition = "all 1s";
    empty.style.transition = "all 1s";
}