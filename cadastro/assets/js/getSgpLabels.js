const url = "https://freeway.sgp.net.br/api";
const data = {
  app: atob("cHJlY2FkYXN0cm8="),
  token: atob("ZDhmNDJiM2QtODg1Yi00YmJiLWFhMjMtZGM1ZWYwYzc3ZmRl"),
};

const inputVendedor = document.getElementById("vendedor");
const inputVencimento = document.getElementById("vencimento");
const inputPlano = document.getElementById("plano");

const HttpConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
};

function createOptions(fatherElement, data, type) {
  for (let i = 0; i < data.length; i++) {
    const option = document.createElement("option");
    option.setAttribute("value", data[i].id);

    switch (type) {
      case "vencimento":
        option.innerHTML = data[i].dia;
        break;
      case "plano":
        const text = `${data[i].descricao}  -  Valor: ${data[i].valor}`;
        option.innerHTML = text;
        break;
      case "vendedor":
        option.innerHTML = data[i].nome;
        break;
    }

    fatherElement.appendChild(option);
  }
}

async function getFields() {
  const vendedorJson = await fetch(
    `${url}/precadastro/vendedor/list`,
    HttpConfig
  ).then((res) => res.json());
  const planoJson = await fetch(
    `${url}/precadastro/plano/list`,
    HttpConfig
  ).then((res) => res.json());
  const vencimentoJson = await fetch(
    `${url}/precadastro/vencimento/list`,
    HttpConfig
  ).then((res) => res.json());

  const planosFilters = ["watch", "WATCH", "R.F.C", "R.A"];
  const planoFiltered = planoJson.filter((plano) =>
    planosFilters.some((filter) => plano.descricao.includes(filter))
  );

  createOptions(inputVencimento, vencimentoJson, "vencimento");
  createOptions(inputPlano, planoFiltered, "plano");
  createOptions(inputVendedor, vendedorJson, "vendedor");
}

getFields();
