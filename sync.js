const fs = require("fs")
function prob1(){
    console.log("This is Synchronous")
    setTimeout(()=>{
        console.log("this is aynchronous")
    }, 2000)
    console.log("End of script")
}

function prob2(){
    console.log("Interval started")
    var interval = setInterval(()=>{
        console.log("repeating message")
    }, 3000)
    setTimeout(()=>{
        clearInterval(interval)
    }, 10000)
}

function prob3(){
    var inputTxt = fs.readFileSync("input.txt", "utf8")
    setTimeout(()=>{
        console.log(inputTxt)
    })
    console.log(inputTxt)
}

function prob4(){
    var dataTxt = fs.readFileSync("data.txt", "utf8")
    var asyncData = fs.readFileSync("asyncData.txt", "utf8")
    console.log(dataTxt)
    setTimeout(()=>{
        console.log("starting aysnc operation")
        console.log(asyncData)
    }, 2000)
}
prob1()
prob2()
prob3()
prob4()
