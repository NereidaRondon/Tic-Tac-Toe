let x = 'x';
let o = 'o';
let turns = 0;
$('#resetBtn').hide();
let currentPlayer;
$('#currentPlayer').hide();
$(".box").addClass('disabled');

let startGame=()=>{
    $('#startBtn').hide();
    $(".box").removeClass('disabled');
    $('#currentPlayer').removeAttr('hidden');
    $('#currentPlayer').show();
    currentPlayer=x;
    $('#currentPlayer').text(`Player ${currentPlayer}, START!`);
};

let confetti = document.querySelectorAll('.confetti'),
      rate = 500; //in milliseconds

let addLoserfetti=()=> {
 
    for(let i=0;i<60;i++){
    let c = document.createElement('div');
    c.className = 'loserfetti';
    c.innerHTML='😥';
    c.style.left = Math.random()*100 + '%';
    c.style.animationDuration = (Math.random()*4) + 9 + 's';
    c.style.animationDelay = Math.random()*8 + 's';
    document.body.appendChild(c)
  };
};

let addConfetti=()=> {
  for(var i=0;i<100;i++){
    var c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random()*100 + '%';
    c.style.background = 'hsl('+Math.random()*800+'deg,100%,60%)';
    c.style.animationDuration = (Math.random()*3) + 9 + 's';
    c.style.animationDelay = Math.random()*10 + 's';
    document.body.appendChild(c)
  };
};


let box0 = $("#box0");
let box1 = $("#box1");
let box2 = $("#box2");
let box3 = $("#box3");
let box4 = $("#box4");
let box5 = $("#box5");
let box6 = $("#box6");
let box7 = $("#box7");
let box8 = $("#box8");
//0 1 2
//3 4 5
//6 7 8
let winEvents = [
    [box0, box1, box2], 
    [box3, box4, box5], 
    [box6, box7, box8], 
    [box0, box3, box6], 
    [box1, box4, box7], 
    [box2, box5, box8], 
    [box0, box4, box8], 
    [box2, box4, box6]
];
//Checks the winning combinations
let checkWinner=(currentPlayer, a, b, c)=>{
   
    if(a.html()===currentPlayer && a.html()===b.html() && b.html()===c.html()){
                
        console.log(`FOUND A WINNER`);        
        setInterval(()=>$('#currentPlayer').text(`Player ${currentPlayer} wins!!!`, 2000));
        $(a).css("background-color", "rgba(255, 255, 255, 0.3)");
        $(b).css("background-color", "rgba(255, 255, 255, 0.3)");
        $(c).css("background-color", "rgba(255, 255, 255, 0.3)");
        //need to disable all other divs
        $(".box").addClass('disabled');
        //show reset button to start all over again
        $('#resetBtn').show();
        if (currentPlayer===x){
            addConfetti();
        }else{
            addLoserfetti();
        };
        
        return;
    };   
}; 
//changes players from x to o and vice versa
let changePlayer=()=> {
    setTimeout(()=> $('#currentPlayer').text(`Player ${currentPlayer}`), 200);
    console.log(`Entered changePlayer Function`);

    if(turns===9){       
        //need to disable all other divs
        $(".box").addClass('disabled');
        setInterval(()=>$('#currentPlayer').text(`Tied! GAME OVER`), 500);
        //show reset button to start all over again
        $('#resetBtn').show();
        return;
    } else if(currentPlayer===x){
        $(".box").addClass('disabledX');
        console.log(`---------------------------------`);
        turns++;
        currentPlayer = o;
        console.log(`changed to player-${currentPlayer}`);
        
        let cpu=(num)=>{
            let div =`#box${num}`;          

            if($(div).hasClass('disabled')){
                cpu(getRandomInt(9));

            } else{
                $(div).text(o);
                $(div).addClass('disabled');
                $(div).css("color", "rgb(75, 5, 68)");
            };   
        };
        let getRandomInt=(max)=> {
            return Math.floor(Math.random() * max);
        };  
        setTimeout(()=> cpu(getRandomInt(9)), 300);
        
        let check =()=>{
            console.log(`Check if ${currentPlayer} WON???`);
            checkWinner(currentPlayer, ...winEvents[0]);
            checkWinner(currentPlayer, ...winEvents[1]);
            checkWinner(currentPlayer, ...winEvents[2]);
            checkWinner(currentPlayer, ...winEvents[3]);
            checkWinner(currentPlayer, ...winEvents[4]);
            checkWinner(currentPlayer, ...winEvents[5]);
            checkWinner(currentPlayer, ...winEvents[6]);
            checkWinner(currentPlayer, ...winEvents[7]);
        };        
        setTimeout(()=> check(), 500);
        console.log(`--------------END OF O --------------`);
        setTimeout(()=>changePlayer(), 600);   
    } else {
        $(".box").removeClass('disabledX');
        currentPlayer=x;
        console.log(`changed to player-${currentPlayer}`); 
    };
};
      
let symbolOf=(currentPlayer)=>{
    turns++;
    console.log(turns);
    
    let id = event.target.getAttribute('id');
    $(function(){
        console.log(`CLICKED BY ${currentPlayer}`);
        $(`#${id}`).text(currentPlayer);
        $(`#${id}`).addClass('disabled')

        if (turns > 4){     
                console.log(`------------CHECK WINNER------------`);  
                checkWinner(currentPlayer, ...winEvents[0]);
                checkWinner(currentPlayer, ...winEvents[1]);
                checkWinner(currentPlayer, ...winEvents[2]);
                checkWinner(currentPlayer, ...winEvents[3]);
                checkWinner(currentPlayer, ...winEvents[4]);
                checkWinner(currentPlayer, ...winEvents[5]);
                checkWinner(currentPlayer, ...winEvents[6]);
                checkWinner(currentPlayer, ...winEvents[7]);              
                console.log(`NO WINNER FOUND GO TO NEXT PLAYER`);
  
                setTimeout(()=>changePlayer(), 500);
                $(".box").addClass('disabledX'); 
        }else{
            console.log(`THIS ↓ because NOT 5 turns YET`);
            changePlayer();
        };    
    });
};