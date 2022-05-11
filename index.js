const resultContainer = document.getElementById("result-container");
const form = document.getElementById("conversion-form");
const inputNumber = document.getElementById("number");
const firstUnitEl = document.getElementById("unit1");
const secondUnitEl = document.getElementById("unit2");

function convertUnits(input, param1, param2) {
  let multiplierToCm, multiplierFromCm, result;

  const unitsToCm = {
    centimeter: 1,
    meter: 100,
    kilometer: 100000,
    mile: 160935,
    yard: 91.44,
    foot: 30.48,
    inch: 2.54,
  };

  const unitsFromCm = {
    centimeter: 1,
    meter: 0.01,
    kilometer: 0.00001,
    mile: 0.0000062137,
    yard: 0.010936133,
    foot: 0.032808399,
    inch: 0.3937007874,
  };

  for (const property in unitsToCm) {
    if (param1 === property) {
      multiplierToCm = unitsToCm[property];
      console.log(multiplierToCm);
    }
  }

  for (const property in unitsFromCm) {
    if (param2 === property) {
      multiplierFromCm = unitsFromCm[property];
      console.log(multiplierFromCm);
    }
  }

  result =
    parseFloat(input * multiplierToCm * multiplierFromCm).toFixed(5) % 1 === 0
      ? parseFloat(input * multiplierToCm * multiplierFromCm).toFixed(0)
      : parseFloat(input * multiplierToCm * multiplierFromCm).toFixed(5);

  resultContainer.innerHTML = `${input} ${param1} = ${result} ${param2}`;
  resultContainer.style.marginTop = "2em";
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(inputNumber.value, firstUnitEl.value, secondUnitEl.value);
  convertUnits(
    inputNumber.value,
    firstUnitEl.value.toLowerCase(),
    secondUnitEl.value.toLowerCase()
  );
}

form.addEventListener("submit", handleSubmit);
