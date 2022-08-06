let x = 'x';
let o = 'o';
let turns = 0;

let currentPlayer;

$(".box").addClass('disabled');

let startGame=()=>{
    $('#startBtn').hide();
    $(".box").removeClass('disabled');
    currentPlayer=x;
    $('#currentPlayer').text(`Player ${currentPlayer}, START!`);
}

// let display =  $('#currentPlayer').text(`Player ${currentPlayer}`);

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
let winEvents = [[box0, box1, box2], [box3, box4,box5], [box6, box7, box8], [box0, box3, box6], [box1, box4, box7], [box2, box5, box8], [box0, box4, box8], [box2, box4, box6]];

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
        

        $('#currentPlayer').text(`GAME OVER`);
        return;
    };    
    
}; 

let changePlayer=()=> {
    
    let display =  setTimeout(()=> $('#currentPlayer').text(`Player ${currentPlayer}`), 500);


    console.log(`Entered changePlayer Function`);

    // if(turns === 9){
    
    // document.addEventListener("click", handler, true);
    //     function handler(div) {
    //         div.stopPropagation();
    //         div.preventDefault();
    //         setTimeout(()=> $('#currentPlayer').text(`GAME OVER`), 1000);
    //     }          
    if(currentPlayer===x){
        console.log(`---------------------------------`);
        turns++;
        currentPlayer = o;
        console.log(`changed to player-${currentPlayer}`);
        
        let cpu=(num)=>{
            let div =`#box${num}`;
            console.log(div);
            

            if($(div).hasClass('disabled')){
                cpu(getRandomInt(9));

            } else{
                $(div).text(o);
                $(div).addClass('disabled')
                $(div).css("color", "rgb(75, 5, 68)");

            };   
        };
        let getRandomInt=(max)=> {
            return Math.floor(Math.random() * max);
        };
         
        setTimeout(()=> cpu(getRandomInt(9)), 500);
        

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
        setTimeout(()=> check(), 1200);

        console.log(`--------------END OF O --------------`);
        setTimeout(()=>changePlayer(), 1300);   


    } else {
        currentPlayer=x;
        console.log(`changed to player-${currentPlayer}`);
        
         
    };

    console.log(`${currentPlayer} is the current player`);
};

                
let symbolOf=(currentPlayer)=>{
    console.log(`---------------------------------`);
    turns++;
    console.log(turns);
    
    let id = event.target.getAttribute('id');
    $(function(){
        console.log(`CLICKED BY ${currentPlayer}`);
        $(`#${id}`).text(currentPlayer);
        $(`#${id}`).addClass('disabled')

         
        if (turns > 4){ 
            console.log(`Before checking winners, player is: ${currentPlayer}`);
            
                console.log(`---------------------------------`);  
                checkWinner(currentPlayer, ...winEvents[0]);
                checkWinner(currentPlayer, ...winEvents[1]);
                checkWinner(currentPlayer, ...winEvents[2]);
                checkWinner(currentPlayer, ...winEvents[3]);
                checkWinner(currentPlayer, ...winEvents[4]);
                checkWinner(currentPlayer, ...winEvents[5]);
                checkWinner(currentPlayer, ...winEvents[6]);
                checkWinner(currentPlayer, ...winEvents[7]);
                
                console.log(`---------------------------------`);
            console.log(`NO WINNER FOUND GO TO NEXT PLAYER`);
            if(turns===9){
                document.addEventListener("click", handler, true);
                function handler(div) {
                    div.stopPropagation();
                    div.preventDefault();
                    setTimeout(()=> $('#currentPlayer').text(`Tied! GAME OVER`), 500);
                };  
            }else{
            setTimeout(()=>changePlayer(), 500);  
            }; 

        }else{
            console.log(`THIS ↓ because NOT 5 turns YET`);
            changePlayer();
        };    
    });
};

