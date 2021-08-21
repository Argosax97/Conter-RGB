// counterValue number
let counterValue = 0;
// counter and buttons
let counter = document.querySelector('#counter');
let btns =document.querySelectorAll('.btn');
//colors
let green = 0;
let red = 0;

//fucnctions 
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const btnclass = e.currentTarget.classList;
        if(btnclass.contains("decrease")){
            counterValue--;  
            red+=30;
            if(green>255 || green<255){
                green-=30;
            };  
            counter.style.color="rgb("+red+","+green+","+0+")";        
        }else if(btnclass.contains("increase")){
            counterValue++;  
            green+=30;  
            if(red>255 || red<255){
                red-=30;
            };   
            counter.style.color="rgb("+red+","+green+","+0+")";        
        }else{
            counterValue=0;
            red=0;
            green=0;
        }
        counter.style.color="rgb("+red+","+green+","+0+")";
        counter.innerHTML=counterValue;
    });
});






