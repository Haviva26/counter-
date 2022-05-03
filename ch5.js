let colors =["green", "red", "rgba(133,122,200)",
"#f15025"]
let btn = document.getElementById('btn');
let color = document.getElementById("color")

// btn.addEventListener("click ", function(){
    // let randomNumber = 2;
    // document.body.style.backgroundColor = colors[randomNumber];
    // color.innerText = colors[randomNumber];
// })

//  
function changeColor(element){
    let currentColor = element.style.backgroundColor;
    if(currentColor == 'white'){
        element.style.backgroundColor = "green"
    }else if (currentColor == 'green'){
        element.style.backgroundColor = 'red'
    }else if (currentColor == 'red') {
            element.style.backgroundColor = colors[2]

    }

    for(currentColor == colors[2];+){
        element.style.backgroundColor == colors[3]}
    }
    changeColor()
