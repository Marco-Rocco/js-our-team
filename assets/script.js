const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


/*
<div class="card" style="width: 18rem;">
                
                <img id="profilep" src="img/female1.png" class="card-img-top" alt="pfp">
                <div class="card-body">

                    <p id="name">nonnt</p>
                    <p id="name">nonna</p>

</div>
*/

//colleghiamo il container
const container = document.querySelector('.container')
console.log(container)



selectElement(container, teamMembers)

//creiamo una funzione per automatizzare la creazione delle card
function selectElement (parent, members) {
console.log(members)

//creaiamo una variabile contenuto da riempire con il ciclo
let items =''


  for ( let i = 0; i < members.length; i++) {
    const currentElement = members[i];
    console.log(currentElement)

    items += createCard(currentElement)
  }

  // inseriamo il contenuto dentro l'html del contenitore
  parent.innerHTML= items
}

function createCard(currentElement){

  console.log(currentElement)

  return ` <div class="col">
                <div class="card" style="width: 18rem;">
                
                <img id="profilep" src= ${currentElement.img} class="card-img-top" alt="pfp">
                <div class="card-body">

                    <p id="name">${currentElement.name}</p>
                    <p id="name">${currentElement.role}</p>

                </div>
              </div>
              
            </div>`
}