function calculate(e) {
  e.preventDefault();
  const widthFormOne = document.getElementById("widthOne").value;
  const lengthFormOne = document.getElementById("lengthOne").value;

  const widthFormTwo = document.getElementById("widthTwo").value;
  const lengthFormTwo = document.getElementById("lengthTwo").value;
  const panHeight = 1;

  let sizePanA = parseFloat(widthFormOne) * parseFloat(lengthFormOne) * panHeight
  let sizePanB = parseFloat(widthFormTwo) * parseFloat(lengthFormTwo) * panHeight

  document.getElementById('ingredientMultiply').innerHTML = `
  <h3 class="mb-4">Multiply all ingredients with:</h3>
  <span>${(sizePanB / sizePanA).toFixed(1)}</span>
  `;
}
