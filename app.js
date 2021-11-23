Number.prototype.brm = function(type, rest=2){
    if(type === "int" || type === undefined){
        let str, qol
        if(String(this).indexOf(".") === -1){
            str = String(this).split('').reverse().join('')
            qol = ""
        }else{
            str = String(this).slice(0,String(this).indexOf(".")).split('').reverse().join('')
            qol = rest === 0 ? "" : String(this).slice(String(this).indexOf(".")).slice(0, rest+1)
        }
        let arr = []
        for(let i = 3; i < str.length + 3; i+=3){
            arr.push(str.slice(i-3, i))
        }
        return arr.map(i=>i.split("").reverse().join("")).reverse().join(' ') + qol
    }else if(type === "string"){
        let leng = String(Math.floor(this)).length
        let num = String(Math.floor(this)).split('').reverse()
        if(leng < 4){
            return Math.floor(this)
        }else if(leng < 7){
            return num.slice(3).reverse().join('')  + `${+num.slice(2,3) === 0 ? "" : "."+ num.slice(2,3)} k` 
        }else if(leng < 10){
            return num.slice(6).reverse().join('') + `${+num.slice(5,6) === 0 ? "" : "."+ num.slice(5,6)} m`
        }else {
            return num.slice(9).reverse().join('') + "B"
        }
    }
}

let h1 = document.querySelector('#h1')
let number = 12345.6789

// h1.innerHTML = number.brm()
// result:  12 345.67

// h1.innerHTML = number.brm("int")
// result:  12 345.67

h1.innerHTML = number.brm("int", 0)
// result:  12 345

// h1.innerHTML = number.brm("string")
// result:  12.3 k





// yarn add number-brm
// npm i number-brm


