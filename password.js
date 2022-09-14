let passwordArr = ["A","B","C","D","E","f","h","i","j","k","1","2","+","-","&","w","z","<","*","$"]
let passwordLength
let inputEl = document.getElementById("style")
let input1El = document.querySelector("#password1-col")
let input2El = document.querySelector("#password2-col")
let input3El = document.querySelector("#password3-col")
let input4El = document.querySelector("#password4-col")

function generatePassword() {
    getLength()
    //inputEl.value = passwordLength
  input1El.value = passwordGenerator()
  input2El.value = passwordGenerator()
  input3El.value = passwordGenerator()
  input4El.value = passwordGenerator()
}

function passwordGenerator() {
    
    let selectedRandom = []
    let joinedRandom = ""
    for (let i = 0; i < passwordLength; i++) {
    let randomNumbers = Math.floor(Math.random() * passwordArr.length)
    selectedRandom.push(passwordArr[randomNumbers])
    joinedRandom = selectedRandom.join('')
    }
    return joinedRandom
} 
  
  function getLength() {
      passwordLength = inputEl.value
  }
