const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisesta perekonnanimi: ', nimi => {
  if (nimi.slice(-2) == 'ne') {
      seis = 'Abielus '
  } else if (nimi.slice(-2) == 'te') {
      seis = 'Vallaline ';
  } else if (nimi.slice(-1) == 'e') {
      seis = 'Maaramata ';
  } else {
    seis = 'Pole leedulanna perekonnanimi ';
  }
  console.log(seis);
  readline.close();
})