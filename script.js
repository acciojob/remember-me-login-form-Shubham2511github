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
		localStorage.removeItem('username',username);
		localStorage.removeItem('password', password);
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
var checkbox = document.getElementById('checkbox');
var savedUsername = localStorage.getItem('username');
var savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }