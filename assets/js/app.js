const cl = console.log;

const countryDetails = document.getElementById("countryDetails");
const searchBar = document.getElementById("searchBar");
const btnName = document.getElementById("btnName");
const btnCapital = document.getElementById("btnCapital");
const btnPopulation = document.getElementById("btnPopulation");
const darkModeIcon = document.getElementById("darkModeIcon");
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const heading = document.getElementById("heading");
const populationChartBtn = document.getElementById("populationChartBtn");
const langChartBtn = document.getElementById("langChartBtn");
const popCountry = document.getElementById("popCountry");
const langWorld = document.getElementById("langWorld");

const templating = (arr) => {
    let result = ``;
    arr.forEach(country => {
        result +=`
                <div class="col-md-3">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="flag mb-2">
                                <img src="${country.flag}" alt="${country.name} Image" title="${country.name}" class="img-fluid countryFlag">
                            </div>
                            <h5 class="text-center font-weight-bolder text-warning text-uppercase mb-2">${country.name}</h5>
                            <p>
                                <span class="text-uppercase font-weight-bold">capital: </span>${country.capital}
                            </p>
                            <p>
                                <span class="text-uppercase font-weight-bold">languages: </span>${country.languages}
                            </p>
                            <p class="">
                                <span class="text-uppercase font-weight-bold">population: </span>${country.population}
                            </p>
                        </div>
                    </div>
                </div>
        `;
    });
    countryDetails.innerHTML = result;
};
templating(countries);

const createStatistics = (arr) => {
    let result = ``;
    arr.forEach(ele => {
        result += `
                <div class="skillbox">
                    <p class="mx-5 text-uppercase py-1">${ele.v1}</p>
                    <div class="skill">
                        <div class="skill_level"></div>
                    </div>
                    <p class="ml-5 py-1">${ele.num1}</p>
                </div>
        `;
    });
    document.getElementById("graph").innerHTML = result;
};

const calculationForSkill = (array,total) => {
    let allSkillEle = document.querySelectorAll("#graph .skill_level");
    array.forEach((ele,i) => {
        allSkillEle[i].style.width = `calc(100% * ${ele.num1} / ${total})`;
    }); 
};

const onKeyupHandler = (eve) => {
    // cl([...document.querySelectorAll("#countryDetails .col-md-3")])
    let searchValue = eve.target.value.trim().toLowerCase();
    let allCol3Ele = [...document.querySelectorAll("#countryDetails .col-md-3")];
    if(eve.target.value.length > 0){
        allCol3Ele.forEach(ele => {
            ele.classList.add("d-none")
        })
    }

    // using higher order function we can find the country

    // let newArr = countries.filter(obj => country.name.trim().toLowerCase().includes(searchValue) || obj.capital && country.capital.trim().toLowerCase().includes(searchValue) || country.languages.some(lang => lang.trim().toLowerCase().includes(searchValue)));

    let newArr = countries.reduce((acc,country) => {
        // if(country.name.trim().toLowerCase().includes(searchValue)){
        //     acc.push(country);
        // }else if(country.capital && country.capital.trim().toLowerCase().includes(searchValue)){//we use the country.capital because some of the country object don't have the capital key in their object
        //     acc.push(country)
        // }else if(country.languages.find(lang => lang.trim().toLowerCase().includes(searchValue))){
        //     acc.push(country);
        // }

        if(country.name.trim().toLowerCase().includes(searchValue) || country.capital && country.capital.trim().toLowerCase().includes(searchValue) || country.languages.some(lang => lang.trim().toLowerCase().includes(searchValue))){
            acc.push(country);
        }
        return acc;
    },[]);
    templating(newArr);
};

const onBtnNameHandler = (eve) => {
    // cl(eve.target);
    let upDownIcon = eve.target.firstElementChild;
    // cl(upDownIcon);
    if(upDownIcon.getAttribute("class").includes("fa-arrow-up")){
        upDownIcon.classList.remove("d-none")
        upDownIcon.setAttribute("class", "fa-solid fa-arrow-down");
        let sortedArrDecending = countries.sort((c1, c2) => (c1.name > c2.name) ? -1 : 1);// we need to apply reduce because we can not sort the array directly
        templating(sortedArrDecending);
    }else if(upDownIcon.getAttribute("class").includes("fa-arrow-down")){
        upDownIcon.classList.remove("d-none");
        upDownIcon.setAttribute("class", "fa-solid fa-arrow-up");
        let sortedArrAssending = countries.sort((c1,c2) => (c1.name > c2.name) ? 1 : -1);
        templating(sortedArrAssending);
        // cl(`superDone!!!`);
    };
};

const onBtnCapitalHandler = (eve) => {
    let upDownIcon = eve.target.firstElementChild;
    // cl(upDownIcon);
    if(upDownIcon.getAttribute("class").includes("fa-arrow-up")){
        upDownIcon.classList.remove("d-none")
        upDownIcon.setAttribute("class", "fa-solid fa-arrow-down");
        let sortedArrDecending = countries.sort((c1, c2) => (c1.capital > c2.capital) ? -1 : 1);// we need to apply reduce because we can not sort the array directly
        templating(sortedArrDecending);
    }else if(upDownIcon.getAttribute("class").includes("fa-arrow-down")){
        upDownIcon.classList.remove("d-none");
        upDownIcon.setAttribute("class", "fa-solid fa-arrow-up");
        let sortedArrAssending = countries.sort((c1,c2) => (c1.capital > c2.capital) ? 1 : -1);
        templating(sortedArrAssending);
        // cl(`superDone!!!`);
    };
};

const onBtnPopulationHandler = (eve) => {
    let upDownIcon = eve.target.firstElementChild;
    // cl(upDownIcon);
    if(upDownIcon.getAttribute("class").includes("fa-arrow-up")){
        upDownIcon.classList.remove("d-none")
        upDownIcon.setAttribute("class", "fa-solid fa-arrow-down");
        let sortedArrDecending = countries.sort((c1, c2) => (c1.population > c2.population) ? -1 : 1);// we need to apply reduce because we can not sort the array directly
        templating(sortedArrDecending);
    }else if(upDownIcon.getAttribute("class").includes("fa-arrow-down")){
        upDownIcon.classList.remove("d-none");
        upDownIcon.setAttribute("class", "fa-solid fa-arrow-up");
        let sortedArrAssending = countries.sort((c1,c2) => (c1.population > c2.population) ? 1 : -1);
        templating(sortedArrAssending);
        // cl(`superDone!!!`);
    }; 
};

const onDarkModeIconHandler = (eve) => {
    light.classList.toggle("iconActive");
    dark.classList.toggle("iconActive");
    if(light.className.includes("iconActive")){
        eve.target.style.color = '#000000';
        document.querySelector("body").style.backgroundColor = '#000000';
        [...document.querySelectorAll("#countryDetails .card")].forEach(ele => {
            ele.style.boxShadow = "3px 3px 20px #ededed";
        });
        popCountry.classList.add("text-white");
        langWorld.classList.add("text-white");
    }else{
        eve.target.style.color = '#ffffff';
        document.querySelector("body").style.backgroundColor = '#ffffff';
        [...document.querySelectorAll("#countryDetails .card")].forEach(ele => {
            ele.style.boxShadow = "1px 1px 10px rgb(125, 120, 120)";
        });
        popCountry.classList.remove("text-white");
        langWorld.classList.remove("text-white");
    };
};

const onLightModeHandler = (eve) => {
    if(!light.className.includes("iconActive")){
        eve.target.classList.add("iconActive");
        darkModeIcon.style.color = '#ffffff';
        document.querySelector("body").style.backgroundColor = "#ffffff";
        [...document.querySelectorAll("#countryDetails .card")].forEach(ele => {
            ele.style.boxShadow = "1px 1px 10px rgb(125, 120, 120)";
        });
    }else{
        darkModeIcon.style.color = '#ffffff';
        document.querySelector("body").style.backgroundColor = "#ffffff";
        [...document.querySelectorAll("#countryDetails .card")].forEach(ele => {
            ele.style.boxShadow = "1px 1px 10px rgb(125, 120, 120)";
        });
    };
    if(popCountry.className.includes("text-white") || langWorld.className.includes("text-white")){
        popCountry.classList.remove("text-white");
        langWorld.classList.remove("text-white");
    }
};

const onDarkModeHandler = (eve) => {
    if(!dark.className.includes("iconActive")){
        eve.target.classList.add("iconActive");
        darkModeIcon.style.color = '#000000';
        document.querySelector("body").style.backgroundColor = "#000000";
        [...document.querySelectorAll("#countryDetails .card")].forEach(ele => {
            ele.style.boxShadow = "3px 3px 20px #ededed";
        });
        popCountry.classList.add("text-white");
        langWorld.classList.add("text-white");
    }else{
        darkModeIcon.style.color = '#000000';
        document.querySelector("body").style.backgroundColor = "#000000";
        [...document.querySelectorAll("#countryDetails .card")].forEach(ele => {
            ele.style.boxShadow = "3px 3px 20px #ededed";
        });
        popCountry.classList.remove("text-white");
        langWorld.classList.remove("text-white");
    };
    if(!popCountry.className.includes("text-white") || !langWorld.className.includes("text-white")){
        popCountry.classList.add("text-white");
        langWorld.classList.add("text-white");
    }
};

const onPopChartHandler = (eve) => {
    let popChartArr = countries.map(obj => ({v1 : obj.name, num1 : obj.population, languages : obj.languages})
    ).sort((c1,c2) => c1.num1 < c2.num1 ? 1 : -1);
    let totalPopulation = popChartArr.reduce((acc,c1) => { return acc += c1.num1;},0);
    // cl(totalPopulation);
    let arr = [{v1 : `world`, num1 : totalPopulation}];
    let i = 0;
    while(i < 10){
        arr.push(popChartArr[i]);
        i++;
    };
    // cl(arr);
    createStatistics(arr); 
    calculationForSkill(arr,totalPopulation);

    // we put v1 and num1 key because we want to apply same template function for the language but if put name and population instead of v1 and num1 key respectively. We will have undefined as result when we run same template for the language in onLangChartHandler because we write template as ele.name and ele.population. so we give the same keys for both function
    if(popCountry.className.includes("d-none")){
        popCountry.classList.remove('d-none');
        langWorld.classList.add("d-none");
    }
};

const onLangChartHandler = (eve) => {
    let arrLang = countries.reduce((acc,currentCountry) => {
        currentCountry.languages.forEach(lang => {
            if(!acc.some(ele => ele.v1.includes(lang))){
                acc.push({
                    v1: lang,
                    num1: 1,
                });
            }else{
                for(let i = 0; i < acc.length; i++){
                    if(acc[i].v1 === lang){
                        acc[i].num1++;
                        break;
                    }
                };
            }
        });
        return acc;
    },[]).sort((lang1,lang2) => lang1.num1 < lang2.num1 ? 1 : -1);
    // cl(arrLang);
    let sortedLangArr = [];
    let i = 0;
    while(i < 10){
        sortedLangArr.push(arrLang[i]);
        i++;
    }
    createStatistics(sortedLangArr);
    calculationForSkill(sortedLangArr,arrLang.length);

    // we give v1 and num1 as key reason(comment) is in the onPopChartHandler function.

    if(langWorld.className.includes("d-none")){
        langWorld.classList.remove('d-none');
        popCountry.classList.add("d-none");
    }
};

const init = (ele) => {
    onPopChartHandler();
};

searchBar.addEventListener("keyup", onKeyupHandler);
btnName.addEventListener("click", onBtnNameHandler);
btnCapital.addEventListener("click", onBtnCapitalHandler);
btnPopulation.addEventListener("click", onBtnPopulationHandler);
darkModeIcon.addEventListener("click", onDarkModeIconHandler);
light.addEventListener("click", onLightModeHandler);
dark.addEventListener("click", onDarkModeHandler);
populationChartBtn.addEventListener("click", onPopChartHandler);
langChartBtn.addEventListener("click", onLangChartHandler);