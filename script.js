//your code here
//your code here
const name = document.querySelector("#name span")
const image = document.querySelector("#image span")
const extra = document.querySelector("section span") 
const ageBtn = document.getElementById("age")
const emailBtn = document.getElementById("email")
const phoneBtn = document.getElementById("phone")
const userBtn = document.getElementById("getUser")

const url = 'https://randomuser.me/api/'

const fetchData = async () =>{
	const response = await fetch(url);
	const data = await response.json();
	name.textContent = data.results[0].name.first + " " + data.results[0].name.last;
	image.innerHTML = `<img src= '${data.results[0].picture.large}'>`

	ageBtn.addEventListener("click", () =>{
		extra.textContent = `Age: ${data.results[0].dob.age}`
	}) 
	emailBtn.addEventListener("click", () =>{
		extra.textContent = `Email: ${data.results[0].email}`
	}) 
	phoneBtn.addEventListener("click", () =>{
		extra.textContent = `Phone: ${data.results[0].phone}`
	}) 
} 
fetchData();

userBtn.addEventListener("click", ()=>{
	extra.innerHTML = '';
	fetchData();
})
