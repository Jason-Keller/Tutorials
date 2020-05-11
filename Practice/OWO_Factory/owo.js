const inp = document.querySelector("input");
const txtarea = document.getElementById("txt");
const txtarea2 = document.getElementById("txt2");

txtarea.addEventListener("keydown", function(){
    const keyPress = event.keyCode;
    const inpValue = txtarea.value;
    if(keyPress === 13){
        console.log(inpValue.split(""));
        this.value = "";
        for(var i = 0; i < inpValue.length; i++){
            if(inpValue[i] === "r"){
                const regex = /r/gi;
                console.log("Found an r! Replacing...");
                OWO = inpValue.replace(regex, "w");
            }
        }
        txtarea2.value = OWO;
        console.log(OWO);
    }
});