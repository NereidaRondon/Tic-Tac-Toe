// Player 1 is X
// Player 2 is O
//take turns, clicking on the grid
let X ='Player-X';
let O = 'Player-O';
let turns = 0;
let div = $('.box');
let currentPlayer = 'Player-X';
let display = $('#currentPlayer').text(currentPlayer);

        let click=(player)=>{
            console.log(player);
            $(function(){
                $('.box').one('click', function(event){
            var boxId= $(this).attr('box-Id');
            $('#'+boxId).addClass(player); 
            console.log(`${player} clicked`);
            turns++;
            playerNow();             
            // $(this).off( event ); 
            
            
        });
        
    });
    
    
};

click(currentPlayer);



let playerNow =()=>{

    if(turns === 8){
       alert(`Game Over`);
        document.addEventListener("click", handler, true);
        function handler(div) {
            div.stopPropagation();
            div.preventDefault();
        }
    }
    else if(currentPlayer==='Player-X'){
        currentPlayer = 'Player-O';
        console.log(`changed to player-O = ${currentPlayer}`);
        click(currentPlayer);
        console.log(turns);
    } else {
        currentPlayer==='Player-X';
        console.log(`changed to player-X = ${currentPlayer}`);
        click(currentPlayer);
        console.log(turns);
    };
};
        
        

// div.addEventListener('click', () => {
//     if(currentPlayer==='Player-X'){
//         currentPlayer = 'Player-O';
//         console.log(`changed to player-O`);
//     } else {
//         currentPlayer==='Player-X';
//         console.log(`changed to player-X`);
//     }
// });

// $(document).ready(function(){
//   $("div").click(function(){
//     if(currentPlayer==='Player-X'){
//         currentPlayer = 'Player-O';
//         console.log(`changed to player-O`);
//     } else {
//         currentPlayer==='Player-X';
//         console.log(`changed to player-X`);
//     }
//   });
// });


