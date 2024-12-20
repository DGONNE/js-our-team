//FUNCTIONS
function createCardMember(member) {
  const {name, role, img} = member;

  const card =  `
  <div class="team-card">
               <div class="card-image">
                       <img src="img/${img}" alt="${name}">
                   </div>
                   <div class="card-text">
                       <h3>${name}</h3>
                       <p>${role}</p>
                   </div>
               </div>
 `;

 return card;
}




// VARIABLES
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "female3.png"
  }
];

//  DOM ELEMENTS
const teamContainer = document.querySelector(".team-container");
const memberFormElm = document.getElementById("member-form");
const nameElm = document.getElementById("name");
const roleElm = document.getElementById("role");
const imgElm = document.getElementById("img");


// ON PAGE LOAD
let listItems = "";
for(let i = 0; i < teamMembers.length; i++) {
listItems += createCardMember(teamMembers[i]);
}

teamContainer.innerHTML = listItems;


// DOM EVENTS
memberFormElm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = nameElm.value;
  const role = roleElm.value;
  const img = imgElm.value;

  const newMember = {
    name,
    role,
    img
  };

  teamMembers.push(newMember);
  const card = createCardMember(newMember);

  teamContainer.innerHTML += card;

})