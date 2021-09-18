var ul = document.getElementById("myList");
	var li;
	var itemId;
	var item;
	addTask	= function (){
		
		if(document.getElementById("task").value != ""){

			item   = document.getElementById("task");

			itemId = ul.childElementCount;
			
			li 	   = createItemEl(item.value,itemId);
			li.appendChild(createRemoveTaskBtn(itemId));
			ul.appendChild(li);
			item.value = "";
			saveLocal()
		}
        
	}

	removeTask = function( itemId ){
		let confirmaExclusao = confirm("Deseja excluir?")
		if(confirm){

		for( i = 0 ; i < ul.children.length ; i++){

			if(ul.children[i].getAttribute("index") == itemId ){

				ul.children[i].remove();
				saveLocal()

			}
		}
	}
}	

	createItemEl = function(itemValue, itemId){

		let li = document.createElement("li");

		li.setAttribute("index", itemId);

		li.appendChild(document.createTextNode(itemValue));

		return li;
		
	}
	
	createRemoveTaskBtn = function(itemId){
		let btn =  document.createElement("button");
		btn.setAttribute("onclick", "removeTask("+itemId+")"); 
		btn.innerHTML ="X";
        btn.classList.add("buttonRemove")
		return btn;
		
		
		
	}
	const todoButton = document.querySelector(".button");
	todoButton.addEventListener("click",addTodo);

	function addTodo(event){
		event.preventDefault();
		const todoDiv = document.createElement("div")
		const completedButton = document.createElement('button');
		completedButton.innerHTML = '<li><input type="checkbox" class=.check></li>'
		completedButton.classList.add("complete-btn");
		todoDiv.appendChild(completedButton);
		todoList.appendChild(todoDiv);
	}
	function saveLocal(){
		var itens = [];
		let list = document.querySelectorAll("#myList li") 
		for(let index = 0;index < list.length;index++){ 
			itens.push(list[index].innerText)
		}
		localStorage.setItem("local",JSON.stringify(itens));
	}