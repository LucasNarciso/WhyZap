import styled from 'styled-components';



////////////////////  -----  CSS | APP.JS  -----  ////////////////////

/*Div responsável pelo background e alinhamento*/
export const DivGLobal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.3em;
  height: 100%;
  width: 100%;
  background-color: #128C7E;
`

/*Div que armazena a div de menasgens e os inputs*/
export const DivPrincipal = styled.div`
  background-color: #ECE5DD;
  border: 0.3em solid #075E54 ;
  border-radius: 0.3em;
  margin-bottom: 1em;
  padding: 0.2em;
`

/*Div que armazena as mensagens que forem enviadas*/
export const DivChat = styled.div`
  height: 23em;
  width: auto;
  overflow: auto;
  color: black;
  padding: 0.2em;

  /*Personaliza a Calha da Barra de rolagem */
  ::-webkit-scrollbar {
    width: 0.20em;
    height: 0.45em;
    background-color: transparent;
  }

  /*Personaliza a Barra de Rolagem*/
  ::-webkit-scrollbar-thumb {
    background: #075E54;
    border-radius: 1em;
  }
`

/*Input do usuário que ta enviando a mensagem*/
export const InputUsuario = styled.input`
  border-radius: 0.3em;
  width: 8em;
  height: 1.5em;
  border: 0.2em solid #075E54;
  background-color: #D8F6C7;
  margin-right: 0.25em;
`

/*Input da Mensagem que vai ser enviada*/
export const InputMensagem = styled.input`
  border-radius: 0.3em;
  width: 50em;
  height: 1.5em;
  border: 0.2em solid #075E54;
  background-color: #D8F6C7;
  margin-right: 0.2em;
`

/*Botão que envia as mensagens*/
export const BotaoEnviar = styled.button`
  border-radius: 0.3em;
  width: 5em;
  height: 2.1em;
  border: 0.2em solid #075E54;
  background-color: #D8F6C7;

  /*Parte do Hover do botão*/
  :hover{
    background-color: #075E54;
    color: white;
    cursor: pointer;
  }
`


////////////////////  -----  CSS | MENSAGEM.JS  -----  ////////////////////


/*Div da mensagem enviada pelo próprio usuario, mudando a cor e o alinhamento*/
export const DivMensagemEu = styled.div`
  background-color: #24D166;
  border-radius: 1em;
  max-width: 25em;
  width: fit-content;
  text-align: left;
  margin-left: auto;
`

/*Div da mensatem enviada*/
export const DivMensagem = styled.div`
  background-color: white;
  border-radius: 1em;
  max-width: 25em;
  width: fit-content;
  text-align: left;
`

/*Tag p do texto enviado na mensagem*/
export const Texto = styled.p`
  padding: 0.5em;
  font-size: 0.8em;
  word-break: break-all;
`

/*Tag p do usuário da mensagem*/
export const Remetente = styled.p`
    padding: 0.5em 0em 0em 0.5em;
    margin-bottom: -1em;
    margin-right: 0.5em;
    font-size: 0.8em;
    font-weight: bolder;
`


////////////////////  -----  CSS | ALERTA.JS  -----  ////////////////////

/*Div que cria o alinhamento correto do alerta*/
export const DivAlerta = styled.div`
  height: 100%;
  width: 100%;
  margin: 0em;
  position: absolute;
  display: flex;
  justify-content: center;
`

/*Div geral do Alerta*/
export const DivInternaAlerta = styled.div`
  width: 25em;
  height: fit-content;
  margin-top: 0.5em;
  max-height: 10em;
  background-color: #7DC7AE;
  border-radius: 0.5em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0em 0.2em 0.5em black;
`

/*Div que envolve e limita a mensagem*/
export const AlertaDivMensagem = styled.div`
  font-size: 0.8em;
  background-color: #0D3B2C;
  border-radius: 0.5em;
  max-height: 7em;
  padding: 0em 0.5em;
  max-width: 27em;
  margin-top: 0.3em;
`

/*Div que Personaliza a mensagem*/
export const AlertaMensagem = styled.div`
  font-size: 0.8em;
  width: auto;
  max-height: 7em;
  padding: 0em 1em;
  max-width: 27em;
  overflow: auto;
  word-break: break-all;
  margin: 0.5em;

  /*Personaliza a Calha da Barra de rolagem */
  ::-webkit-scrollbar {
  width: 0.4em;
  }

  /*Personaliza a Barra de Rolagem*/
  ::-webkit-scrollbar-thumb {
    background: white;
  }
`

/*Título do Alerta*/
export const AlertaTitulo = styled.p`
  margin: 0.3em;
  color: black;
`

/*Div dos botões do Alerta*/
export const AlertaDivBotoes = styled.div`
  display: flex;
  justify-content: end;
  padding: 0em 1em;
  width: 22em;
  margin: 0.3em;
`

/*Div do botão OK do Alerta*/
export const AlertaBotaoOk = styled.button`
  background-color: #D8F6C7;
  border-radius: 0.3em;
  border: 0.1em solid #0D3B2C;
  margin: 0em 0.2em;

  /*Parte do Hover do botão*/
  :hover{
    cursor:pointer;
    background-color: #0D3B2C;
    color: white;
  }
`

/*Div do botão CANCELAR do Alerta*/
export const AlertaBotaoCancelar = styled.button`
  background-color: #D8F6C7;
  border-radius: 0.3em;
  border: 0.1em solid #0D3B2C;
  margin: 0em 0.2em;

  /*Parte do Hover do botão*/
  :hover{
    cursor:pointer;
    background-color: #0D3B2C;
    color: white;
  }
`