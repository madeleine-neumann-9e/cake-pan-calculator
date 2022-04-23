function calculate(e) {
  e.preventDefault();
  const widthFormOne = document.getElementById("widthOne").value;
  const lengthFormOne = document.getElementById("lengthOne").value;

  const widthFormTwo = document.getElementById("widthTwo").value;
  const lengthFormTwo = document.getElementById("lengthTwo").value;
  const panHeight = 1;

  let sizePanA = parseFloat(widthFormOne) * parseFloat(lengthFormOne) * panHeight
  let sizePanB = parseFloat(widthFormTwo) * parseFloat(lengthFormTwo) * panHeight

  document.getElementById('ingredientMultiply').innerHTML = `<span>${(sizePanB / sizePanA).toFixed(1)}</span>`;
}
