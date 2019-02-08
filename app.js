// Create a 'close' button and appent it to each list item 
var myNodeList, i, txt;

myNodeList = document.getElementsByTagName("li");

for (i = 0; i < myNodeList.length; i++){
	span = document.createElement('span');
	txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
close = document.getElementsByClassName("close");

function closee(){
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = 'none';
		}	
	}
}

closee();


// Create a new list item when clicking on the Add button

function newElement(){

	var input = document.getElementById("input").value;

	if (input === '' ){
		alert("dude, you must write something")
	} else {
		var html = '<li class="items">%task%<span class="close">\u00D7</span></li>';

		var newHtml = html.replace('%task%', input);

		document.querySelector('.myList').insertAdjacentHTML('beforeend', newHtml);

		document.getElementById("input").value = "";

		closee();
	}
}


document.addEventListener('keypress', function(e){

	if (e.keyCode === 13) {
		newElement();
	}
})



// Add "checked" symbol when clicking on a list item

var list = document.querySelector('ul');

list.addEventListener('click', function(e){
	if(e.target.tagName === 'LI'){
		e.target.classList.toggle('checked')
	}
}, false)


// init

function init(){
	for (i = 0; i < close.length; i++){
		var hop = close[i].parentElement;
		hop.style.display = 'none';
	}
};