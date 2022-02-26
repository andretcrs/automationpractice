import LoginPage from "../pages/LoginPage";
import realizarPedidoPage from "../pages/realizarPedidoPage";

describe("Acessa a pagina principal", () => {
  it("Verifica se o site está online", function () {
    LoginPage.go();
  });
});

describe("Validar login com dados corretos", () => {
  it("Informa login e senha inválido e verifca mensagem de erro", function () {
    LoginPage.go();
    LoginPage.loginInvalido();
  });
});

describe("Valida Login dados incorretos", () => {
  it("Realiza o login com dados corretos", function () {
    LoginPage.go();
    LoginPage.fazerLogin();
  });
});

describe("Realiza o Pedido", () => {
  it("Busca um item para a compra", function () {
    realizarPedidoPage.buscarItem();
  });
});

describe("Fazer o check-out", () => {
  it("Verifica itens da compra", function () {
    realizarPedidoPage.fazerChekout();
    
    
  });
});
