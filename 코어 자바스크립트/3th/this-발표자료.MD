// this 활용

const minjae = {
  lastName : 'kim',
  greet : () =>console.log(`${minjae.lastName} hi`),
  funcHi: function (){
    console.log(this.lastName)
  },
  arrowfuncHi: ()=>{
    console.log(this.lastName)
  },
  friend : {
     lastName : 'kim2',
    greet : function (){
    console.log(this)
    console.log(this.lastName)
    }
  }
}
minjae.greet()
minjae.funcHi()
minjae.arrowfuncHi()
minjae.friend.greet()


const a = {
  name : 'b'
}

Object.prototype.hi = function () {
  console.log(`${this.name} hi`)
}

a.hi()

