// var, let, const

function test() {
  var testVar = '123';
  if(testVar === '123'){
    var testVar1 = '456'
    testVar = '789'
  }
  console.log(testVar1)
}

function test1() {
  const testVar = {name: 'iakobi'};
  if(testVar === '123'){
    const testVar1 = '456'
    if(true){
      console.log(testVar1)
    }
  }
  testVar.name = 'giorgi'
  // testVar= .../

}


const test1 = ()=> {
  const testVar = {name: 'iakobi'};
  if(testVar === '123'){
    const testVar1 = '456'
    if(true){
      console.log(testVar1)
    }
  }
  testVar.name = 'giorgi'
  // testVar= .../

}
