// Variáveis globais para armazenar o conteúdo da cozinha
let torneirasCozinha  = null;
let lavaloucasCozinha = null;

// Variáveis globais para armazenar o conteúdo do banheiro
let torneiraBanheiro         = null;
let chuveiroEletricoBanheiro = null;
let chuveiroGasBanheiro      = null;
let vasoBanheiro             = null;
let banheiroBanheiro         = null;
let duchaHigienciaBanheiro   = null;

// Variáveis globais para armazenar o conteúdo da area de servicos
let torneiraServicos   = null;
let lavaRoupasServicos = null;

// Variáveis globais para armazenar o conteúdo da area de area externa
let torneiraExterno     = null;
let piscinaExterno      = null;
let irrigacaoExterno    = null;
let lavagemCarroExterno = null;

let pessoasnacasa       = null;
let valcontaagua        = null;
let valcontaCons        = null;

function salvarDadosCozinha(){
  torneirasCozinha  = document.getElementById('tornCoz').value;
  lavaloucasCozinha = document.getElementById('lavLouc').value;
  localStorage.setItem('TorneirasCozinha', torneirasCozinha);
  localStorage.setItem('LavaLoucasCozinha', lavaloucasCozinha);
}

function salvarDadosBanheiro(){
  torneiraBanheiro         = document.getElementById('tornBan').value;
  chuveiroEletricoBanheiro = document.getElementById('chuvEleBan').value;
  chuveiroGasBanheiro      = document.getElementById('chuvGasBan').value;
  vasoBanheiro             = document.getElementById('vasoBan').value;
  banheiroBanheiro         = document.getElementById('banheiraBan').value;
  duchaHigienciaBanheiro   = document.getElementById('duchaHigBan').value;

  localStorage.setItem('torneiraBanheiro', torneiraBanheiro);
  localStorage.setItem('chuveiroEletricoBanheiro', chuveiroEletricoBanheiro);
  localStorage.setItem('chuveiroGasBanheiro', chuveiroGasBanheiro);
  localStorage.setItem('vasoBanheiro', vasoBanheiro);
  localStorage.setItem('banheiroBanheiro', banheiroBanheiro);
  localStorage.setItem('duchaHigienciaBanheiro', duchaHigienciaBanheiro);
}

function salvarDadosServicos(){
  torneiraServicos  = document.getElementById('tornServ').value;
  lavaRoupasServicos = document.getElementById('lavRoupServ').value;

  localStorage.setItem('torneiraServicos', torneiraServicos);
  localStorage.setItem('lavaRoupasServicos', lavaRoupasServicos);
}

function salvarDadosExternos(){
  torneiraExterno     = document.getElementById('tornExt').value;
  piscinaExterno      = document.getElementById('piscExt').value;
  irrigacaoExterno    = document.getElementById('irrigExt').value;
  lavagemCarroExterno = document.getElementById('lavCarExt').value;

  localStorage.setItem('torneiraExterno', torneiraExterno);
  localStorage.setItem('piscinaExterno', piscinaExterno);
  localStorage.setItem('irrigacaoExterno', irrigacaoExterno);
  localStorage.setItem('lavagemCarroExterno', lavagemCarroExterno);
}


function salvarIndex(){
  pessoasnacasa  = document.getElementById('qtdPessoas').value;
  valcontaagua   = document.getElementById('valConta').value;
  valcontaCons   = document.getElementById('valCons').value;

  localStorage.setItem('pessoasnacasa', pessoasnacasa);
  localStorage.setItem('valcontaagua', valcontaagua);
  localStorage.setItem('valcontaCons', valcontaCons);

}


function zerarVariaveis(){
  // Variáveis globais para armazenar o conteúdo da cozinha
  torneirasCozinha  = 0;
  lavaloucasCozinha = 0;

// Variáveis globais para armazenar o conteúdo do banheiro
  torneiraBanheiro         = 0;
  chuveiroEletricoBanheiro = 0;
  chuveiroGasBanheiro      = 0;
  vasoBanheiro             = 0;
  banheiroBanheiro         = 0;
  duchaHigienciaBanheiro   = 0;

// Variáveis globais para armazenar o conteúdo da area de servicos
  torneiraServicos   = 0;
  lavaRoupasServicos = 0;

// Variáveis globais para armazenar o conteúdo da area de area externa
  torneiraExterno     = 0;
  piscinaExterno      = 0;
  irrigacaoExterno    = 0;
  lavagemCarroExterno = 0;

  pessoasnacasa       = 0;
  valcontaagua        = 0;
  valcontaCons        = 0;

  localStorage.setItem('TorneirasCozinha', torneirasCozinha);
  localStorage.setItem('LavaLoucasCozinha', lavaloucasCozinha);
  localStorage.setItem('torneiraBanheiro', torneiraBanheiro);
  localStorage.setItem('chuveiroEletricoBanheiro', chuveiroEletricoBanheiro);
  localStorage.setItem('chuveiroGasBanheiro', chuveiroGasBanheiro);
  localStorage.setItem('vasoBanheiro', vasoBanheiro);
  localStorage.setItem('banheiroBanheiro', banheiroBanheiro);
  localStorage.setItem('duchaHigienciaBanheiro', duchaHigienciaBanheiro);
  localStorage.setItem('torneiraServicos', torneiraServicos);
  localStorage.setItem('lavaRoupasServicos', lavaRoupasServicos);
  localStorage.setItem('torneiraExterno', torneiraExterno);
  localStorage.setItem('piscinaExterno', piscinaExterno);
  localStorage.setItem('irrigacaoExterno', irrigacaoExterno);
  localStorage.setItem('lavagemCarroExterno', lavagemCarroExterno);
  localStorage.setItem('pessoasnacasa', pessoasnacasa);
  localStorage.setItem('valcontaagua', valcontaagua);
  localStorage.setItem('valcontaCons', valcontaCons);

}

window.onload = function() {

  const conteudoTornCoz              = localStorage.getItem('TorneirasCozinha');
  const conteudoLavLocCoz            = localStorage.getItem('LavaLoucasCozinha');

  const ConttorneiraBanheiro         = localStorage.getItem('torneiraBanheiro');
  const ContchuveiroEletricoBanheiro = localStorage.getItem('chuveiroEletricoBanheiro');
  const ContchuveiroGasBanheiro      = localStorage.getItem('chuveiroGasBanheiro');
  const ContvasoBanheiro             = localStorage.getItem('vasoBanheiro');
  const ContbanheiroBanheiro         = localStorage.getItem('banheiroBanheiro');
  const ContduchaHigienciaBanheiro   = localStorage.getItem('duchaHigienciaBanheiro');

  const ConttorneiraServicos         = localStorage.getItem('torneiraServicos');
  const ContlavaRoupasServicos       = localStorage.getItem('lavaRoupasServicos');

  const ConttorneiraExterno          = localStorage.getItem('torneiraExterno');
  const ContpiscinaExterno           = localStorage.getItem('piscinaExterno');
  const ContirrigacaoExterno         = localStorage.getItem('irrigacaoExterno');
  const ContlavagemCarroExterno      = localStorage.getItem('lavagemCarroExterno');

  const contPessoasnacasa            = localStorage.getItem('pessoasnacasa');
  const contContaAgua                = localStorage.getItem('valcontaagua');
  const contContaCons                = localStorage.getItem('valcontaCons');

  const currentPage                  = window.location.pathname;

  if (currentPage.includes('resultados.html')){
       calcularResultado ();
  }

  if (currentPage.includes('index.html')){
    if (contPessoasnacasa   !== null)   { document.getElementById('qtdPessoas').value   = contPessoasnacasa;  }
    if (contContaAgua       !== null)   { document.getElementById('valConta').value     = contContaAgua;      }
    if (contContaCons       !== null)   { document.getElementById('valCons').value      = contContaCons;      }
  }

  // ************ COZINHA ************//////
  if (currentPage.includes('cozinha.html')){
    if (conteudoTornCoz   !== null)   { document.getElementById('tornCoz').value = conteudoTornCoz; }
    if (conteudoLavLocCoz !== null)   { document.getElementById('lavLouc').value = conteudoLavLocCoz;}

  }
  // ************ BANHEIRO ************//////
  if (currentPage.includes('banheiro.html')){ 
    if (ConttorneiraBanheiro         !== null) { document.getElementById('tornBan').value     = ConttorneiraBanheiro; }
    if (ContchuveiroEletricoBanheiro !== null) { document.getElementById('chuvEleBan').value  = ContchuveiroEletricoBanheiro; }
    if (ContchuveiroGasBanheiro      !== null) { document.getElementById('chuvGasBan').value  = ContchuveiroGasBanheiro; }
    if (ContvasoBanheiro             !== null) { document.getElementById('vasoBan').value     = ContvasoBanheiro; }
    if (ContbanheiroBanheiro         !== null) { document.getElementById('banheiraBan').value = ContbanheiroBanheiro; }
    if (ContduchaHigienciaBanheiro   !== null) { document.getElementById('duchaHigBan').value = ContduchaHigienciaBanheiro; }
  }
  // ************ SERVICOS ************//////
  if (currentPage.includes('servicos.html')){
    if (ConttorneiraServicos   !== null) { document.getElementById('tornServ').value    = ConttorneiraServicos; }
    if (ContlavaRoupasServicos !== null) { document.getElementById('lavRoupServ').value = ContlavaRoupasServicos; }
  }
  // ************ EXTERNO ************//////
  if (currentPage.includes('externo.html')){
    if (ConttorneiraExterno     !== null) { document.getElementById('tornExt').value   = ConttorneiraExterno; }
    if (ContpiscinaExterno      !== null) { document.getElementById('piscExt').value   = ContpiscinaExterno;  }
    if (ContirrigacaoExterno    !== null) { document.getElementById('irrigExt').value  = ContirrigacaoExterno; }
    if (ContlavagemCarroExterno !== null) { document.getElementById('lavCarExt').value = ContlavagemCarroExterno; }
  }
}


function calcularResultado (){
  numbTornCoz                  = (localStorage.getItem('TorneirasCozinha'))         *  30;
  numbLavLocCoz                = (localStorage.getItem('LavaLoucasCozinha'))        *  1; 

  numbtorneiraBanheiro         = (localStorage.getItem('torneiraBanheiro'))         * 5;
  numbchuveiroEletricoBanheiro = (localStorage.getItem('chuveiroEletricoBanheiro')) * 20;
  numbchuveiroGasBanheiro      = (localStorage.getItem('chuveiroGasBanheiro'))      * 30;
  numbvasoBanheiro             = (localStorage.getItem('vasoBanheiro'))             * 2;
  numbbanheiroBanheiro         = (localStorage.getItem('banheiroBanheiro'))         * 1;
  numbduchaHigienciaBanheiro   = (localStorage.getItem('duchaHigienciaBanheiro'))   * 0.5;

  numbtorneiraServicos         = (localStorage.getItem('torneiraServicos'))         * 9;
  numblavaRoupasServicos       = (localStorage.getItem('lavaRoupasServicos'))       * 30;

  numbtorneiraExterno          = (localStorage.getItem('torneiraExterno'))          * 3;
  numbpiscinaExterno           = (localStorage.getItem('piscinaExterno'))           * 2;
  numbirrigacaoExterno         = (localStorage.getItem('irrigacaoExterno'))         * 0.5;
  numblavagemCarroExterno      = (localStorage.getItem('lavagemCarroExterno'))      * 5;

  numbPessoasnacasa            = localStorage.getItem('pessoasnacasa');
  numbContaAgua                = localStorage.getItem('valcontaagua') ;
  numbContaCons                = localStorage.getItem('valcontaCons') ;

  let total = numbTornCoz + numbLavLocCoz; // soma apenas os itens da cozinha
  total     = total + numbtorneiraBanheiro + numbchuveiroEletricoBanheiro + numbchuveiroGasBanheiro + numbvasoBanheiro + numbbanheiroBanheiro +numbduchaHigienciaBanheiro; // cozinha + banheiro
  total     = total + numbtorneiraServicos + numblavaRoupasServicos; // cozinha + banheiro + serviços
  total     = total + numbtorneiraExterno + numbpiscinaExterno + numbirrigacaoExterno + numblavagemCarroExterno; // cozinha + banheiro + serviços + externo

  let totalConsumo   = (total) * numbPessoasnacasa * 30; // multiplica o total pelo numero de pessoas e pelo numero de dias
  totalConsumo       = totalConsumo/1000;                // divide por 1000 para transformar de litros para metros cubicos

  let numIdealCusto  = (totalConsumo) * (numbContaAgua/numbContaCons);

  if (isNaN(numIdealCusto)) numIdealCusto = 0;
  
  let celVolReal   = document.getElementById("volReal");
  let celvolIdeal  = document.getElementById("volIdeal");
  let celcustReal  = document.getElementById("custoReal");
  let celcustIdeal = document.getElementById("custoIdeal");

  celVolReal.textContent   = numbContaCons;
  celVolReal.textContent  += ' m³';

  let numeroArredondado1   = totalConsumo.toFixed(2);

  celvolIdeal.textContent  = numeroArredondado1;
  celvolIdeal.textContent  += ' m³';

  celcustReal.textContent  = numbContaAgua;
  celcustReal.textContent += ' R$';

  let numeroArredondado2   = numIdealCusto.toFixed(2);
  celcustIdeal.textContent = numeroArredondado2;
  celcustIdeal.textContent += ' R$';

  console.log('totalConsumo: ', totalConsumo);
  console.log('numIdealCusto: ', numIdealCusto);
}
