let x = 'x';
let o = 'o';
let turns = 0;

let currentPlayer;


let startGame=()=>{
    $('#startBtn').hide();
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



let changePlayer=()=> {
    
    let display =  setTimeout(()=> $('#currentPlayer').text(`Player ${currentPlayer}`), 500);


    console.log(`Entered changePlayer Function`);
    if(turns === 9){
    
    document.addEventListener("click", handler, true);
        function handler(div) {
            div.stopPropagation();
            div.preventDefault();
            setTimeout(()=> $('#currentPlayer').text(`GAME OVER`), 1500);
        }          
    } else if(currentPlayer===x){
        currentPlayer = o;
        console.log(`changed to player-${currentPlayer}`);
       
        
         
    } else {
        currentPlayer=x;
        console.log(`changed to player-${currentPlayer}`);
        
         
    };

    console.log(`${currentPlayer} is the current player`);
};

//0 1 2
//3 4 5
//6 7 8
let winEvents = [[box0, box1, box2], [box3, box4,box5], [box6, box7, box8], [box0, box3, box6], [box1, box4, box7], [box2, box5, box8], [box0, box4, box8], [box2, box4, box6]];

let checkWinner=(currentPlayer, a, b, c)=>{
    console.log(`Who is the player BEFORE IF: ${currentPlayer}`);

    if(a.html()===currentPlayer && a.html()===b.html() && b.html()===c.html()){
        
        console.log(`Who is the player IN IF: ${currentPlayer}`);
        
        $('#currentPlayer').text(`Player ${currentPlayer} wins!!!`);
        $(a).css("background-color", "rgba(255, 255, 255, 0.25)");
        $(b).css("background-color", "rgba(255, 255, 255, 0.25)");
        $(c).css("background-color", "rgba(255, 255, 255, 0.25)");

        //need to disable all other divs
        //need to prolong winner alert on screen
        //show reset button to start all over again
         
    };  
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

        if(currentPlayer===o){
          $(`#${id}`).css("color", "rgb(201, 42, 3)");
        };
        
        $(`#${id}`).on('click', false); 
            
        if (turns > 4){ 
            console.log(`Before checking winners, player is: ${currentPlayer}`);
            
                console.log(`---------------------------------`);  
                checkWinner(currentPlayer, ...winEvents[0]);
                console.log(`0 checked`);
                checkWinner(currentPlayer, ...winEvents[1]);
                 console.log(`1 checked`);
                checkWinner(currentPlayer, ...winEvents[2]);
                 console.log(`2 checked`);
                checkWinner(currentPlayer, ...winEvents[3]);
                 console.log(`3 checked`);
                checkWinner(currentPlayer, ...winEvents[4]);
                 console.log(`4 checked`);
                checkWinner(currentPlayer, ...winEvents[5]);
                 console.log(`5 checked`);
                checkWinner(currentPlayer, ...winEvents[6]);
                 console.log(`6 checked`);
                checkWinner(currentPlayer, ...winEvents[7]);
                 console.log(`7 checked`);
                 console.log(`---------------------------------`);
            console.log(`THIS ↓ because NO WINNER`);
            changePlayer();   

        }else{
            console.log(`THIS ↓ because NOT 5 turns YET`);
            changePlayer();
        };    
    });
};







            // if (turns >= 5){ 
            //             let checkWinner=(currentPlayer, a, b, c)=>{
            //                 console.log(`THIS HERE`);
            //                 console.log(`box${a}`.innerHTML===currentPlayer)

            //                 if(`box${a}`.innerHTML===currentPlayer && `box${a}`.innerHTML===`box${b}`.innerHTML && `box${b}`.innerHTML===`box${c}`.innerHTML){
                                
            //                     $('#currentPlayer').text(`Player ${currentPlayer} wins!!!`);
            //                     $(`#box${a}`).css("background-color", "rgba(255, 255, 255, 0.25)");
            //                     $(`#box${b}`).css("background-color", "rgba(255, 255, 255, 0.25)");
            //                     $(`#box${c}`).css("background-color", "rgba(255, 255, 255, 0.25)");
                                
            //                 };
            //             };
                            
            //                 checkWinner(...winEvents[0]);
            //                 checkWinner(currentPlayer, ...winEvents[1]);
            //                 checkWinner(currentPlayer, ...winEvents[2]);
            //                 checkWinner(currentPlayer, ...winEvents[3]);
            //                 checkWinner(currentPlayer, ...winEvents[4]);
            //                 checkWinner(currentPlayer, ...winEvents[5]);
            //                 checkWinner(currentPlayer, ...winEvents[6]);
            //                 checkWinner(currentPlayer, ...winEvents[7]);
            //         };


            //             let checkWinner=(currentPlayer, a, b, c)=>{
            //     console.log(`THIS HERE`);
            //     console.log(currentPlayer);
            //     console.log(a.innerHTML);


            //     if(a.innerHTML===currentPlayer && a.innerHTML===b.innerHTML && b.innerHTML===c.innerHTML){
                    
            //         $('#currentPlayer').text(`Player ${currentPlayer} wins!!!`);
            //         $(a).css("background-color", "rgba(255, 255, 255, 0.25)");
            //         $(b).css("background-color", "rgba(255, 255, 255, 0.25)");
            //         $(c).css("background-color", "rgba(255, 255, 255, 0.25)");
                    
            //     };
                
            // };