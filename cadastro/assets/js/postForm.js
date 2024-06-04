const dataJson = {};
dataJson.app = atob("cHJlY2FkYXN0cm8=");
dataJson.token = atob("ZDhmNDJiM2QtODg1Yi00YmJiLWFhMjMtZGM1ZWYwYzc3ZmRl");

const form = document.getElementById("preRegistration");

function getAdditionalInfo() {
  const checkboxs = document.querySelectorAll(
    'fieldset input[type="checkbox"]'
  );
  const checkboxValues = [];
  checkboxs.forEach((input) =>
    input.checked ? checkboxValues.push(input.value) : ""
  );
  const wifiName = document.getElementById("wifiName").value;
  const wifiPassword = document.getElementById("wifiPassword").value;

  return `
    Pagamento: ${checkboxValues[0]}
    Tipo de Residência: ${checkboxValues[1]}
    --------------------------------------------------
    Nome do Wifi: ${wifiName}
    Senha do Wifi: ${wifiPassword}
  `;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  formData.forEach((value, key) => {
    dataJson[key] = value;
  });

  const additionalInformation = getAdditionalInfo();

  dataJson.observacao = additionalInformation;

  const HttpConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataJson),
  };

  const url = "https://freeway.sgp.net.br/api";

  try {
    const response = await fetch(url + "/precadastro/F", HttpConfig);
    const responseData = await response.json();
    if (response.ok) {
      alert("Sucesso:", responseData);
    } else {
      alert("HTTP error:", response.status, responseData);
    }
  } catch (error) {
    alert("Network error:", error);
  }
});
