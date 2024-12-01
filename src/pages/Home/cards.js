export function levantamentoCard() {
    return(

      
        
`       <div style="background-color: aquamarine;height:700px ;" class="card" id="levantamentoCard">
<form>
 <center>
 <h2>Levantamento Bancario</h2>
 
  <br><br>
   
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
      font-family: Arial, sans-serif;
    }

    a {
      text-decoration: none;
    }

    .botao-personalizado {
      display: inline-block;
      padding: 15px 30px;
      font-size: 1.2rem;
      font-weight: bold;
      color: white;
      background: linear-gradient(135deg, #007bff, #0056b3);
      border: none;
      border-radius: 50px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }

    .botao-personalizado:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }

    .botao-personalizado:active {
      transform: translateY(0);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  </style>
</head>
<body>
  <a href="levantamento.html" class="botao-personalizado">Fazer Levantamento Express</a>
  <br><br><br>
  <a href="#" class="botao-personalizado">Fazer Levantamento Express</a>





 <button class="close-button" id="closeLevantamentoButton">Fechar</button>

</div>`

    )
}

export function depositoCard() {
    return(
`        <div class="card" id="depositoCard">
            <h2>Como Fazer Depósito</h2>
            <p>Para fazer um depósito, siga os passos abaixo:</p>
            <ol>
                <li>Selecione o método de depósito desejado (BAI, BCI, Multicaixa Express, Unitel Money).</li>
                <li>Transfira o valor desejado para a conta correspondente:</li>
                <ul>
                    <li><strong>BAI:</strong> 004000001048279110128</li>
                    <li><strong>BCI:</strong> 000500006937168510197</li>
                    <li><strong>Multicaixa Express:</strong> 942957859</li>
                    <li><strong>Unitel Money:</strong> 926240472</li>
                </ul>
                <li>Envie o comprovativo de depósito para nosso WhatsApp<a href="https://wa.me/message/UXP2RUG7MF4RB1" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a>
            </ol>
            <button class="close-button" id="closedepositoCard">Fechar</button>
        </div>`
    )
}

export function registosCard(data) {
    let [user] = data;
    return(
`    <div class="card" id="registosCard">
        <h2>Historico de retirada</h2>
        <p>Nenhum historico de momento</p>
        
        <ol>
            
        <button class="close-button" id="closeregistosCard">Fechar</button>
     </div>`
    )
}


export function meuBancoCard() {
    
    return(
        `<div class="card" id="meuBancoCard">
        <center>
        <h2>REALIZAR TAREFA</h2>
            <p>realiza tarefa para receber sua recompensa diaria :</p>
            <ol>
            <BR><BR>
           
            <a href="tarefa.html">FAZER TAREFA</a>
            </ol>
            <button class="close-button" id="closemeuBancoCard">Fechar</button>
        </div>`
    )
}


export function meuVIPCard() {
    return (
        `<div class="card" id="meuVIPCard">
            <h2>Escolha o VIP que deseja subir </h2>
             <h2> Quanto maior o vip maior será o seu ganho diario </h2>
            <ul class="litVip">
                <li class="titleList"><strong>CLIENTE VIP</strong></li>
               
                <li>CLIENTE VIP1 - 3.000 kwanzas/ -ganho diário 200 kwanzas prazo/ 180 DIAS GANHO TOTAL-12.000 KWANZAS</li>
                <li>CLIENTE VIP2 - 8.000 kwanzas/ -ganho diário 300 kwanzas prazo / 180 DIAS GANHO TOTAL-36.000 KWANZAS</li>
                <li>CLIENTE VIP3 - 18.000 kwanzas/ -ganho diário 700 kwanzas prazo / 180 DIAS GANHO TOTAL-72.000 KWANZAS</li>
                <li>CLIENTE VIP4 - 25.000 kwanzas/ -ganho diário 1700 kwanzas prazo / 180 DIAS GANHO TOTAL-180.000 KWANZAS</li>
                
                <li>
                    <a href="https://wa.me/244926240472?text=Ola+senhor+Wiliam+gostaria+de+fazer+um+investimeno+e+este+é+o+meu+comprovativo+obrigado🎉🎉🎉🎉🎉"><button class="depositeButton" id="">Fazer o Deposito</button></a>
                </li>
            </ul>
            <div class="divButtons">
                <button class="close-button" id="closemeuVIPCard">Fechar</button>
            </div>
            </div>`
    )
}


export function minhasComissoesCard() {
    
    return(
        `<div class="card" id="minhasComissoesCard">
            <h2>Como convidar amigo</h2>
            <b>Para convidar um amigo copia o seu link de convite:</b>
            <ol>
                <li>copia o link abaixo</li>
                <i style="color: #3498db;">angomoney.netlify.app</i>
                <li>Basta enviar este link para os seus amigos e vc ganhará uma </li>
                <li>recompesa de 20% do valor que eles vão envestir </li>
            </ol>
            <button class="close-button" id="minhasComissoesCard">Fechar</button>
        </div>`
    )
}

export function subirDeVipCard() {
    
    return(
 `       <div class="card" id="subirDeVipCard">
           
 
   
    <button class="close-button" id="closeSubirVipCard">Fechar</button>
</div>



            <button class="close-button" id="closeSubirVipCard">Fechar</button>
        </div>`
    )
}