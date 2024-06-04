const inputsPagamento = document.querySelectorAll(
  '#pagamento input[type="checkbox"]'
);
const inputsResidencia = document.querySelectorAll(
  '#residencia input[type="checkbox"]'
);

function toggleInput(lastInput) {
  lastInput.checked = false;
}

inputsPagamento.forEach((input, index) => {
  input.addEventListener("click", () =>
    toggleInput(
      index === 0 ? inputsPagamento[index + 1] : inputsPagamento[index - 1]
    )
  );
});

inputsResidencia.forEach((input, index) => {
  input.addEventListener("click", () =>
    toggleInput(
      index === 0 ? inputsResidencia[index + 1] : inputsResidencia[index - 1]
    )
  );
});
