let x = 'Player-X';
let o = 'Player-O';
let turns = 0;

let currentPlayer = x;
console.log(currentPlayer);
let display = $('#currentPlayer').text(currentPlayer);

let changePlayer=()=> {
    console.log(`Entered changePlayer Function`);
    if(turns === 9){
    
    document.addEventListener("click", handler, true);
    function handler(div) {
        div.stopPropagation();
        div.preventDefault();
        display= $('#currentPlayer').text(`GAME OVER`);
    }
    }
    else if(currentPlayer===x){
        currentPlayer = o;
        console.log(`changed to player-O = ${currentPlayer}`);
       
    } else {
        currentPlayer=x;
        console.log(`changed to player-X = ${currentPlayer}`);
    };

    console.log(`${currentPlayer} is the current player`);
};


let symbolOf=(currentPlayer)=>{
    turns++;
    console.log(turns);
    console.log(`BEFORE click, ${currentPlayer} is the current player`);
    console.log('user clicked: ', event.target);
    let id = event.target.getAttribute('id');
    
    $(document).ready(function(){
    
        $(`#${id}`).addClass(currentPlayer);
            
        // event.target.classList.add(currentPlayer);
        // document.getElementById(id).style.pointerEvents = 'none';
        $(`#${id}`).click(false);


        console.log(`After click, ${currentPlayer} is the current player`);
        changePlayer();
    });
};

