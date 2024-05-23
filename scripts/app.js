//

const SvgAll = document.querySelector(".svg-all");
const allLists = document.querySelector(".filter-lists");
const restCount = document.querySelector(".rest-country");
const Filt = document.querySelector(".filt");
const filterList = document.querySelectorAll(".filter-lists li");

arrayLists = Array.from(filterList);

SvgAll.addEventListener("click", () => {
  allLists.classList.toggle("show-lists");
});

// the array lists for the filtered lists
arrayLists.forEach((element) => {
  element.addEventListener("click", () => {
    // filter innerHtml change
    Filt.innerHTML = `
    <p>
    ${element.textContent}
    <svg
      class="svg-down"
      width="18px"
      height="18px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M12 6V18M12 18L7 13M12 18L17 13"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>
  </p>
    `;
  });
});

const Totalcountry = document.querySelector(".rest-country");
const eachCountry = document.querySelector(".eachCountry");

const allCountryName = document.querySelectorAll(".country");

const allImages = document.querySelectorAll(".country img");
const subMagery = document.querySelector(".singleImage img");
const button = document.querySelector(".back-btn");

const array = Array.from(allCountryName);
const Imagearray = Array.from(allImages);

// array.forEach(element => {
//   element.addEventListener('click', ()=>{

//     Imagearray.forEach(elem => {
//       elem.addEventListener('click', ()=> {

//         const src = elem.getAttribute('src');
//         Totalcountry.style.display = 'none';
//         eachCountry.style.display = 'block';
//         subMagery.setAttribute('src', src);

//       })
//     })

//   });

// });
// heading back
button.addEventListener("click", () => {
  Totalcountry.style.display = "grid";
  eachCountry.style.display = "none";
});

// getting the data for the search input
const submit = document.querySelector("form");

// updata ui
const UpdateUi = (data) => {
  const countryDets = data.countryDets;

  const eachsec = document.querySelector(".singleC");

  // update the details
  eachsec.innerHTML = `
<div class="singleC">
  <div class="singleImage">
    <img src="${countryDets.flags.png}" alt="" />
  </div>
  <div class="singleText">
    <h1>${countryDets.name.common}</h1>
    <div class="fir">
      <!-- the first lists -->
      <div>
        <ul>
          <li><a>Native Name: </a> ${countryDets.name.common}</li>
          <li><a>Population: </a>${countryDets.population}</li>
          <li><a>region: </a> ${countryDets.region}</li>
          <li><a>sub Region: </a> ${countryDets.subregion}</li>
          <li><a>capital: </a> ${countryDets.capital}</li>
        </ul>
      </div>
      <!-- the second lists -->
      <div class="sec">
        <ul>
          <li><a>top level domain: </a>${countryDets.cca2}</li>
          <li><a>currencies: </a> ${Object.values(countryDets.currencies)[0].name}</li>
          <li><a>language: </a>${Object.values(countryDets.languages)[0]}</li>
        </ul>
      </div>
    </div>
    <!-- the final lists -->
    <div class="bir">
      <p>Border Countries:</p>
      <div  class="grids-best">
        <p>${countryDets.borders}</P>
      </div>
    </div>
  </div>
</div>
  `;


};

const updateCountry = async (searching) => {
  const countryDets = await getCountry(searching);

  return {
    countryDets: countryDets,
  };
};

submit.addEventListener("submit", (e) => {
  e.preventDefault();

  const searching = submit.search.value.trim();
  submit.reset();

  Totalcountry.style.display = "none";
  eachCountry.style.display = "block";

  updateCountry(searching)
    .then((data) => UpdateUi(data))
    .catch((err) => console.log(err));
});

// toogleeffects

const DarkButton = document.querySelector(".sub");
const DarkAll = document.querySelector(".button-dark");

DarkAll.addEventListener("click", () => {
  document.body.classList.toggle("primary-dark");

  // an if statement for the
  if (document.body.classList.contains("primary-dark")) {

    DarkAll.innerHTML = `
    <svg fill="#ffffff" width="24px" height="24px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style> .cls-1 { fill: none; } </style> </defs> <rect x="15" y="2" width="2" height="5"></rect> <rect x="21.6675" y="6.8536" width="4.958" height="1.9998" transform="translate(1.5191 19.3744) rotate(-45)"></rect> <rect x="25" y="15" width="5" height="2"></rect> <rect x="23.1466" y="21.6675" width="1.9998" height="4.958" transform="translate(-10.0018 24.1465) rotate(-45)"></rect> <rect x="15" y="25" width="2" height="5"></rect> <rect x="5.3745" y="23.1466" width="4.958" height="1.9998" transform="translate(-14.7739 12.6256) rotate(-45)"></rect> <rect x="2" y="15" width="5" height="2"></rect> <rect x="6.8536" y="5.3745" width="1.9998" height="4.958" transform="translate(-3.253 7.8535) rotate(-45)"></rect> <path d="M16,12a4,4,0,1,1-4,4,4.0045,4.0045,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z"></path> <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" class="cls-1" width="32" height="32"></rect> </g></svg>
    <p class="sub">Light mode</p>
    `;

  } else if(document.body.classList !== "primary-dark") {

    DarkAll.innerHTML = `
    <svg
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </g>
  </svg>
  <p class="sub">Dark mode</p>
    `;

  };

  return searchTheme();
});


// function for the search dark theme 
function searchTheme(){
  const mainSearch = document.querySelector('.search');
  const InSearch = document.querySelector('.searchsub');

  mainSearch.classList.toggle('sec-dark');
  InSearch.classList.toggle('sec-dark');

  // the html template for the seact
  if(mainSearch.classList.contains('sec-dark')){
    mainSearch.innerHTML =`
    <svg
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
        stroke="#ffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </g>
  </svg>
  <div>
    <input
      type="search"
      name="search"
      class="searchsub"
      id="searchbox"
      placeholder="search for a country"
      style="background-color: hsl(209, 23%, 22%); color: hsl(0, 0%, 100%);"
    />
  </div>
    `
  }else {
    mainSearch.innerHTML = `
    <svg
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </g>
  </svg>
  <div>
    <input
      type="search"
      name="search"
      class="searchsub"
      id="searchbox"
      placeholder="search for a country"
    />
  </div>
    `
  }

  // the html template for the filter
  SvgAll.classList.toggle('sec-dark');

  if(SvgAll.classList.contains('sec-dark')){
    SvgAll.innerHTML = `
    <p class="filt">
    Filter by region
    <svg
      class="svg-down"
      width="18px"
      height="18px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M12 6V18M12 18L7 13M12 18L17 13"
          stroke="#ffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>
  </p>

<ol class="filter-lists">
  <li>Asia</li>
  <li>Africa</li>
  <li>America</li>
  <li>Europe</li>
</ol>
</div>
    `
  }else {
    SvgAll.innerHTML = `
    <p class="filt">
    Filter by region
    <svg
      class="svg-down"
      width="18px"
      height="18px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M12 6V18M12 18L7 13M12 18L17 13"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>
  </p>

<ol class="filter-lists">
  <li>Asia</li>
  <li>Africa</li>
  <li>America</li>
  <li>Europe</li>
</ol>
</div>
    `
  }


}




