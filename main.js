//display content in calcscreen
const displayContent = (content)=>{
    calcscreen.value += content
}
//clear content
const clearAllContent = ()=>{
    calcscreen.value = ""
    calcscreen.placeholder = "0"
}

//result display in calcscreen
const showResult = ()=>{
    try{
        console.log("TRY BLOCK");
        calcscreen.value = eval(calcscreen.value)
    }catch(err){
        console.log("CATCH BLOCK");
        console.log(err);
        calcscreen.value = ""
        calcscreen.placeholder = "invalid expression!!!"
    }finally{
        console.log("finally block : task completed");
    }
}
//removelast
const removelast = ()=>{
    calcscreen.value = calcscreen.value.slice(0,-1)
}