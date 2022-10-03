const search=document.querySelector(".searchInput");
const searchBtn=document.querySelector(".searchBtn");
const flag=document.querySelector('.flag')
const borders=document.querySelector('.borders')
const isName=document.querySelector('.name')
const capital=document.querySelector('.capital')
const lang=document.querySelector('.lang')
const population=document.querySelector('.population')
const area=document.querySelector('.area')
const region=document.querySelector('.region')
const currency=document.querySelector('.currency')
const domeni=document.querySelector('.domeni')
const tel=document.querySelector('.tel')


let value=""
search.addEventListener('change',(e)=>value=e.target.value);
async function getData(){
    const response=await fetch(`https://restcountries.com/v2/name/${value}`);
    const result=await response.json();
    const data=result[0];
    console.log(data);
    flag.src=data.flags.svg;
    isName.innerHTML=data.name;
    capital.innerHTML=data.capital;
    lang.innerHTML=data.languages[0].name;
    population.innerHTML=data.population;
    area.innerHTML=data.area;
    region.innerHTML=data.region;
    currency.innerHTML=data.currencies[0].name;
    domeni.innerHTML=data.topLevelDomain[0];
    tel.innerHTML=data.callingCodes[0];
}
searchBtn.addEventListener("click",getData);