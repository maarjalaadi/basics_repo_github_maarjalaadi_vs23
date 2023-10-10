const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Kas soovite istekohta valida ("ise") voi loosida ("loos"): ', koht => {
  if(koht == 'ise'){
    readline.question('Kas soovite istuda akna aares ("aken") voi mitte ("muu"): ', aken => {
      if(aken == 'aken') 
      {
        console.log("Valisite ise. Aknakoht.");
      } else if(aken == 'muu'){
        console.log("Valisite ise. Vahekaigukoht.");
      }
      readline.close(); 
    });
  } else if(koht == 'loos'){
    if(Math.round(Math.random() * 3) == 2){ 
      console.log("Koht loositi. Aknakoht.");
    } else {
      console.log("Koht loositi. Vahekaigukoht.");
    }
    readline.close(); 
  }
});
