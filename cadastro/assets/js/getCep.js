const inputCep = document.getElementById("cep");
const inputBairro = document.getElementById("bairro");
const inputLogradouro = document.getElementById("logradouro");
const inputCidade = document.getElementById("cidade");
const inputUf = document.getElementById("uf");
const inputPais = document.getElementById("pais");

function filterNull(value) {
  if (value) return value;
  return "";
}

inputCep.addEventListener("change", async (event) => {
  const cep = event.target.value;

  const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
    (res) => res.json()
  );

  inputLogradouro.value = filterNull(data.logradouro);
  inputBairro.value = filterNull(data.bairro);
  inputCidade.value = filterNull(data.localidade);
  inputUf.value = filterNull(data.uf);
  inputPais.value = "BR";
});
