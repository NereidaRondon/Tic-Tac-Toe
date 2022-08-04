let x = 'x';
let o = 'o';
let turns = 0;

let currentPlayer = x;
console.log(currentPlayer);
let display =  $('#currentPlayer').text(`Player ${currentPlayer}`);

let winner = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

let box1 = $('#box1').attr("class");
let box2 = $('#box2').attr("class");
let box3 = $('#box3').attr("class");
let box4 = $('#box4').attr("class");
let box5 = $('#box5').attr("class");
let box6 = $('#box6').attr("class");
let box7 = $('#box7').attr("class");
let box8 = $('#box8').attr("class");
let box9 = $('#box9').attr("class");



let changePlayer=()=> {
    let display =  setTimeout(()=> $('#currentPlayer').text(`Player ${currentPlayer}`), 500)
    console.log(`Entered changePlayer Function`);
    if(turns === 9){
    
    document.addEventListener("click", handler, true);
        function handler(div) {
            div.stopPropagation();
            div.preventDefault();
            setTimeout(()=> $('#currentPlayer').text(`GAME OVER`), 1500);
        }        
    }
    else if(currentPlayer===x){
        currentPlayer = o;
        console.log(`changed to player-${currentPlayer}`);
       
        display;
       
    } else {
        currentPlayer=x;
        console.log(`changed to player-${currentPlayer}`);
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
    
        $(`#${id}`).text(currentPlayer);
        // $(`#${id}`).on('click', false); 
        // $(`#${id}`).click(false);

        console.log(`After click, ${currentPlayer} is the current player`);
        changePlayer();
    });
};


