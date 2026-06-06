/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthCtn = document.getElementById("length-ctn")
const volumeCtn = document.getElementById("volume-ctn")
const massCtn = document.getElementById("mass-ctn")
const convertBtn = document.getElementById("convert-btn")
const inputVal = document.getElementById("value")

function convLen(v){
    const conversionMet = (v * 3.281).toFixed(3)
    const conversionFeet = (v / 3.281).toFixed(3)
    lengthCtn.innerHTML = `<div class="display-txt-ctn">
                                <p class="display-txt">Length (Meter/Feet)</p>  
                                <div class="conversion-txt-ctn">
                                    <p class="conversion-txt">${v} meters = ${conversionMet} feet | ${v} feet = ${conversionFeet} meters</p>
                                </div>
                            </div>`
}

function convVol(v){
    const conversionLit = (v * 0.264).toFixed(3)
    const conversionGal = (v / 0.264).toFixed(3)
    volumeCtn.innerHTML = `<div class="display-txt-ctn">
                                <p class="display-txt">Volume (Liters/Gallons)</p>  
                                <div class="conversion-txt-ctn">
                                    <p class="conversion-txt">${v} liters = ${conversionLit} liters | ${v} gallons = ${conversionGal} liters</p>
                                </div>
                            </div>`
}

function convMas(v){
    const conversionKil = (v * 2.204).toFixed(3)
    const conversionPound = (v / 2.204).toFixed(3)
    massCtn.innerHTML = `<div class="display-txt-ctn">
                                <p class="display-txt">Mass (Kilograms/Pounds)</p>  
                                <div class="conversion-txt-ctn">
                                    <p class="conversion-txt">${v} kilograms = ${conversionKil} pounds | ${v} pounds = ${conversionPound} kilograms</p>
                                </div>
                            </div>`
}

convertBtn.addEventListener("click", function(){
    convLen(inputVal.value)
    convVol(inputVal.value)
    convMas(inputVal.value)
})