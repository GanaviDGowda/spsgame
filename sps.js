let choices=document.querySelectorAll(".choice");
let US=document.querySelector("#userScore p");
let CS=document.querySelector("#compScore p");
let msgC=document.querySelector(".messageContainer");
let msg=document.querySelector("#msg");
let Cstone=document.querySelector("#Cstone");
let Cpaper=document.querySelector("#Cpaper");
let Cscissor=document.querySelector("#Cscissor");
let userscore=0;
let compscore=0;

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let choiceId=choice.getAttribute("Id");
        let compId=compchoice();
        showCompChoice(compId);
        playgame(choiceId,compId);
    })
});

const showCompChoice=(id)=>{

    Cstone.classList.add("hide");
    Cpaper.classList.add("hide");
    Cscissor.classList.add("hide");


    if(id=="stone"){
        Cstone.classList.remove("hide");
    }else if(id=="paper"){
        Cpaper.classList.remove("hide");
    }else if(id=="scissor"){
        Cscissor.classList.remove("hide");
    }
}
const playgame=(choiceId,compId)=>{

    if (choiceId==compId){
        msg.innerText="draw";
        msg.style.backgroundColor="orange";
    }else{
        if(choiceId=="stone"){
            winner=compId=="scissor"?true:false;
        }
        else if(choiceId=="paper"){
            winner=compId=="stone"?true:false;
        }else{
            winner=compId=="paper"?true:false;
        }
        showresult(winner,choiceId,compId);
    }
    

}

const compchoice=()=>{
    const options=["stone","paper","scissor"];
    const indx=Math.floor(Math.random() *3);
    return options[indx];
}

const showresult=(winner,user,comp)=>{
    if(winner){
        userscore++;
        US.innerText=userscore;
        msg.style.backgroundColor="green";
        msg.innerHTML=`you won!! your ${user} defeated ${comp}`;
    }
    else{
        compscore++;
        CS.innerText=compscore;
        msg.style.backgroundColor="red";
        msg.innerHTML=`you lost!! ${comp} defeated your ${user}`;
    }
};