import { mainContainer } from "../../../main.js";
import navigate, { sessionControll } from "../../../routes.js";
import { ErrorMessage } from "../../components/message.js";
import { depositoCard, levantamentoCard, meuBancoCard, meuVIPCard, minhasComissoesCard, registosCard, subirDeVipCard } from "./cards.js";

async function Home() { 

    const id = parseInt(localStorage.getItem("session_token"));


        try {
            let getData = await fetch("../../src/server/server.json");
            if(getData.ok){
                let [data] = await getData.json();
                var dataUser = data.users.filter(element=> element.id === id);
                homePage(dataUser);
            } else{
                mainContainer.innerHTML = ErrorMessage(getData.statusText);
                mainContainer.querySelector("#okButton").addEventListener("click", ()=>{window.location.reload()}) 
            }
           } catch (error) {
                navigate("/");
           }

    function homePage(props){
        mainContainer.innerHTML = ViewHome(props);
        ///////////////------------Nav buttons 
        const aboutButton  = mainContainer.querySelector("#aboutButton");
        aboutButton.addEventListener("click", ()=>{
            navigate("/sobre");
        });
        const homeButton  = mainContainer.querySelector("#homeButton");
        homeButton.addEventListener("click", ()=>{
            Home();
        });
        
        const reloadButton  = mainContainer.querySelector("#reloadButton");
        reloadButton.addEventListener("click", ()=>{
            window.location.reload();
        });
        const refreshButton  = mainContainer.querySelector("#refreshButton");
        refreshButton.addEventListener("click", ()=>{
            navigate("/servicos");
        });
        //////////////////-----------Buttons Card
        mainContainer.querySelector("#LevantamentoButton").addEventListener("click", ()=>{
            mainContainer.innerHTML = levantamentoCard();
            mainContainer.querySelector("#closeLevantamentoButton").addEventListener("click", ()=>{Home()});
        });

        mainContainer.querySelector("#depositoButton").addEventListener("click", ()=>{
            mainContainer.innerHTML = navigate("/pagamentos");
            mainContainer.querySelector("#closedepositoCard").addEventListener("click", ()=>{Home()});
        });

        mainContainer.querySelector("#registroButton").addEventListener("click", ()=>{
            mainContainer.innerHTML = registosCard(dataUser);
            mainContainer.querySelector("#closeregistosCard").addEventListener("click", ()=>{Home()});
        });

        mainContainer.querySelector("#meuBancoButton").addEventListener("click", ()=>{
            mainContainer.innerHTML = meuBancoCard();
            mainContainer.querySelector("#closemeuBancoCard").addEventListener("click", ()=>{Home()});
        });

        mainContainer.querySelector("#meuVipButon").addEventListener("click", ()=>{
            mainContainer.innerHTML = meuVIPCard();
            mainContainer.querySelector("#closemeuVIPCard").addEventListener("click", ()=>{Home()});
        });

        mainContainer.querySelector("#comissoesButton").addEventListener("click", ()=>{
            mainContainer.innerHTML = minhasComissoesCard();
            mainContainer.querySelector("#minhasComissoesCard").addEventListener("click", ()=>{Home()});
        });

        mainContainer.querySelector("#subirVipButton").addEventListener("click", ()=>{
            mainContainer.innerHTML = subirDeVipCard();
            mainContainer.querySelector("#closeSubirVipCard").addEventListener("click", ()=>{Home()});
        });
        
        mainContainer.querySelector("#pagamentosButton").addEventListener("click", ()=>{
            navigate("/pagamentos");
        });

        mainContainer.querySelector("#logOutButton").addEventListener("click", ()=>{
            localStorage.removeItem("session_token");
            navigate("/");
        })
    }
}
export default Home;

function ViewHome(user) {
    var [userData] = user;

    return(
        `<div class="container">
        <div class="header">
            <div class="user-info">
                <span>(+244 ) ${userData.telefone}</span>
                <span>ID: ${userData.id} </span>

                
               
               
             
                       
                <span style="text-align:right;font-size:15px">PV: ${userData.pv}</span>
               
                </div>
                
                <h4>DADOS DO CARTÃO</h4>
                <center>
            <div class="saldo">
                     
                <div style="background-color: blueviolet;color: #ddd; width:160px; ">
                <br><br>
                <span>Saldo disponivel</span>
                    <br>
                    <strong>${userData.saldo} <span>KZ</span></strong><br>
                    <br>
                   
                </div>
                <hr>
                <div style="background-color: blueviolet;color: #ddd;width:160px;">
                   <br>
                <span>Levantamento</span>
                    <br>              
                    <strong>${userData.levantamento} <span>KZ</span></strong><br>
                    <br>
                    <span>Estado do levantamento</span>
                    <br>
                    <strong>( ${userData.estado} ) <span></span></strong><br>  
                    
                    </div>
                  
                  
                    </div>
            </div>
        </div>
        <div class="menu">
            
            <div id="LevantamentoButton">
                <i class="fa fa-download"></i>
                <span>Levantamento</span>
            </div>

            <div id="depositoButton">
                <i class="fa fa-bank"></i>
                <span>Deposito</span>
            </div>

            <div id="registroButton">
                <i class="fa fa-gift"></i>
                <span>Historico de retirada</span>
            </div>

            <div id="meuBancoButton">
            <i class="fa fa-book"></i>
                <span>FAZER TAREFA</span>
            </div>

            <div id="meuVipButon">
                <i class="fa fa-mobile"></i>
                <span>Subir de Vip</span>
            </div>

            <div id="comissoesButton">
                <i class="fa fa-users"></i>
                <span>Convidar amigos</span>
            </div>

          
            
            <div id="subirVipButton">
                <i class="fa fa-lock"></i>
                <span>Sobre vip</span>
            </div>

            <div id="pagamentosButton">
                <i class="bi bi-cash-coin"></i>
                <span>Pagamentos</span>
            </div>

            <div id="logOutButton">
                <i class="fa fa-sign-out"></i>
                <span>Sair</span>
            </div>

        </div>
      
        <div class="footer">
            <i class="bi bi-house-fill" id="homeButton"></i>
            <i class="bi bi-arrow-repeat" id="reloadButton"></i>
            <i class="bi bi-journal-medical" id="refreshButton"></i>
            <i class="bi bi-exclamation-lg" id="aboutButton"></i>
        </div>
    </div>`
    )
}