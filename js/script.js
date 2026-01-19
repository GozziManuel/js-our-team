const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];
const cardList = document.getElementById("cardlist");

for (const members of teamMembers) {
  const { name, role, email, img } = members;
  const cardHtml = `  <div class="carta col-lg-4 col-md-6 col-12 my-3 p-0 d-flex" id="user">
      <img src="${img}" alt="male1" />
      <div class="d-flex flex-column px-3 my-3 justify-content-center">
        <h2 class="fs-5 mb-2" style="color: white; font-weight: bold">
          ${name}
        </h2>
        <p class="mb-2" style="color: white">
          ${role}
        </p>
        <p class="mb-2" style="color: white">
          ${email}
        </p>
      </div>
    </div>`;
  cardList.innerHTML += cardHtml;
}
