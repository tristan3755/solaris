let url = "https://api.le-systeme-solaire.net/rest/bodies";

function reqPrincipale() {
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let recherche = document.createElement("input");
      recherche.type = "texte";
      recherche.placeholder = "Recherche";
      recherche.classList = "recherche";

      recherche.addEventListener("click", () => {
        recherche.style.width = "250px";
      });

      let btnRecherche = document.createElement("p");
      btnRecherche.classList = "btnRecherche";
      btnRecherche.innerHTML = "Rechercher";

      btnRecherche.addEventListener("click", () => {
        getValue();
      });

      document.getElementById("apiGet").appendChild(btnRecherche);

      let valeurInput;

      document.getElementById("apiGet").appendChild(recherche);

      let btnPlanet = document.createElement("p");
      btnPlanet.classList = "btnPlanet";
      btnPlanet.innerHTML = "Afficher uniquement les planetes";

      document.getElementById("apiGet").appendChild(btnPlanet);

      for (let i in data.bodies) {
        let maDiv = document.createElement("div");
        maDiv.classList = "divListe";

        let nomAstre = document.createElement("p");
        nomAstre.innerHTML = data.bodies[i].id;

        /*recherche*/

        function getValue() {
          valeurInput = recherche.value;

          let url4 =
            "https://api.le-systeme-solaire.net/rest/bodies/{" +
            valeurInput +
            "}";
          console.log(url4);
          document.getElementById("apiGet").innerHTML = "";
          fetch(url4)
            .then((resp) => resp.json())
            .then(function (data) {
              console.log(data);
              let divAstre = document.createElement("div");
              divAstre.id = "divAstre";

              let monTitre = document.createElement("h1");
              monTitre.innerHTML = data.name;
              monTitre.style.color = "white";

              let monTitreAnglais = document.createElement("p");
              monTitreAnglais.innerHTML = "Nom en anglais :" + data.englishName;
              monTitreAnglais.style.color = "white";

              let inclinaison = document.createElement("p");
              inclinaison.innerHTML =
                "Inclinaison: " + data.inclination + "deg";
              inclinaison.style.color = "white";

              let mass = document.createElement("p");
              mass.innerHTML =
                "Masse:" +
                data.mass["massValue"] +
                " " +
                "x10" +
                " exposant " +
                data.mass["massExponent"] +
                " " +
                "Kg";
              mass.style.color = "white";

              let density = document.createElement("p");
              density.innerHTML = "Densit??:" + data.density + " " + "g/cm??";
              density.style.color = "white";

              let gravity = document.createElement("p");
              gravity.innerHTML = "Gravit??:" + data.gravity + "" + "m/s??";
              gravity.style.color = "white";

              let tourneAutour = document.createElement("p");
              if (data.aroundPlanet !== null) {
                tourneAutour.innerHTML =
                  "Gravite autour de l'astre " + data.aroundPlanet["planet"];
                tourneAutour.style.color = "white";
              }

              let decouverte = document.createElement("p");
              if (data.discoveredBy !== "") {
                decouverte.innerHTML =
                  "D??couverte effectu??e par: " + data.discoveredBy;
                decouverte.style.color = "white";
              } else {
                decouverte.style.opacity = "0";
              }

              let decouverteDate = document.createElement("p");
              if (data.discoveryDate !== "") {
                decouverteDate.innerHTML =
                  "D??couverte effectu??e le:" + data.discoveryDate;
                decouverteDate.style.color = "white";
              } else {
                decouverteDate.style.opacity = "0";
              }

              let btnRetour = document.createElement("p");
              btnRetour.classList = "btnRetour";
              btnRetour.innerHTML = "retour";
              console.log(btnRetour);
              btnRetour.addEventListener("click", () => {
                document.getElementById("apiGet").innerHTML = "";
                reqPrincipale();
              });

              document.getElementById("apiGet").appendChild(btnRetour);
              document.getElementById("apiGet").appendChild(divAstre);
              document.getElementById("divAstre").appendChild(monTitre);
              document.getElementById("divAstre").appendChild(monTitreAnglais);
              document.getElementById("divAstre").appendChild(inclinaison);
              document.getElementById("divAstre").appendChild(mass);
              document.getElementById("divAstre").appendChild(density);
              document.getElementById("divAstre").appendChild(gravity);
              document.getElementById("divAstre").appendChild(tourneAutour);
              document.getElementById("divAstre").appendChild(decouverte);
              document.getElementById("divAstre").appendChild(decouverteDate);
            })
            .catch(function (error) {
              let msgError = document.createElement("p");
              msgError.innerHTML = "Nous ne trouvous pas votre astre d??sol??.";
              msgError.style.color = "white";
              document.getElementById("apiGet").appendChild(msgError);

              let btnRetour = document.createElement("p");
              btnRetour.classList = "btnRetour";
              btnRetour.innerHTML = "retour";
              console.log(btnRetour);
              btnRetour.addEventListener("click", () => {
                document.getElementById("apiGet").innerHTML = "";
                reqPrincipale();
              });

              document.getElementById("apiGet").appendChild(btnRetour);
            });
        }

        /*recherche*/
        btnPlanet.addEventListener("click", () => {
          triPLanete();
        });

        maDiv.appendChild(nomAstre);

        document.getElementById("apiGet").appendChild(maDiv);

        maDiv.addEventListener("click", () => {
          reqId();
        });

        function triPLanete() {
          document.getElementById("apiGet").innerHTML = "";

          let btnRetour = document.createElement("p");
          btnRetour.classList = "btnRetour";
          btnRetour.innerHTML = "retour";
          console.log(btnRetour);
          btnRetour.addEventListener("click", () => {
            document.getElementById("apiGet").innerHTML = "";
            reqPrincipale();
          });

          document.getElementById("apiGet").appendChild(btnRetour);

          for (let i in data.bodies) {
            if (data.bodies[i].isPlanet == true) {
              maDiv = document.createElement("div");
              maDiv.classList = "divListe";
              nomAstre = document.createElement("p");
              nomAstre.innerHTML = data.bodies[i].id;

              maDiv.appendChild(nomAstre);

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
                    let divAstre = document.createElement("div");
                    divAstre.id = "divAstre";

                    let monTitre = document.createElement("h1");
                    monTitre.innerHTML = data.name;
                    monTitre.style.color = "white";

                    let monTitreAnglais = document.createElement("p");
                    monTitreAnglais.innerHTML =
                      "Nom en anglais :" + data.englishName;
                    monTitreAnglais.style.color = "white";

                    let inclinaison = document.createElement("p");
                    inclinaison.innerHTML =
                      "Inclinaison: " + data.inclination + "deg";
                    inclinaison.style.color = "white";

                    let mass = document.createElement("p");
                    mass.innerHTML =
                      "Masse:" +
                      data.mass["massValue"] +
                      " " +
                      "x10" +
                      " exposant " +
                      data.mass["massExponent"] +
                      " " +
                      "Kg";
                    mass.style.color = "white";

                    let density = document.createElement("p");
                    density.innerHTML =
                      "Densit??:" + data.density + " " + "g/cm??";
                    density.style.color = "white";

                    let gravity = document.createElement("p");
                    gravity.innerHTML = "Gravit??:" + data.gravity + "" + "m/s??";
                    gravity.style.color = "white";

                    let tourneAutour = document.createElement("p");
                    if (data.aroundPlanet !== null) {
                      tourneAutour.innerHTML =
                        "Gravite autour de l'astre " +
                        data.aroundPlanet["planet"];
                      tourneAutour.style.color = "white";
                    }

                    let decouverte = document.createElement("p");
                    if (data.discoveredBy !== "") {
                      decouverte.innerHTML =
                        "D??couverte effectu??e par: " + data.discoveredBy;
                      decouverte.style.color = "white";
                    } else {
                      decouverte.style.opacity = "0";
                    }

                    let decouverteDate = document.createElement("p");
                    if (data.discoveryDate !== "") {
                      decouverteDate.innerHTML =
                        "D??couverte effectu??e le:" + data.discoveryDate;
                      decouverteDate.style.color = "white";
                    } else {
                      decouverteDate.style.opacity = "0";
                    }

                    let btnRetour = document.createElement("p");
                    btnRetour.classList = "btnRetour";
                    btnRetour.innerHTML = "retour";
                    console.log(btnRetour);
                    btnRetour.addEventListener("click", () => {
                      document.getElementById("apiGet").innerHTML = "";
                      triPLanete();
                    });

                    document.getElementById("apiGet").appendChild(btnRetour);
                    document.getElementById("apiGet").appendChild(divAstre);
                    document.getElementById("divAstre").appendChild(monTitre);
                    document
                      .getElementById("divAstre")
                      .appendChild(monTitreAnglais);
                    document
                      .getElementById("divAstre")
                      .appendChild(inclinaison);
                    document.getElementById("divAstre").appendChild(mass);
                    document.getElementById("divAstre").appendChild(density);
                    document.getElementById("divAstre").appendChild(gravity);
                    document
                      .getElementById("divAstre")
                      .appendChild(tourneAutour);
                    document.getElementById("divAstre").appendChild(decouverte);
                    document
                      .getElementById("divAstre")
                      .appendChild(decouverteDate);
                  });
              }

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
              let divAstre = document.createElement("div");
              divAstre.id = "divAstre";

              let monTitre = document.createElement("h1");
              monTitre.innerHTML = data.name;
              monTitre.style.color = "white";

              let monTitreAnglais = document.createElement("p");
              monTitreAnglais.innerHTML = "Nom en anglais :" + data.englishName;
              monTitreAnglais.style.color = "white";

              let inclinaison = document.createElement("p");
              inclinaison.innerHTML =
                "Inclinaison: " + data.inclination + "deg";
              inclinaison.style.color = "white";

              let mass = document.createElement("p");
              mass.innerHTML =
                "Masse:" +
                data.mass["massValue"] +
                " " +
                "x10" +
                " exposant " +
                data.mass["massExponent"] +
                " " +
                "Kg";
              mass.style.color = "white";

              let density = document.createElement("p");
              density.innerHTML = "Densit??:" + data.density + " " + "g/cm??";
              density.style.color = "white";

              let gravity = document.createElement("p");
              gravity.innerHTML = "Gravit??:" + data.gravity + "" + "m/s??";
              gravity.style.color = "white";

              let tourneAutour = document.createElement("p");
              if (data.aroundPlanet !== null) {
                tourneAutour.innerHTML =
                  "Gravite autour de l'astre " + data.aroundPlanet["planet"];
                tourneAutour.style.color = "white";
              }

              let decouverte = document.createElement("p");
              if (data.discoveredBy !== "") {
                decouverte.innerHTML =
                  "D??couverte effectu??e par: " + data.discoveredBy;
                decouverte.style.color = "white";
              } else {
                decouverte.style.opacity = "0";
              }

              let decouverteDate = document.createElement("p");
              if (data.discoveryDate !== "") {
                decouverteDate.innerHTML =
                  "D??couverte effectu??e le: " + data.discoveryDate;
                decouverteDate.style.color = "white";
              } else {
                decouverteDate.style.opacity = "0";
              }

              let btnRetour = document.createElement("p");
              btnRetour.classList = "btnRetour";
              btnRetour.innerHTML = "retour";
              console.log(btnRetour);
              btnRetour.addEventListener("click", () => {
                document.getElementById("apiGet").innerHTML = "";
                reqPrincipale();
              });

              document.getElementById("apiGet").appendChild(btnRetour);
              document.getElementById("apiGet").appendChild(divAstre);
              document.getElementById("divAstre").appendChild(monTitre);
              document.getElementById("divAstre").appendChild(monTitreAnglais);
              document.getElementById("divAstre").appendChild(inclinaison);
              document.getElementById("divAstre").appendChild(mass);
              document.getElementById("divAstre").appendChild(density);
              document.getElementById("divAstre").appendChild(gravity);
              document.getElementById("divAstre").appendChild(tourneAutour);
              document.getElementById("divAstre").appendChild(decouverte);
              document.getElementById("divAstre").appendChild(decouverteDate);
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
