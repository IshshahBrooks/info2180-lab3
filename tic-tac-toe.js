onload = function() {
  let chess = document.getElementsById("board").children.length;
  let i=0;
  while ( i <= chess){
    document.getElementById('board').getElementsByTagName("div")[i].className+='square';
    i++;
    }
  }


