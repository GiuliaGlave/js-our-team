/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: name, role e pic.
    MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
    MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di name, role e la stringa della pic
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe */

const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        pic: "../img/wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        pic: "../img/angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        pic: "../img/walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Angela Lopez",
        pic: "../img/angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        pic: "../img/scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        pic: "../img/barbara-ramos-graphic-designer.jpg",
    },
];

for (const property of team) {
    console.log(property.name);
    console.log(property.role);
    console.log(property.pic);
}

for (const member of team) {
   
    document.getElementById("card-container").innerHTML += `
    
    <div class="col-4">

            <div class="card" style="width: 100%;">
              
              <img src="#" class="card-img-top" alt="#">
              <div class="card-body">
                <h5 class="member-name">${member.name}</h5>
                <p class="member-role">${member.role}</p>
                <p class="member-pic">${member.pic}</p>
              </div>

            </div>

          </div>  
    `;
}