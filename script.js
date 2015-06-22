function myAge(){
	//Set My Age
	this.setAge=function(age){
		this.age=age;
		localStorage.setItem("myage",JSON.stringify(this));
		document.getElementById("status").innerHTML="Age Saved";
	};
	//Get My Age
	this.getAge=function(){
		var myage=localStorage.getItem("myage");
		return JSON.parse(myage);
	}
}

function saveAge(){
	var ageObj=new myAge();
	var age=document.getElementById("age").value;
	ageObj.setAge(age);
	
}

function retrieveAge(){
	var myageObj=new myAge();
	var myage=myageObj.getAge();
	document.getElementById("showage").innerHTML="My age="+myage.age;
}