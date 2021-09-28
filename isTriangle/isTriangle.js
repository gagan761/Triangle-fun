const inputs = document.querySelectorAll('.angle-input');
const isTrianglebtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");


function calculateSumofAngles(angle1,angle2,angle3)
{
    const sumOfAngles= angle1+angle2+angle3;
    return sumOfAngles;
    

}


function isTriangle(){
    const sumOfAngles = calculateSumofAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
    
     if(sumOfAngles==180)
     {
         outputEl.innerText="These angles collectively form a triangle"
     }
     else{
        outputEl.innerText="Triangle not possible";
     }


 }


isTrianglebtn.addEventListener("click", isTriangle)
