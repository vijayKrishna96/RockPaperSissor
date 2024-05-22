const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image,index) => {
    image.addEventListener("click" ,(e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "./images/rock.webp";
        result.textContent = "Wait....";

        optionImages.forEach((image2,index2) => {
           index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() =>{
            gameContainer.classList.remove("start");
        let imageSrc = e.target.querySelector("img").src;
        userResult.src = imageSrc;
        console.log(e.target);
        console.log(imageSrc);

        let randomNumber = Math.floor(Math.random() * 3);

        let cpuImages = ["./images/rock.webp","./images/hand.png","./images/sissor.png"];
        
        cpuResult.src = cpuImages[randomNumber];

        let cpuValue = ["R","P","S"][randomNumber];

        let userValue = ["R","P","S"][index];

        let outCome = {
            RR : "Draw",
            RP : "Cpu",
            RS : "You",
            PP : "Draw",
            PR : "You",
            PS : "Cpu",
            SS : "Draw",
            SR : "Cpu",
            SP : "You",
        };

        let outcomeValue = outCome[userValue + cpuValue];

        result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won!!`; 
        console.log(outcomeValue);
        },2500)
    });

});