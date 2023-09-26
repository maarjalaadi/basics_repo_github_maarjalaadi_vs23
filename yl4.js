const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage oma nimi ', nimi => {
  readline.question('Sisestage lubatud kiirus ', lKiirus => {
      readline.question('Sisestage tegelik kiirus ', tKiirus => {
    let trahv = (Number(tKiirus) - Number(lKiirus)) * 3;
    let oigeTrahv = Math.min(190, trahv);
    console.log(nimi + ', kiiruse yletamise eest on teie trahv ' + oigeTrahv + ' eurot.')
    readline.close();
    })
  })
});
