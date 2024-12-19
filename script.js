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

//  DOM ELEMENTS
const teamListElm = document.getElementById("team-list");
const teamContainer = document.querySelector(".team-container");

let listItems = "";
for(let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  listItems += `
   <div class="team-card">
                <div class="card-image">
                        <img src="img/male1.png" alt="Mario Bianchi">
                    </div>
                    <div class="card-text">
                        <h3>Mario Bianchi</h3>
                        <p>Designer</p>
                    </div>
                </div>
  `; 
}

teamContainer.innerHTML = listItems;