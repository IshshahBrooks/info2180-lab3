onload = function() {
  let game_x = 'X';
  let game_o = 'O';
  var track_state = [];

  let game_square = document.getElementsById("board").getElementsByTagName("div");
  let game_stat = document.getElementsById("status");

  for ( i = 0; i < game_square.lenght; i++ ){
    game_square[i].className+=('square');
    game_square[i].addEventListener("click", playclick, { once;true});
    }
  var game_player;
  function playclick(){
    track_state.push(game_x);
    console.log(track_state);
    console.log('Clicked')
    if (game_player == game_x){
        game_player = game_o;
        document.getElementById('board').getElementsByTagName('div')[i].className+=('X');
    }
    else{
      game_player= game_x;
      document.getElementById('board').getElementsByTagName('div')[i].className+=('O');
    }

    track_state.push(gamesquares[i].innerHTML = game_player);
      console.log(track_state)
    }
   
  }

