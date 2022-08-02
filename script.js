// Player 1 is X
// Player 2 is O
//take turns, clicking on the grid
let players =['Player-X', 'Player-O'];
let turns = 0;
let i= 0;
let currentPlayer = players[i];

$('#currentPlayer').text(currentPlayer);

    let player=(symbol)=>{
        $(function(){
            $('.box').one('click', function(){
                var boxId= $(this).attr('box-Id');
                $('#'+boxId).addClass(symbol);               
                  
                if(currentPlayer==='Player-X'){
                    currentPlayer='Player-O';
                  } else{
                    currentPlayer='Player-X';
                  };
            });
        });
    };
    player('cross');
    



    // let playerX=()=>{
    //     $(function(){
    //         $('.box').one('click', function(){
    //             var boxId= $(this).attr('box-Id');
    //             $('#'+boxId).addClass("cross");               
    //               playerO();
    //         });
    //     });
    // }       
    
    // let playerO=()=>{
    //     $(function(){
    //         $('.box').one('click', function(){
    //             var boxId= $(this).attr('box-Id');
    //             $('#'+boxId).addClass("circle");
    //            playerX();
    //         });
    //     });  
    // }  

// console.log(currentPlayer);
//     if(turns === 8){
//     currentPlayer='Game Over';
//     } else if (currentPlayer === 'Player X'){
//         i=0;
//         console.log(currentPlayer);
//         let playerX=()=>{
//         $(function(){
//             $('.box').one('click', function(){
//                 var boxId= $(this).attr('box-Id');
//                 $('#'+boxId).addClass("cross");               
                  
//             });
//         });
//     } 
//         playerX();
//         console.log(i);
//         turns++;
//         console.log(turns);
//         currentPlayer = players[1];
//         console.log(currentPlayer);
//         console.log(`player O's turn`);
//         console.log(currentPlayer);

//     }else{
//         i=1;
//         turns++;
//         console.log(turns);
//         let playerO=()=>{
//             $(function(){
//                 $('.box').one('click', function(){
//                     var boxId= $(this).attr('box-Id');
//                     $('#'+boxId).addClass("circle");
                   
//                 });
//             });  
//         } 
//         playerO();
//         currentPlayer = players[0];
//         console.log(`player X's turn`);
//     };

