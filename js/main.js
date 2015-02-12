var blueberries = {
    name: 'Blueberries',
    latinName: 'Vaccinium corymbosum',
    growsOnShrub: 'Yes',
    energy: '240 kJ',
    carbohydrates: '14.49 g',
    protein: '0.74 g'
};


var grapes = {
    name: 'Grapes',
    latinName: 'Vitis vinifera',
    growsOnShrub: 'No',
    energy: '288 kJ',
    carbohydrates: '18.1 g',
    protein: '0.72 g'
};


var redCurrant = {
    name: 'Red Currant',
    latinName: 'Ribes rubrum',
    growsOnShrub: 'Yes',
    energy: '234 kJ',
    carbohydrates: '13.8 g',
    protein: '1.4 g'
};

var writeBerryInfo = function (berry) {
    document.write('<h1>' + berry.name + '</h1>');
    document.write('<dl>');
    document.write('<dt>Latin Name</dt>');
    document.write('<dd>' + berry.latinName + '</dd>');
    document.write('<dt>Grows On Shrubs</dt>');
    document.write('<dd>' + berry.growsOnShrub + '</dd>');
    document.write('<dt>Energy</dt>');
    document.write('<dd>' + berry.energy + '</dd>');
    document.write('<dt>Carbohydrates</dt>');
    document.write('<dd>' + berry.carbohydrates + '</dd>');
    document.write('<dt>Protein</dt>');
    document.write('<dd>' + berry.protein + '</dd>');
    document.write('</dl>');
    
}

var allTheBerries = [blueberries, grapes, redCurrant];

allTheBerries.forEach(writeBerryInfo);