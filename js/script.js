// HEADER COLOR CHANGER
function changeHeaderColor(){
    let colors = ["#CCB3B2", "#998988", "#EDFFD6", "#C9CCB2"];
    let getColor = Math.floor((Math.random() * colors.length));

    document.querySelector('body').style.background = colors[getColor];

    if(document.querySelector('body').style.background == "rgb(153, 137, 136)"){

    }
}

// 
window.onload = changeHeaderColor;

function changeHeaderText(){
    let texts = ["twoich pomysłów.", "twojego biznesu.", "twojego sukcesu.", "twojej pasji.", "ciebie."]
    const changedText = document.querySelector('.frontpage-header-title-changed');
    // changedText.innerHTML = texts[Math.floor(Math.random() * (texts.length - 1))];
    let i = 0;
    setInterval(() => {
        if(i <= 4){
            changedText.innerHTML = texts[i];
            i++;
        }

        if (i == 5){
            clearInterval();
        }
    }, 1000)
}

// INITIALIZATION
changeHeaderText();