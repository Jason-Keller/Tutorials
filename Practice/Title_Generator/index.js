const button = document.querySelector("button");
const spanA = document.getElementById("A");
const spanB= document.getElementById("B");

//======================================================================================================================
const noun = ["Sales", "Marketing", "HTML", "JavaScript", "Accounting", "IT", "Recruitng", "Human Resources", "People", "Software", "Charity", "Underling", "Brand", "Graphic", "Social Media", "Media Relations", "eCommerce", "Industry", "Chief"];
const title = ["Engineer", "Specialist", "Associate", "Analyst", "Advocate", "Student", "Champion", "Founder", "Executive", "Manager", "Agent", "Coder", "Programmer", "Hacker", "Priest", "High Priest", "Shaman", "Sales Manager", "Account Executive", "Mancer", "Head", "Lead", "Moron", "Developer", "Buyer", "Assistant", "Copywriter", "Coordinator", "Hero", "Programmer", "Journalist", "Line Cook", "Cashier", "Player", "Chief", "Warrior", "Lich", "Ninja", "Rockstar", "Paladin", "Scaler", "Builder", "Priest", "Rogue", "Receptionist Officer", "Officer", "At Large", "At Law", "PhD"];
//======================================================================================================================

button.addEventListener("click", function(){
    const randomNoun = noun[Math.floor(Math.random() * noun.length)];
    const randomTitle = title[Math.floor(Math.random() * title.length)];
    spanA.classList.remove(".hidden");
    
    //Update the spans
    spanA.textContent = randomNoun;
    spanB.textContent = randomTitle;
    console.log("Your new title is... " + randomNoun +" "+ randomTitle);
});