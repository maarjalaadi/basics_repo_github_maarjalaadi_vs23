const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisesta ohutemperatuur: ', temp => {
  if (parseFloat(temp) <= 4.0) {
      oht = 'On jaatumise oht ';
    } else {
  oht = 'Ei ole jaatumise ohtu ';
  }
  console.log(oht);
    readline.close();
    });
