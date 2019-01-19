function main(size){
	for (x=0; x<size; x++) {
			for(y=0; y<size; y++) {
			//	addIndent(x,y,size);
				if(firstOrLast(x,size) || firstOrLast(y,size)) {
					
					
					document.body.innerHTML += "X";
					//console.log("*");
				}else {
					printX(x,y,size-1);
				}
			}
			document.body.innerHTML += "<br>";
			//console.log("\n");
		}
}

	function firstOrLast(step, size) {
		
		if (step==0 || step==size-1) {
			return true;
		}else {
			return false;
		}		
	}
	
	
	function printX(x, y, size) {
	
		if(y==x || y==size-x ) {
			document.body.innerHTML += "X";
			//console.log("*");
		} else {
			document.body.innerHTML += "&nbsp;&nbsp;&nbsp;";
			//console.log(" ");
		}
		
	}

	function addIndent(x,y, size){
		if(x === 0 && y === 0){
			document.body.innerHTML += "&nbsp;";
		}

		if(x === size-1 && y === 0){
			document.body.innerHTML += "&nbsp;";
		}
	}