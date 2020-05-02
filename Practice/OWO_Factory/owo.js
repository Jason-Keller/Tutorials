const inp = document.querySelector("input");

inp.addEventListener("keydown", function(){
    const keyPress = event.keyCode;
    const inpValue = inp.value;
    if(keyPress === 13){
        console.log(inpValue.split(""));
        this.value = "";
        for(var i = 0; i < inpValue.length; i++){
            if(inpValue[i] === "r"){
                const regex = /r/gi;
                console.log("Found an r! Replacing...");
                alert(inpValue.replace(regex, "w"));
            }
        }
    }
});
