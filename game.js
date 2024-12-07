let boxes=document.querySelectorAll(".box");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let new_btn=document.querySelector("#new-btn");
let reset_btn=document.querySelector("#reset-btn");
let turn0=true;
let count=0;
//store winning pattern
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
//
boxes.forEach((box)=>{
     
    box.addEventListener("click",()=>{
        console.log("box clicked");
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }
        else
        {
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;
        checkwinner();
         

    });

});
const  drawgame=()=>{
    msg.innerText="DRAW GAME\n click on the new game";  
    msgContainer.classList.remove("hide");   
}

const resetgame=()=>{
    turn0=true;
    enablebox();
    msgContainer.classList.add("hide");
}
const enablebox=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerHTML="";
    }
}
const disablebox=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const showWinner=(val1)=>{
      msg.innerText=`congrats winner is ${val1}`;
      msgContainer.classList.remove("hide"); 
      disablebox();
};

const checkwinner=()=>{
    for(let pattern of winpattern)
    {
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!=""&&val2!=""&& val3!="")
        {
            if(val1==val2&&val2==val3)
            {
                console.log(val1,"winner ");
                showWinner(val1);
            }
              if(count===9)
           {
            console.log("draw game")
            drawgame();
            } 
            
        }
         
        


    }
}

new_btn.addEventListener("click",resetgame);
reset_btn.addEventListener("click",resetgame);



