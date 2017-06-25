function stringPad(num, size) {
	var s = num+"";
    while (s.length < size) { 
    	s = "0" + s;
    }
    return s;
}

function removeValue(value, array) {
    var index = array.indexOf(value);
 
    if (index > -1) {
       array.splice(index, 1);
    }
 
}