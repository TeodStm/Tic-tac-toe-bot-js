function Game() {
  let player = "O"; //X is computer and O is human
  let count = 0;
  let game_grid = [[null, null, null], [null, null, null], [null, null, null]];
  let remaining_cells = [true, true, true, true, true, true, true, true, true];
  let first = "C"; //C for Computer and H for human
  let new_game_btn = true;

  this.who_is_playing = function() {
    if (player === "X") {
      player = "O";
      return "X";
    } else if (player === "O") {
      player = "X";
      return "O";
    }
  };

  this.end_of_game = function() {
    if (count > 3) {
      //an exoun pai3ei ligotero apo 3 fores kai oi duo paixtes den xreiazetai na ginei elegxos
      for (i = 0; i < 3; i++) {
        //check rows
        if (
          game_grid[i][0] == game_grid[i][1] &&
          game_grid[i][0] == game_grid[i][2] &&
          game_grid[i][0] != null
        ) {
          let winner;
          let button_num,
            id = "btn";
          //alert("Player " + winner + " won!!!");
          if (game_grid[i][0] == "X") winner = "COMPUTER WON !";
          else winner = "YOU WON !";
          document.getElementById("winner").innerHTML = winner;
          document.getElementById("winner").hidden = false;

          document.getElementById("reset-btn").style.animationName =
            "btn_movement";

          button_num = i * 3 + 1;

          document.getElementById(id + button_num.toString()).style.fontSize =
            "7em";
          document.getElementById(id + button_num.toString()).style.color =
            "red";

          button_num++;
          document.getElementById(id + button_num.toString()).style.fontSize =
            "7em";
          document.getElementById(id + button_num.toString()).style.color =
            "red";

          button_num++;
          document.getElementById(id + button_num.toString()).style.fontSize =
            "7em";
          document.getElementById(id + button_num.toString()).style.color =
            "red";
          //this.new_game();
          disable_buttons();
          document.getElementById("rst-btn").hidden = false;
          document.getElementById("rst-btn").innerHTML = "New Game";
          return true;
        }
      }
      for (i = 0; i < 3; i++) {
        //check columns
        if (
          game_grid[0][i] == game_grid[1][i] &&
          game_grid[0][i] == game_grid[2][i] &&
          game_grid[0][i] != null
        ) {
          let winner,
            button_num,
            id = "btn";
          //alert("Player " + winner + " won!!!");
          if (game_grid[0][i] == "X") winner = "COMPUTER WON !";
          else winner = "YOU WON !";
          document.getElementById("winner").innerHTML = winner;
          document.getElementById("winner").hidden = false;

          document.getElementById("reset-btn").style.animationName =
            "btn_movement";

          button_num = j + 1;
          document.getElementById(id + button_num.toString()).style.fontSize =
            "7em";
          document.getElementById(id + button_num.toString()).style.color =
            "red";

          button_num += 3;
          document.getElementById(id + button_num.toString()).style.fontSize =
            "7em";
          document.getElementById(id + button_num.toString()).style.color =
            "red";

          button_num += 3;
          document.getElementById(id + button_num.toString()).style.fontSize =
            "7em";
          document.getElementById(id + button_num.toString()).style.color =
            "red";

          //this.new_game();
          disable_buttons();
          document.getElementById("rst-btn").hidden = false;
          document.getElementById("rst-btn").innerHTML = "New Game";
          return true;
        }
      }
      //diagonals
      if (
        game_grid[0][0] == game_grid[1][1] &&
        game_grid[0][0] == game_grid[2][2] &&
        game_grid[0][0] != null
      ) {
        let winner,
          button_num,
          id = "btn";
        //alert("Player " + winner + " won!!!");
        if (game_grid[0][0] == "X") winner = "COMPUTER WON !";
        else winner = "YOU WON !";
        document.getElementById("winner").innerHTML = winner;
        document.getElementById("winner").hidden = false;

        document.getElementById("reset-btn").style.animationName =
          "btn_movement";

        button_num = 1;
        document.getElementById(id + button_num.toString()).style.fontSize =
          "7em";
        document.getElementById(id + button_num.toString()).style.color = "red";

        button_num = 5;
        document.getElementById(id + button_num.toString()).style.fontSize =
          "7em";
        document.getElementById(id + button_num.toString()).style.color = "red";

        button_num = 9;
        document.getElementById(id + button_num.toString()).style.fontSize =
          "7em";
        document.getElementById(id + button_num.toString()).style.color = "red";

        //this.new_game();
        disable_buttons();
        document.getElementById("rst-btn").hidden = false;
        document.getElementById("rst-btn").innerHTML = "New Game";
        return true;
      }

      if (
        game_grid[0][2] == game_grid[1][1] &&
        game_grid[0][2] == game_grid[2][0] &&
        game_grid[0][2] != null
      ) {
        let winner,
          button_num,
          id = "btn";
        //alert("Player " + winner + " won!!!");
        if (game_grid[0][2] == "X") winner = "COMPUTER WON !";
        else winner = "YOU WON !";

        document.getElementById("winner").innerHTML = winner;
        document.getElementById("winner").hidden = false;

        document.getElementById("reset-btn").style.animationName =
          "btn_movement";

        button_num = 3;
        document.getElementById(id + button_num.toString()).style.fontSize =
          "7em";
        document.getElementById(id + button_num.toString()).style.color = "red";

        button_num = 5;
        document.getElementById(id + button_num.toString()).style.fontSize =
          "7em";
        document.getElementById(id + button_num.toString()).style.color = "red";

        button_num = 7;
        document.getElementById(id + button_num.toString()).style.fontSize =
          "7em";
        document.getElementById(id + button_num.toString()).style.color = "red";
        //this.new_game();
        disable_buttons();
        document.getElementById("rst-btn").hidden = false;
        document.getElementById("rst-btn").innerHTML = "New Game";
        return true;
      }
    }

    if (count === 9) {
      //alert("Its a draw.");
      document.getElementById("winner").innerHTML = "IT'S A DRAW !";
      document.getElementById("winner").hidden = false;

      document.getElementById("reset-btn").style.animationName = "btn_movement";
      disable_buttons();
      document.getElementById("rst-btn").hidden = false;
      document.getElementById("rst-btn").innerHTML = "New Game";
      //this.new_game();
      return true;
    }
    return false;
  };

  this.play = function(btn_id) {
    //method for player's move
    //computer will be X
    //human  will be O
    let player_symbol = this.who_is_playing();
    let symbol_color;
    if (player_symbol === "X") {
      player = "O";
      symbol_color = "blue";
    } else {
      player = "X";
      symbol_color = "white";
    }

    count++;
    document.getElementById(btn_id).innerText = player_symbol;
    document.getElementById(btn_id).style.color = symbol_color;
    document.getElementById(btn_id).disabled = true;

    if (new_game_btn === true) {
      document.getElementById("rst-btn").hidden = false;
      document.getElementById("rst-btn").innerHTML = "New Game";
      new_game_btn = false;
    }

    this.update_grid(btn_id, player_symbol);

    if (player_symbol === "O") player_symbol = "X";
    else player_symbol = "O";
    //document.getElementById("player_sym").innerHTML = "Player " + player_symbol;

    if (this.end_of_game() == false) {
      //computer will play
      this.computer_play();
    }
  };

  this.computer_play = function() {
    let minimax_index;
    let btn_id = "btn";
    let copy_grid = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];

    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        copy_grid[i][j] = game_grid[i][j];
      }
    }
    minimax_index = find_best_move(copy_grid, "X");

    btn_id += (minimax_index + 1).toString();
    let player_symbol = this.who_is_playing();
    let symbol_color;
    if (player_symbol === "X") {
      player = "O";
      symbol_color = "blue";
    } else {
      player = "X";
      symbol_color = "white";
    }

    count++;
    document.getElementById(btn_id).innerText = player_symbol;
    document.getElementById(btn_id).style.color = symbol_color;
    document.getElementById(btn_id).disabled = true;
    this.update_grid(btn_id, player_symbol);

    if (player_symbol === "O") player_symbol = "X";
    else player_symbol = "O";
    //document.getElementById("player_sym").innerHTML = "Player " + player_symbol;

    this.end_of_game();
  };

  this.show_start_btn = function() {
    let boxes = document.getElementById("game_grid").children;
    let i;

    document.getElementById("rst-btn").hidden = false;
    document.getElementById("rst-btn").innerHTML = "Start Game";

    for (i = 0; i < boxes.length; i++) {
      document.getElementById(boxes[i].id).disabled = true;
    }
    player = "X";
  };

  this.start_game = function() {
    if (count === 0) {
      if (document.getElementById("computer_first").checked == true) {
        let boxes, i;
        document.getElementById("rst-btn").innerText = "New Game";
        document.getElementById("rst-btn").hidden = false;
        this.computer_play();

        boxes = document.getElementById("game_grid").children;
        for (i = 0; i < boxes.length; i++) {
          document.getElementById(boxes[i].id).disabled = false;
        }
      }
    } else {
      this.new_game();
    }
  };

  this.new_game = function() {
    player = "O";
    count = 0;
    //clear grid
    let boxes = document.getElementById("game_grid").children;
    let i;
    for (i = 0; i < boxes.length; i++) {
      document.getElementById(boxes[i].id).innerText = "";
      document.getElementById(boxes[i].id).style.color = "blue";
      document.getElementById(boxes[i].id).style.fontSize = "5em";
      document.getElementById(boxes[i].id).disabled = false;
    }
    //document.getElementById("player_sym").innerHTML = "Player O";
    document.getElementById("winner").innerHTML = "";
    document.getElementById("winner").hidden = true;
    document.getElementById("reset-btn").style.animationName = "btn_static";

    //for new game button animation
    //document.getElementById("reset-btn").style.animationName = "btn_movement";

    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        game_grid[i][j] = null;
      }
      document.getElementById("human_first").checked = true;
      document.getElementById("computer_first").checked = false;
      document.getElementById("rst-btn").hidden = true;
    }

    for (i = 0; i < 9; i++) {
      remaining_cells[i] = true;
    }
    player = "O";
    new_game_btn = true;
  };

  this.update_grid = function(btn_id, player_sy) {
    let idx_x, idx_y, rem_cells_idx;
    switch (btn_id) {
      case "btn1":
        idx_x = 0;
        idx_y = 0;
        rem_cells_idx = 0;
        break;
      case "btn2":
        idx_x = 0;
        idx_y = 1;
        rem_cells_idx = 1;
        break;
      case "btn3":
        idx_x = 0;
        idx_y = 2;
        rem_cells_idx = 2;
        break;
      case "btn4":
        idx_x = 1;
        idx_y = 0;
        rem_cells_idx = 3;
        break;
      case "btn5":
        idx_x = 1;
        idx_y = 1;
        rem_cells_idx = 4;
        break;
      case "btn6":
        idx_x = 1;
        idx_y = 2;
        rem_cells_idx = 5;
        break;
      case "btn7":
        idx_x = 2;
        idx_y = 0;
        rem_cells_idx = 6;
        break;
      case "btn8":
        idx_x = 2;
        idx_y = 1;
        rem_cells_idx = 7;
        break;
      case "btn9":
        idx_x = 2;
        idx_y = 2;
        rem_cells_idx = 8;
    }
    game_grid[idx_x][idx_y] = player_sy;
    remaining_cells[rem_cells_idx] = false;
  };
}

function find_best_move(state, computer_symbol) {
  let max = -10,
    i,
    j,
    idx_x,
    idx_y;
  let best_choice = [],
    value;
  let succ;

  succ = generate_successors(state, computer_symbol);
  best_choice = [[null, null, null], [null, null, null], [null, null, null]];

  for (i = 0; i < succ.length; i++) {
    value = minimax(succ[i], "O");
    if (value > max) {
      max = value;
      for (idx_x = 0; idx_x < 3; idx_x++) {
        //copy succ to best choice
        for (idx_y = 0; idx_y < 3; idx_y++) {
          best_choice[idx_x][idx_y] = succ[i][idx_x][idx_y];
        }
      }
    }
  }
  return convert_to_cell_idx(state, best_choice);
}

function minimax(state, player) {
  if (win(state, player)) {
    if (player == "X") return 5;
    else return -5;
  } else if (lose(state, player)) {
    if (player == "X") return -5;
    else return 5;
  } else if (game_over_with_draw(state)) {
    return 0;
  } else {
    let succ = [],
      minimax_val,
      i;
    succ = generate_successors(state, player);
    if (player == "X") {
      //computer with 'X'
      let max = -10;
      for (i = 0; i < succ.length; i++) {
        minimax_val = minimax(succ[i], "O");
        if (minimax_val > max) {
          max = minimax_val;
        }
      }
      return max;
    } else {
      //human  'O'
      let min = 10;

      for (i = 0; i < succ.length; i++) {
        minimax_val = minimax(succ[i], "X");
        if (minimax_val < min) {
          min = minimax_val;
        }
      }
      return min;
    }
  }
}

function generate_successors(state, player) {
  let i,
    j,
    empty_cells = 0,
    succ = [],
    idx = 0,
    n;

  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (state[i][j] == null) {
        empty_cells++;
      }
    }
  }
  for (i = 0; i < empty_cells; i++)
    succ[i] = [[null, null, null], [null, null, null], [null, null, null]];

  for (n = 0; n < empty_cells; n++) {
    for (i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        succ[n][i][j] = state[i][j];
      }
    }
  }

  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (state[i][j] == null) {
        succ[idx][i][j] = player;
        idx++;
      }
    }
  }

  return succ;
}

function convert_to_cell_idx(state, next_state) {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (state[i][j] == null && next_state[i][j] != null) {
        return i * 3 + j;
      }
    }
  }
}

/* *************** */
function win(state, player) {
  let i;

  for (i = 0; i < 3; i++) {
    //rows
    if (
      state[i][0] == state[i][1] &&
      state[i][0] == state[i][2] &&
      state[i][0] == player
    ) {
      return true;
    }
  }

  for (i = 0; i < 3; i++) {
    //columns
    if (
      state[0][i] == state[1][i] &&
      state[0][i] == state[2][i] &&
      state[0][i] == player
    ) {
      return true;
    }
  }

  //diagonals
  if (
    state[0][0] == state[1][1] &&
    state[0][0] == state[2][2] &&
    state[0][0] == player
  )
    return true;
  if (
    state[0][2] == state[1][1] &&
    state[0][2] == state[2][0] &&
    state[0][2] == player
  )
    return true;
  return false;
}

function lose(state, player) {
  let winning_player;
  if (player == "X") winning_player = "O";
  else winning_player = "X";

  return win(state, winning_player);
}

function game_over_with_draw(state) {
  let i, j;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (state[i][j] == null) return false;
    }
  }
  return true;
}

function disable_buttons() {
  let buttons = document.getElementById("game_grid").children,
    i;

  for (i = 0; i < buttons.length; i++) {
    document.getElementById(buttons[i].id).disabled = true;
  }
}
