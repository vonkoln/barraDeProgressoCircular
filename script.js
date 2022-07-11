let progressCircular = document.querySelector(".progress-circular");
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let value = document.querySelector(".value");
let start = 0;


btn.addEventListener('click', bar);

function bar(){
    let progress = setInterval(()=> {
       if(start < inp.value){
         start++;
         progressEnd()
       } else{
        start--;
        progressEnd()
       }
        function progressEnd(){
            value.textContent = `${start}%`;
        progressCircular.style.background = `conic-gradient(#880bea ${start * 3.6}deg, #ededed 0deg)`
        if(start == inp.value){
            clearInterval(progress)
            inp.value = "";
        }
        }
    }, 50);

}