
let charName = document.getElementById("Name")
let charHeight = document.getElementById("Attribute1");
let charMass = document.getElementById("Attribute2");
let charHColor = document.getElementById("Attribute3");
let charSColor = document.getElementById("Attribute4");
let charHome = document.getElementById("Home-Planet");

let button = document.getElementById("submit");

let randomNum;


button.addEventListener("click", searchForChar);

function generateRandomNum() {
    randomNum = Math.floor(Math.random() * 51) + 1;
}

function searchForChar() {
    generateRandomNum();
    changeCharInfo();
}


const changeCharInfo = async function () {
    let search = "https://swapi.co/api/people/"+randomNum+"/";
    const searchResult = await fetch(search).then(resp => resp.json());
    const searchPlanet = await fetch(searchResult.homeworld).then(planet => planet.json())
    charName.innerText = searchResult.name;
    charHeight.innerText = searchResult.height + " cm";
    charMass.innerText = searchResult.mass + " kg";
    charHColor.innerText = searchResult.hair_color;
    charSColor.innerText = searchResult.skin_color;
    charHome.innerText = searchPlanet.name;
}


