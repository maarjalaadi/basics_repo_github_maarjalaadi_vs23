const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage ainepunktide arv ', punktid => {
  readline.question('Sisestage nädalate arv ', nadal => {
    let kursus = Number(punktid) * 26;
    let yksNadal = Number(kursus) / Number(nadal); 
    let ajakulu = Math.ceil(yksNadal);
    console.log('Ajakulu: ' + ajakulu);
    readline.close();
    })
  });
