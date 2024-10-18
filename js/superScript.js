const URLHEROES = "data/superhero.json"
const DIVHEROES = document.querySelector("#superheroes")

//funciones
function crearDivHeroe() {
    DIVHEROES.insertAdjacentHTML("beforeend",
        `
        <div class="heroe"></div>
        `
    );
    
};
function crearNombreHeroe(nombre, bando) {
    divsHeroe = document.querySelectorAll("div.heroe");
    ultimoDivHeroe = divsHeroe[divsHeroe.length - 1];

    ultimoDivHeroe.insertAdjacentHTML("beforeend",
        `
        <h3 class="nombre ${bando}">${nombre}</h3>
        `
    );
};
function crearDatosPrincipales(editorial, raza, genero, nombreCompleto, altura, peso) {
    divsHeroe = document.querySelectorAll("div.heroe");
    ultimoDivHeroe = divsHeroe[divsHeroe.length - 1];
    codigoGenerado =
      `
      <div class="datosPrincipales">
        <ul>
         <li><span class="etiqueta">Editorial: ${editorial}</span><span class="dato"></span></li>
         <li><span class="etiqueta">Raza: ${raza}</span><span class="dato"></span></li>
         <li><span class="etiqueta">Género: ${genero}</span><span class="dato"></span></li>
         <li><span class="etiqueta">Nombre Completo: ${nombreCompleto}</span><span class="dato"></span></li>
         <li><span class="etiqueta">Altura: ${altura}</span><span class="dato"></span></li>
         <li><span class="etiqueta">Peso: ${peso}</span><span class="dato"></span></li>
        </ul>
      </div>
      `
    ultimoDivHeroe.insertAdjacentHTML("beforeend", codigoGenerado);
};
function crearImagen(urlImagen) {
    divsHeroe = document.querySelectorAll("div.heroe");
    ultimoDivHeroe = divsHeroe[divsHeroe.length - 1];
    ultimoDivHeroe.insertAdjacentHTML("beforeend",
        `
         <div class="imagenes">
            <img src="${urlImagen}" alt="">
        </div>
        `
    );
};
function crearEstadisticas (inteligencia, fuerza, velocidad, durabilidad, potencia, fuerzaEnCombate ) {
    divsHeroe = document.querySelectorAll("div.heroe");
    ultimoDivHeroe = divsHeroe[divsHeroe.length - 1];
    codigoGenerado = 
        `
          <div class="estadisticas">
                <div class="col1">
                    <ul>
                        <li><span class="etiqueta">Inteligencia: ${inteligencia}</span><span class="dato"></span></li>
                        <li><span class="etiqueta">Fuerza: ${fuerza}</span><span class="dato"></span></li>
                        <li><span class="etiqueta">Velocidad: ${velocidad}</span><span class="dato"></span></li>
                    </ul>
                </div>
                <div class="col2">
                    <ul>
                        <li><span class="etiqueta">Durabilidad: ${durabilidad}</span><span class="dato"></span></li>
                        <li><span class="etiqueta">Potencia: ${potencia}</span><span class="dato"></span></li>
                        <li><span class="etiqueta">Fuerza en combate: ${fuerzaEnCombate}</span><span class="dato"></span></li>
                    </ul>
                </div>
        `
        ultimoDivHeroe.insertAdjacentHTML("beforeend", codigoGenerado)
}

//sentencias
fetch(URLHEROES)
    .then(datos => datos.json())
    .then(datosHeroes => {
                            for (heroe of datosHeroes) {
                                crearDivHeroe();
                                crearNombreHeroe(heroe.name, heroe.biography.alignment);
                                crearDatosPrincipales(heroe.biography.publisher,
                                    heroe.appearance.race,
                                    heroe.appearance.gender,
                                    heroe.biography.fullName,
                                    heroe.appearance.height[1],
                                    heroe.appearance.weight[1]);
                                crearImagen(heroe.images.md)
                                crearEstadisticas(heroe.powerstats.intelligence,
                                    heroe.powerstats.strength,
                                    heroe.powerstats.speed,
                                    heroe.powerstats.durability,
                                    heroe.powerstats.power,
                                    heroe.powerstats.combat)
                            } //for   
                         }//then
); 
    

