function Controller() {
    function isValidMove(from, to) {
        return 1 == Math.abs(from.row - to.row) + Math.abs(from.column - to.column);
    }
    function checkIsFinished(board) {
        var boardSize = board.length;
        if (!(board.space.row == boardSize - 1 && board.space.column == boardSize - 1)) return false;
        for (var r = 0; boardSize > r; r++) {
            var row = board[r];
            for (var c = 0; boardSize > c; c++) {
                if (r == boardSize - 1 && c == boardSize - 1) return true;
                var cell = row[c];
                if (cell.content != r * boardSize + c + 1) return false;
            }
        }
        return false;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.game = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "game"
    });
    $.__views.game && $.addTopLevelView($.__views.game);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var boardView = require("boardView");
    var boardModel = require("boardModel");
    var boardSize = 4;
    var board = boardModel.createModel(boardSize);
    var isFinished = false;
    var makeMove = function(e) {
        var m = e.source.cellData;
        if (!m) return;
        var from = {
            row: m.row,
            column: m.column
        };
        if (isFinished || !isValidMove(from, board.space)) return;
        var cell = board[m.row][m.column];
        board[m.row][m.column] = board[board.space.row][board.space.column];
        board[board.space.row][board.space.column] = cell;
        board.space.row = m.row;
        board.space.column = m.column;
        isFinished = checkIsFinished(board);
        Ti.API.info("moved: " + e.moved + " finished: " + isFinished);
        setTimeout(updateView, 1);
    };
    var currentView = boardView.createView(board, makeMove);
    var updateView = function() {
        $.game.remove(currentView);
        currentView = boardView.createView(board, makeMove);
        $.game.add(currentView);
    };
    $.game.add(currentView);
    $.game.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;