import { mainContainer } from "../../../main.js";
import navigate from "../../../routes.js";
function Wellcome(){
    mainContainer.innerHTML = wellCamePAge();
    const buttonLogin = mainContainer.querySelector("#logButton");
    const cadastroButton = mainContainer.querySelector("#cadastroButton");
    buttonLogin.addEventListener("click", ()=>{
        navigate("/login");
    })
    cadastroButton.addEventListener("click", ()=>{
        navigate("/cadastro");
    })
}
export default Wellcome;

function wellCamePAge(params) {
    return(
        
        `<section class="containerGeneral">
    
            <div class="contentWell">
                    
            <h1>ELETROCOIN</h1> 
                
            <br>    
       
            <i class="bi bi-cash-coin"></i>
 
                <span>Negociação em criptomedas</span><br>
                <a href="https://wa.me/message/6I7TVDFVTECEA1">Suporte</a>

                <div class="buttonsLog">
                    <button id="logButton">Entrar</button>
                    <button id="cadastroButton">Cadastre-se</button>
                </div>
                <span>Juntar-se ao grupo dos investidores  </span><br>
               <span><a href="https://chat.whatsapp.com/Krzy3Q87fUZ77A02D9a98l"target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a> </span><br>
               
               
               
                    <br>
                    <br>
                     <a href="eletrocoins.apk" download>descaregar apk da eletrocoins </a>

            </div>
        
           
        </section>
        `
    );
}
