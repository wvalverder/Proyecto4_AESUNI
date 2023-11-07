const resultado = document.querySelector('#resultado');
const ConteoPlanetas = document.createElement('p');
const PlanetasHabitables = document.createElement('p');
const PlanetasToxicos = document.createElement('p');


const planetas = [
    {name:'Mercurio',habitable: false},
    {name:'Venus', habitable: false},
    {name:'Tierra', habitable: true},
    {name:'Marte', habitable: false},
    {name:'Jupiter', habitable: false},
    {name:'Saturno', habitable: false},
    {name:'Urano', habitable: false},
    {name:'Neptuno', habitable: false},
    {name:'Pluton', habitable: false}
];

const ArrayPlanetas = planetas.map(planetas => planetas.name);
resultado.appendChild(ConteoPlanetas);
const PlanetasTotales = ArrayPlanetas.length;
ConteoPlanetas.innerHTML = `El conteo total de planetas es: ${PlanetasTotales}`;

const FiltrarPlanetasHabitables = planetas.filter(planetas => planetas.habitable == true);
const PlanetaHabitable = FiltrarPlanetasHabitables.map(planetas => planetas.name);
resultado.appendChild(PlanetasHabitables);
PlanetasHabitables.innerHTML = `Los planetas habitables son: ${PlanetaHabitable}`;

const FiltrarPlanetasToxicos = planetas.filter(planetas => planetas.habitable == false);
const PlanetaToxico = FiltrarPlanetasToxicos.map(planetas => planetas.name);
resultado.appendChild(PlanetasToxicos);
PlanetasToxicos.innerHTML = `Los planetas toxicos son: ${PlanetaToxico}`;