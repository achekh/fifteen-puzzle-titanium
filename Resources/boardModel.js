exports.createModel = function(boardSize) {
    var tiles = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null ];
    var board = [];
    for (var r = 0; boardSize > r; r++) {
        var row = [];
        for (var c = 0; boardSize > c; c++) {
            var val = tiles.splice(Math.floor(Math.random() * tiles.length), 1)[0];
            var cell = {
                isTile: null != val,
                content: val
            };
            row.push(cell);
            cell.isTile || (board.space = {
                row: r,
                column: c
            });
        }
        board.push(row);
    }
    return board;
};