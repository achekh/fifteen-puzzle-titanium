function Controller() {
    function startGame() {
        var game = Alloy.createController("game").getView();
        game.open();
    }
    function showAbout() {
        alert("About");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        top: 50,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Пятнашки",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    $.__views.btnStart = Ti.UI.createButton({
        top: 200,
        width: 100,
        height: Ti.UI.SIZE,
        title: "Игра",
        id: "btnStart"
    });
    $.__views.index.add($.__views.btnStart);
    startGame ? $.__views.btnStart.addEventListener("click", startGame) : __defers["$.__views.btnStart!click!startGame"] = true;
    $.__views.btnAbout = Ti.UI.createButton({
        top: 400,
        width: 100,
        height: Ti.UI.SIZE,
        title: "About",
        id: "btnAbout"
    });
    $.__views.index.add($.__views.btnAbout);
    showAbout ? $.__views.btnAbout.addEventListener("click", showAbout) : __defers["$.__views.btnAbout!click!showAbout"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.btnStart!click!startGame"] && $.__views.btnStart.addEventListener("click", startGame);
    __defers["$.__views.btnAbout!click!showAbout"] && $.__views.btnAbout.addEventListener("click", showAbout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;