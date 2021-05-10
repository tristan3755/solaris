let url = "https://api.le-systeme-solaire.net/rest/bodies";

function reqPrincipale() {
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      for (let i in data.bodies) {
        /*console.log(data.bodies[i].id)*/
        let maDiv = document.createElement("div");
        maDiv.classList = "divListe";
        let nomAstre = document.createElement("p");
        nomAstre.innerHTML = data.bodies[i].id;
        let btnPlanet = document.createElement("p");
        btnPlanet.classList = "btnPlanet";
        btnPlanet.innerHTML = "Afficher uniquement les planetes";

        btnPlanet.addEventListener("click", () => {
          triPLanete();
        });

        maDiv.appendChild(nomAstre);
        document.getElementById("apiGet").appendChild(btnPlanet);
        document.getElementById("apiGet").appendChild(maDiv);

        maDiv.addEventListener("click", () => {
          reqId();
        });

        function triPLanete() {
          document.getElementById("apiGet").innerHTML = "";

          for (let i in data.bodies) {
            if (data.bodies[i].isPlanet == true) {
              maDiv = document.createElement("div");
              maDiv.classList = "divListe";
              nomAstre = document.createElement("p");
              nomAstre.innerHTML = data.bodies[i].id;
              maDiv.appendChild(nomAstre);

              let btnRetour = document.createElement("p");
              btnRetour.classList = "btnRetour";
              btnRetour.innerHTML = "retour";
              console.log(btnRetour);
              btnRetour.addEventListener("click", () => {
                document.getElementById("apiGet").innerHTML = "";
                reqPrincipale();
              });

              maDiv.addEventListener("click", () => {
                reqIdPlanete();
              });

              function reqIdPlanete() {
                let url3 =
                  "https://api.le-systeme-solaire.net/rest/bodies/{" +
                  data.bodies[i].id +
                  "}";
                console.log(url3);
                document.getElementById("apiGet").innerHTML = "";
                fetch(url3)
                  .then((resp) => resp.json())
                  .then(function (data) {
                    console.log(data);
                    let monTitre = document.createElement("h1");
                    monTitre.innerHTML = data.name;
                    monTitre.style.color = "white";

                    let btnRetour = document.createElement("p");
                    btnRetour.classList = "btnRetour";
                    btnRetour.innerHTML = "retour";
                    console.log(btnRetour);
                    btnRetour.addEventListener("click", () => {
                      document.getElementById("apiGet").innerHTML = "";
                      triPLanete();
                    });

                    document.getElementById("apiGet").appendChild(btnRetour);
                    document.getElementById("apiGet").appendChild(monTitre);
                  });
              }

              document.getElementById("apiGet").appendChild(btnRetour);
              document.getElementById("apiGet").appendChild(maDiv);
            }
          }
        }

        function reqId() {
          let url2 =
            "https://api.le-systeme-solaire.net/rest/bodies/{" +
            data.bodies[i].id +
            "}";
          console.log(url2);
          document.getElementById("apiGet").innerHTML = "";
          fetch(url2)
            .then((resp) => resp.json())
            .then(function (data) {
              console.log(data);
              let monTitre = document.createElement("h1");
              monTitre.innerHTML = data.name;
              monTitre.style.color = "white";

              let btnRetour = document.createElement("p");
              btnRetour.classList = "btnRetour";
              btnRetour.innerHTML = "retour";
              console.log(btnRetour);
              btnRetour.addEventListener("click", () => {
                document.getElementById("apiGet").innerHTML = "";
                reqPrincipale();
              });

              document.getElementById("apiGet").appendChild(btnRetour);
              document.getElementById("apiGet").appendChild(monTitre);
            });
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

document.querySelector(".bouton").addEventListener("click", () => {
  let menu = document.querySelector(".menu");
  menu.style.width = "100%";
  menu.style.zIndex = "1";
  menu.style.overflowY = "scroll";
  reqPrincipale();
});

document.querySelector(".boutonClose").addEventListener("click", () => {
  let menu = document.querySelector(".menu");
  menu.style.width = "0%";
  menu.style.zIndex = "-1";
  document.getElementById("apiGet").innerHTML = "";
});
