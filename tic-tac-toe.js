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

          track_state.push(game_square[i].innerHTML = current);
          console.log(track_state)
      
        game_square[i].addEventListener("mouseover", event => {
        game_square[i].className+=(' hover');
        });
        game_square[i].addEventListener("mouseleave", event => {
        game_square[i].classList.remove('hover');
       });
         
          check_Winner();
          function check_Winner(){
            let box0 = game_square[0].innerHTML;
            let box1 = game_square[1].innerHTML;
            let box2 = game_square[2].innerHTML;
            let box3 = game_square[3].innerHTML;
            let box4 = game_square[4].innerHTML;
            let box5 = game_square[5].innerHTML;
            let box6 = game_square[6].innerHTML;
            let box7 = game_square[7].innerHTML;
            let box8 = game_square[8].innerHTML;
            
            if ( box0 != "" && box0 == box1 && box0 == box2){
              game_stat.textContent= "Congratulations! " + track_state[track_state.length-1] +"is the Winner!" ;
              game_stat.className+="you-won";
            }
            if ( box3 == box4 && box3==box5 && box3!= ""){
              game_stat.textContent= "Congratulations! " + track_state[track_state.length-1] +"is the Winner!" ;
              game_stat.className+="you-won";
            }
            if ( box6 == box7 && box6==box8 && box6 != ""){
              game_stat.textContent= "Congratulations! " + track_state[track_state.length-1] +"is the Winner!" ;
              game_stat.className+="you-won";
            }
            if ( box0 == box4 && box0==box8 && box4 != ""){
              game_stat.textContent= "Congratulations! " + track_state[track_state.length-1] +"is the Winner!" ;
              game_stat.className+="you-won";
            }
            if ( box2 == box4 && box2==box6 && box2 != ""){
              game_stat.textContent= "Congratulations! " + track_state[track_state.length-1] +"is the Winner!" ;
              game_stat.className+="you-won";
            }
            if ( box0 == box3 && box0==box6 && box0 != ""){
              game_stat.textContent= "Congratulations! " + track_state[track_state.length-1] +"is the Winner!" ;
              game_stat.className+="you-won";
            }
            if ( box1 == box4 && box1==box7 && box7 != ""){
              game_stat.textContent= "Congratulations! " + track_state[track_state.length-1] +"is the Winner!" ;
              game_stat.className+="you-won";
            }
            if ( box2 == box5 && box2==box8 && box2 != ""){
              game_stat.textContent= "Congratulations! " + track_state[track_state.length-1] +"is the Winner!" ;
              game_stat.className+="you-won";
            }
          }
          
      
    }
    }
      
    }

