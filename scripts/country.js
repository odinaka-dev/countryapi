// const key = 'cnZqURPbyw30HJ5Mb8F6JVkDHkUDKQWBuaGcv871';
const key = ' https://restcountries.eu';



// adding the query and the update version

const getCountry = async (country) => {
    const baseCountry = `https://restcountries.com/v3.1/name/${country}`;
    const adData = `?apikey=${key}`;

    const response = await fetch(baseCountry + adData);
    const data = await response.json();

    return data[0];

};

// // getting the capital
// const getcurrency = async (currency) => {
//     const baseCurrency = `https://restcountries.com/v3.1/currency/${currency}`;
//     const adData = `?apikey=${key}`;

//     const response = await fetch(baseCurrency + adData);
//     const data = await response.json();

//     return data[0];
 
// }

// getting the regions

const getRegion =  async (region) => {
    const baseRegion = `https://restcountries.com/v3.1/region/${region}`;
    const adData = `?apikey=${key}`;

    const response = await fetch(baseRegion + adData);
    const data = response.json();

    console.log(data);

}

getRegion('europe');






