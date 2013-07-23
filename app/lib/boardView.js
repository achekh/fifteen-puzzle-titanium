exports.createView = function(board, onclick) {
	var boardSize = board.length; 
	var pSize = Math.min(Ti.Platform.displayCaps.platformWidth, 
	    Ti.Platform.displayCaps.platformHeight);
	var spacer = 10;
	var cellSize = Math.floor((pSize - spacer * (boardSize + 1))/boardSize);
	 
	var tableData = [];
	 
	var cellIndex = 0;
	 
	for (var r=0; r<boardSize; r++){
	    var thisRow = Ti.UI.createTableViewRow({
	        className: "grid",
	        layout: "horizontal",
	        height: cellSize+spacer,
	        selectedBackgroundColor:"red"
	    });
	    for (var c=0; c<boardSize; c++){
	    	var cell = board[r][c];
	    
	        var thisView = Ti.UI.createView({
	            cellData:{row:r, column:c},
	            backgroundColor: getColor(cell),
	            left: spacer,
	            height: cellSize,
	            width: cellSize
	        });
	 
	        var thisLabel = Ti.UI.createLabel({
	            color:"white",
	            font:{fontSize:48,fontWeight:'bold'},
	            text:cell.content,
	            touchEnabled:false
	        });
	        thisView.add(thisLabel);
	        thisRow.add(thisView);
	        cellIndex++;
	    }
	    tableData.push(thisRow);
	}
	
	var tableview = Ti.UI.createTableView({
	    data:tableData,
	    top: spacer
	});
	
	tableview.addEventListener("click", onclick);
	
	return tableview;
	
	function getColor(c) {
		var colorSet = [
		                "#D44646",
		                "#46D463",
		                "#46D4BE",
		                "#C2D446",
		                "#D446D5",
		                "#4575D5",
		                "#E39127",
		                "#879181",
		                "#E291D4"
		              ];
		return c.isTile 
			? colorSet[c.content % colorSet.length]
			: 'white';
	};
};