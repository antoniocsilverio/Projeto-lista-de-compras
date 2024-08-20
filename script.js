function goBack() {
  console.log("Você voltou para o menu");
}

function adicionarItem() {
  console.log("Você adicionou um item ao carrinho");
  var meuInput = document.getElementById("item");
  var valorDoInput = meuInput.value;
  var ondeColocar = document.getElementById("minhaLista");
  var criarLi = `<li class="itemDaMinhaLista">
  <input type="checkbox" id="item1" />
  <label for="item1">${valorDoInput} </label>
  <img onclick="excluirItem(this)"
    src="images/Lista de compras (Community)/Lista de compras/Frame.png"
    alt=""
  />
</li>`;
  ondeColocar.innerHTML += criarLi;
  meuInput.value = "";
}

function chamarAlerta() {
  var localizarAlerta = document.getElementById("alerta");
  localizarAlerta.classList.remove("hidden");
  setTimeout(() => {
    localizarAlerta.classList.add("hidden");
  }, 2000);
}

function excluirItem(nomeElementoHtml) {
  nomeElementoHtml.parentElement.remove();
  chamarAlerta();
}
