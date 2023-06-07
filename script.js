// example CSS h1 {color: red;}
//.paragraph {...} class
//#paragraph {...} id

const h1 = document.querySelector("h1")
const p = document.querySelectorAll("p")
const pclass = document.getElementsByClassName("pclass")
const pid = document.getElementById("pid")
const input = document.querySelector("input")
// if you use query selector you must use the selector´s types 
// class = .  id = # or name of the tag
// when you use get element by calss name or id you just write the name of class or id

console.log(input.value) 

console.log({
    h1, 
    p, 
    pclass, 
    pid, 
    input
});

h1.innerHTML = "it kicked the bucket <br> son of a bitch"; //get all element in HTML text
//h1.innerText = "it kicked the bucket <br> son of a bitch"; //get all in basic text
//console.log(h1.getAttribute("class")); // here it gets in all attribute of tag h1
//h1.setAttribute("class", "idiom"); // here we can change the attributes from h1 tag

h1.classList.add("idiom"); // it can add a new class at specific tag like h1 
h1.classList.remove("language"); // here´s oppisite case, delete some classes

//input.value = "120893"; // with this property we can change the value of own input 

const img = document.createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
console.log(img)
pid.innerHTML = "";
pid.append(img);
// here first off , we created a new element "img" later we changed its attributes  and later we add it whit "append" to a place already created in our HTML code


//pid.innerHTML = "";
//pid.append(img);
// here we remove the text inside pid id selector and just dropped  the image out.



