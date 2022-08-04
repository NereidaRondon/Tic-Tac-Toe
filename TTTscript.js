let x = 'Player-X';
let o = 'Player-O';
let turns = 0;

let currentPlayer = x;
console.log(currentPlayer);
let display =  $('#currentPlayer').text(currentPlayer);

let winner = [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6];




let changePlayer=()=> {
    let display =  setTimeout(()=> $('#currentPlayer').text(currentPlayer), 500)
    console.log(`Entered changePlayer Function`);
    if(turns === 9){
    
    document.addEventListener("click", handler, true);
    function handler(div) {
        div.stopPropagation();
        div.preventDefault();
        setTimeout(()=> $('#currentPlayer').text(`GAME OVER`), 2000);
    }
    }
    else if(currentPlayer===x){
        currentPlayer = o;
        console.log(`changed to player-O = ${currentPlayer}`);
       
        display;
       
    } else {
        currentPlayer=x;
        console.log(`changed to player-X = ${currentPlayer}`);
        display;
    };

    console.log(`${currentPlayer} is the current player`);
};


let symbolOf=(currentPlayer)=>{
    turns++;
    console.log(turns);
    console.log(`BEFORE click, ${currentPlayer} is the current player`);
    console.log('user clicked: ', event.target);
    let id = event.target.getAttribute('id');
    
    $(function(){
    
        $(`#${id}`).addClass(currentPlayer);
            
        $(`#${id}`).on('click', false);

        console.log(`After click, ${currentPlayer} is the current player`);
        changePlayer();
    });
};


