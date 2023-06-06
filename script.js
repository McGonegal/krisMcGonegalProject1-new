const displayButton = document.getElementById('display');

const hidden = document.getElementById('hiddenMessage');

displayButton.addEventListener('click', showFunction);

function showFunction (){
    if (hidden.className = ".hidden"){
        hidden.className = ".show";
    }
}

const button = document.getElementById('popupButton');

button.addEventListener('click', displayFunction);

function displayFunction(){
    alert("More content coming soon!")
}

