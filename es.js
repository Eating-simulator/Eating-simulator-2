var yeet = "yeet"
var es = {
	opentab(tab){
		var content = document.querySelector("#"+tab).innerHTML;
		document.querySelector("#tab").innerHTML = content;
	},
	data:{
		money:0,
		calories:300
	}
}