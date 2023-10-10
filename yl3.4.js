const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let apples = 14
readline.question('Mitu poialpoissi tahab ounu: ', gnomes => {
  for(let i = 1; i <= gnomes; i++) {
    let applesForGnome = Math.ceil(Math.random() * 2)
        console.log(applesForGnome)
        apples = apples - applesForGnome
      }
    console.log('Lumivalgekesele jai ' + apples)
readline.close()
  })