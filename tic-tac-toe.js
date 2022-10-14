onload = function() {
  let game_x = 'X';
  let game_o = 'O';
  var track_state = [];
  var current;
  let game_square = document.getElementsById("board").getElementsByTagName("div");
  let game_stat = document.getElementsById("status");

  for ( i = 0; i < game_square.lenght; i++ ){
    game_square[i].className+=('square');
    game_square[i].addEventListener("click", playclick )
    
      var game_player;
      function game_player(){
      track_state.push(game_x);
      console.log(track_state);
      console.log('Clicked')
          if (game_player == game_x){
            current = game_o;
            document.getElementById('board').getElementsByTagName('div')[i].className+=('O');
          }
          else{
              current = game_x;
              document.getElementById('board').getElementsByTagName('div')[i].className+=('X');
          }

          track_state.push(gamesquares[i].innerHTML = current);
          console.log(track_state)
      
        game_square[i].addEventListener("mouseover", event => {
            game_square[i].className+=(' hover');
        });
        game_square[i].addEventListener("mouseleave", event => {
            game_square[i].classList.remove('hover');
       });
    }
    }
      
    }

