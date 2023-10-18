const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage kirja suurus: ', suurus => {
    readline.question('Sisestage kirja pealkiri: ', pealkiri => {
        readline.question('Kas kirjaga on kaasas fail? ', fail => {
    if(pealkiri == "" || (suurus > 1.0 && fail == 'jah')) { 
  console.log('Kiri on spamm') 
        } else { 
    console.log('Kiri ei ole spamm')
        }
    readline.close()
        })
    })
})
