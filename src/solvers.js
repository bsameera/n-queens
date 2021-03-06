/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  var matrix = [];
  for (var i = 0; i < n; i++) {
    var innerArr = Array(n).fill(0, 0);
    matrix.push(innerArr);
  }
  var board = new Board(matrix);

  //create a nested for loop,to loop through the matrix 
  for (var row = 0; row < n; row++) {
    board.togglePiece(row, row);
  }
  
  solution = board.rows();
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; 
  // create a board with the matrix
  var board = new Board({n});

  var recurse = function (rowIndex) {
    if (rowIndex + 1 === n) {
      solutionCount++;
      return;
    }
    for (var col = 0; col < n; col++) {
      board.togglePiece(rowIndex, col);
      if (!board.hasAnyRooksConflicts()) {
        recurse(rowIndex + 1);
      }
      board.togglePiece(rowIndex, col);
    }
  };
  recurse(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
