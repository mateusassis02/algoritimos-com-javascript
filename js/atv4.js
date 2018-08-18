function touch(){
  var userName = prompt("Ola! qual seu nome?");

  if(userName){
    document.getElementById('rockimg').src="img/rock_happy.png";
      alert("prazer "+userName);
  }
}
