const storyimage = document.getElementById('img');
const storytext = document.getElementById('storyText');
const storybtn1 = document.getElementById('Btn1');
const storybtn2 = document.getElementById('Btn2');
let currentStep = "step1";

document.getElementById('Btn1').addEventListener('click', function(){
    currentStep = story[currentStep].btn1.step;
    LoadScene();
});
document.getElementById('Btn2').addEventListener('click', function(){
    currentStep = story[currentStep].btn2.step;
    LoadScene();
});

let story = {
    step1: {img: "images/red.png",
        text: "Bob is your uncle",
        btn1: {text: "Yes", step:"step2"},
        btn2: {text: "No", step:"step4"}
    },
    step2: {img: "images/green.jpg",
        text: "Yes Good job Bob IS your uncle",
        btn1: {text: "Try to explode", step:"step3"},
        btn2: {text: "Dont try to explode", step:"step3"}
    },
    step3: {img: "images/explode.jpg",
        text: "You Explode wonderful job :D"
    },
    step4: {img: "images/explosion2.png",
        text: "Your uncle Bob Explodes horrible job :c"
    }
};

LoadScene();
function LoadScene(){
    storyimage.src = story[currentStep].img;
    storytext.innerHTML = story[currentStep].text;
    if (story[currentStep].btn1 == undefined) {
        document.getElementById('ButtonDiv').classList.add('hidden');
    }else{
        storybtn1.innerHTML = story[currentStep].btn1.text;
        storybtn2.innerHTML = story[currentStep].btn2.text;
    };
};


