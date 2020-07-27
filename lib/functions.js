
const functions = {
    one: (oper)=>{
       return (oper!==undefined) ? oper(1) : 1
    },
    two: (oper)=>{
        return (oper!==undefined) ? oper(2) : 2
     },
    three: (oper)=>{
        return (oper!==undefined) ? oper(3) : 3
     },
    four: (oper)=>{
        return (oper!==undefined) ? oper(4) : 4
     },
    five: (oper)=>{
        return (oper!==undefined) ? oper(5) : 5
     },
    six: (oper)=>{
        return (oper!==undefined) ? oper(6) : 6
     },
    seven: (oper)=>{
        return (oper!==undefined) ? oper(7) : 7
     },
    eight: (oper)=>{
        return (oper!==undefined) ? oper(8) : 8
     },
    nine: (oper)=>{
        return (oper!==undefined) ? oper(9) : 9
     },
    plus: (num)=>{
        return function(num2) {
            return num2+num
        }
    },
    minus: (num)=>{
        return function(num2) {
            return num2-num
        }
    },
    times: (num)=>{
        return function(num2){
            return num2*num
        }
    },
    dividedBy: (num)=>{
        return function(num2){
            return Math.floor(num2/num)
        }
    }
}

module.exports = functions