const colorBoxes = document.querySelectorAll(".palette")
console.log(colorBoxes);

const hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4','5', '6', '7','8', '9']

function generateColor() {
    let hexCode = "#"
    for(let i=0; i<6; i++) {
        hexCode +=hex[Math.floor(Math.random() * hex.length)]
    }
    console.log(hexCode)

    return hexCode;
}

function changeColor() {
    colorBoxes.forEach(colorBox => {
        const color= generateColor()

        colorBox.style.backgroundColor = color
        // colorBox.textContent=color;

        let nMatch = ntc.name(color);
        nName = nMatch[1]; 

        const colorBoxInnerHTML = `<div><p>${color.toUpperCase()}</p><p>${nName}</p></div>`;
        colorBox.innerHTML = colorBoxInnerHTML;

    })
}
changeColor()


colorBoxes.forEach(colorBox =>{
    colorBox.addEventListener('click', changeColor)
})

let colorChangeInterval;

const proBtn = document.querySelector(".pro")

proBtn.addEventListener("mouseover", ()=> {
    colorChangeInterval = setInterval(() => {proBtn.style.color = generateColor()}, 2)
})

proBtn.addEventListener("mouseleave", ()=> {
    proBtn.style.color = "red";
    clearInterval(colorChangeInterval)
})
document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
      changeColor(); 
    }
  });

  const usersDropdown = document.querySelector(".users-dropdown")
  const usersIcon = document.querySelector(".fa-users")
  usersDropdown.style.display="none"
  function showDropdown() {
    console.log("hello"); 
    
  }

  usersIcon.addEventListener('click', ()=>usersDropdown.style.display="block")
  usersIcon.addEventListener('mouseleave', ()=>usersDropdown.style.display="none")