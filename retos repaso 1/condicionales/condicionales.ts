
// ACTIVIDAD DE LOS CONDICIONALES, ZODIACO

function zodiac(day, month)
 {
    const zodiacSigns = [
      { name: 'Capricornio', start: [1, 1], end: [1, 19] },
      { name: 'Acuario', start: [1, 20], end: [2, 18] },
      { name: 'Piscis', start: [2, 19], end: [3, 20] },
      { name: 'Aries', start: [3, 21], end: [4, 19] },
      { name: 'Tauro', start: [4, 20], end: [5, 20] },
      { name: 'Géminis', start: [5, 21], end: [6, 20] },
      { name: 'Cáncer', start: [6, 21], end: [7, 22] },
      { name: 'Leo', start: [7, 23], end: [8, 22] },
      { name: 'Virgo', start: [8, 23], end: [9, 22] },
      { name: 'Libra', start: [9, 23], end: [10, 22] },
      { name: 'Escorpio', start: [10, 23], end: [11, 21] },
      { name: 'Sagitario', start: [11, 22], end: [12, 21] },
      { name: 'Capricornio', start: [12, 22], end: [12, 31] }
    ];
    
    const sign = zodiacSigns.find(zodiac => (month === zodiac.start[0] && day >= zodiac.start[1]) || (month === zodiac.end[0] && day <= zodiac.end[1]));
    return sign ? sign.name : 'Fecha inválida';
  }
  

  // los países


  function continent(country) 
  {
    const continents = {
      'España': 'Europa',
      'México': 'América',
      'Argentina': 'América',
      'China': 'Asia',
      'Australia': 'Oceanía'
    };
    
    console.log(continents[country] || 'País no encontrado');
  }
  

  //par impar

  function isEven(number) 
  {
    console.log(number % 2 === 0 ? 'El número es par' : 'El número es impar');
  }
  