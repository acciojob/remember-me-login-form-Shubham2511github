//your JS code here. If required.
function handelSubmit(event) {
	event.preventDefault();

	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var rememberme = document.getElementById("checkbox").checked;

	if(rememberme){
		localStorage.setItem('username',username);
		localStorage.setItem('username',password);
	}else{
		localStorage.removeItem('username');
		localStorage.removeItem('password');
	}
	alert("Logged in as "+username);
}
function handleExistingUserLogin() {
	var username = localStorage.getItem('username');
	if(username){
		alert("Logged in as "+ username);
	}
	
}