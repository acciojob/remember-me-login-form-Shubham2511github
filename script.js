var first = document.getElementById("submit");
var second = document.getElementById("existing");
first.addEventListener('click', submitForm);
second.addEventListener('click', existingUser);
function submitForm(event){
	event.preventDefault();
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var rememberMe = document.getElementById('checkbox').checked;
	if(rememberMe){
		localStorage.setItem('username', username);
		localStorage.setItem('password', password);
	}else{
		localStorage.removeItem('username');
		localStorage.removeItem('password');
	}
	if(username){
		alert('Logged in as '+ username);
	}else{
		alert('Please enter required filds');
	}
	
}
function existingUser(){
	var userName = localStorage.getItem('username');
	if(userName){
		alert('Logged in as '+ userName);
	}else{
		alert('some error occured to access data');
	}
}