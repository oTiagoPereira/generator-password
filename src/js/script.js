const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const upperCaseCheck = document.getElementById("uppercase");
const lowerCaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const counter = document.getElementById("counter");

counter.innerText = lengthInput.value;
lengthInput.addEventListener("input", () => {
  counter.innerText = lengthInput.value;
});

function generatePassword() {
  const length = parseInt(lengthInput.value);
  const includeUpperCase = upperCaseCheck.checked;
  const includeLowerCase = lowerCaseCheck.checked;
  const includeNumbers = numbersCheck.checked;
  const includeSymbols = symbolsCheck.checked;

  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%&*";

  let senhaGarantida = [];
  let poolGeral = "";

  if (includeUpperCase) {
    poolGeral += upperCaseChars;
    senhaGarantida.push(pegaCharAleatorio(upperCaseChars));
  }
  if (includeLowerCase) {
    poolGeral += lowerCaseChars;
    senhaGarantida.push(pegaCharAleatorio(lowerCaseChars));
  }
  if (includeNumbers) {
    poolGeral += numberChars;
    senhaGarantida.push(pegaCharAleatorio(numberChars));
  }
  if (includeSymbols) {
    poolGeral += symbolChars;
    senhaGarantida.push(pegaCharAleatorio(symbolChars));
  }

  if (poolGeral.length === 0) {
    mostrarAlerta(
      "Por favor, selecione pelo menos um tipo de caractere.",
      "erro"
    );
    return;
  }

  while (senhaGarantida.length < length) {
    senhaGarantida.push(pegaCharAleatorio(poolGeral));
  }

  const password = embaralha(senhaGarantida).join("");
  passwordInput.value = password;
}

function pegaCharAleatorio(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function embaralha(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function copyPassword() {
    if (!navigator.clipboard) {
        mostrarAlerta("A API Clipboard não é suportada neste navegador.", "erro");
        return;
    }
    if (passwordInput.value === "") {
        mostrarAlerta("Por favor, gere uma senha antes de copiá-la.", "erro");
        return;
    }
  navigator.clipboard
    .writeText(passwordInput.value)
    .then(() => {
      mostrarAlerta("Senha copiada para a área de transferência!", "sucesso");
    })
    .catch(() => {
      mostrarAlerta("Não foi possível copiar a senha.", "erro");
    });
}

function mostrarAlerta(mensagem, tipo = 'erro') {
    const alerta = document.getElementById('alerta');
    const alertaMsg = document.getElementById('alerta-msg');
    const alertaIcone = document.getElementById('alerta-icone');

    alertaMsg.textContent = mensagem;

    if (tipo === 'sucesso') {
        alertaIcone.src = 'src/image/icon-sucess.svg';
        alertaIcone.alt = 'Sucesso';
        alerta.classList.remove('border-red-500');
        alerta.classList.add('border-green-400');
    } else {
        alertaIcone.src = 'src/image/icon-error.svg';
        alertaIcone.alt = 'Erro';
        alerta.classList.remove('border-green-400');
        alerta.classList.add('border-red-500');
    }

    alerta.classList.remove('hidden');
    setTimeout(() => {
        alerta.classList.add('hidden');
    }, 2500);
}