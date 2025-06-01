let teaFlavors = ['green tea' , 'black tea', 'oolong tea']
let teafl = new Array("green tea", "black tea", "oolong tea");
let tea = teaFlavors[0];
// console.log(tea);


const cities = ['London','Tokyo', 'Paris', 'New York'];
const favoriteCity = cities[3];

const teaType = ['herbal tea', 'white tea','masala chai'];
teaType[2] = 'jasmine tea';
// console.log(teaType);

const citiesVisited = ['Mumbai','Sydneyu'];
citiesVisited.push('Sydney');
// console.log(citiesVisited);

    const teaOrder = ['chai','iced tea','matcha','earl grey'];
    teaOrder.pop();
    // console.log(teaOrder);


    const popularTea = ['gren tea', 'oolong tea', 'chai'];
    const softCopyTeas = popularTea;
    // console.log(softCopyTeas);

    const topCities = ['Berlin','Singapore','New York',];
    const hardCopyCities = [...topCities];
    // const hardCopyCities = topCities.slice();
    // console.log(hardCopyCities);

    const europianCities = ['Paris','Rome',];
    const asianCitites = ['Tokyo','Bangkok'];
    
    let worldCities = europianCities.concat(asianCitites);
    // console.log(worldCities);


    const teaMenu = ['masala chai','oolong tea','green tea','earl tea'];
    let menuLength = teaMenu.length;
    // console.log(menuLength);

    const cityBucketList = ['Kyoto','London','Cape Town','Vancouver'];
    const isLondonInList = cityBucketList.includes('London')
    // const isLondonInList =[];
    // if('London' == cityBucketList){
    //     console.log(isLondonInList.push());
    // }
console.log(isLondonInList);





  