const { question } = require('readline-sync');
var dict = {'boom':'bass', 'shim':'sham', 'boom':'shakalaka'}
async function run() {
  while(true) {
    const input = question('>');
    console.log(`You input ${input}`);
    if (input == 'ADD') {
      let k = question('Enter key:')
      console.log(`You input ${k}`);
      let v = question('Enter value:')
      console.log(`You input ${v}`);
      dict[key] = value
      console.log('Added');
      
    }
    if (input == 'MEMBERS') {

      let k = question('Enter key:')
      console.log(`You input ${k}`);
      for(let k in dict) {
        console.log("k: ", k)
        console.log("key: ", k)
        let value = dict[k]
        console.log("inside", value)
        // if(k == key) {
        // }
        // i = 0; i < p.length; i++
        // console.log(key)
        // console.log("value:", value)
      }
      // for(var i = 0; i < dict.length; i++) {
      //   var value = dict[i]
      //   console.log('value: ', value)
      //   console.log('k: ', k)
      //   if(value == k) {

      //     console.log(`${i}) ${value}`)
      //   }

      // }
    }
  }
}

run().then();