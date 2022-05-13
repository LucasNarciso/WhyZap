import React from 'react';

/*Componentes*/
import Mensagem from './Componentes/Mensagem/Mensagem';
import Alerta from './Componentes/Alerta/Alerta';

/*Styled Components*/
import { DivGLobal, DivPrincipal, DivChat, InputMensagem, InputUsuario, BotaoEnviar } from './Styles/StyledComps';

//////////  Funcionalidades Extras  //////////
/*

  1 - Na função responsável por enviar as mensagens, foi criada uma condição para evitar Flood de mensagens.
        - Basicamente uma condição que evita o envio de mensagens com usuário e texto vazios.

  2 - O alerta de exclusão de mensagens foi criado a partir de um componente.
        - Esse alerta mostra a mensagem exata que foi selecionada para excluir;
        - Possui também os botões de OK e CANCELAR;
        - E evita que o usuário consiga selecionar ou enviar outra mensagem até que seja ecolhida uma opção do alerta.

*/
/////////////////////////////////////////////

class App extends React.Component {

  state = {

    usuarioInput: "",
    textoInput: "",
    mensagens: [
      {usuario: "Flávio", texto: "teste", id: "1232321"}
    ],
    
    alerta: [],
    alertaID: ""

  };

  /*Função que atualiza o campo de Usuário*/
  onChangeUsuario = (event) => {
    this.setState({ usuarioInput: event.target.value });
  };

  /*Função que atualiza o campo de Texto*/
  onChangeTexto = (event) => {
    this.setState({ textoInput: event.target.value });
  };

  /*Função que envia uma nova mensagem*/
  enviaMensagem = () => {

    /*Parte responsável por criar um novo objeto (mensagem)*/
    const novaMensagem ={
      usuario: this.state.usuarioInput,
      texto: this.state.textoInput,
      id: Math.random()
    };

    /*Condição criada para evitar flood de mensagens*/
    if ( !(this.state.usuarioInput === "" || this.state.textoInput === "")) {
      
      const novasMensagens = [...this.state.mensagens, novaMensagem];
      this.setState({ mensagens: novasMensagens });
      
      this.setState({
        textoInput: ""
      });
    }

  };

  /*Função que remove a mensagem pelo id passado por parâmetro*/
  removeMensagem = (idMensagem) => {

    const mens = this.state.mensagens.filter((men) => {
      return idMensagem !== men.id;
    });

    this.setState({ mensagens: mens });

  };

  //Função que cria o Alerta para a tela
  chamaAlerta = (idMensagem) => {

    //Aqui a mensagem escolhida para ser apagada é selecionada
    const mensagem = this.state.mensagens.filter((men) => {
      return idMensagem === men.id;
    });

    //Aqui se cria um alerta com o texto da mensagem a ser apagada
    const novoAlerta ={
      texto: mensagem.map((men) => {return men.texto;})
    };

    //Aqui o ID da mensagem escolhida é armazenado no state
    this.setState({ alertaID: idMensagem})

    //Aqui o vetor de objetos do State recebe o novo Alerta
    const criarAlerta = [...this.state.alerta, novoAlerta];
    this.setState({ alerta: criarAlerta });
  }

  //Função acionada ao pressionar OK no alerta
    //chama a função pra finalmente apagar a mensagem
  confirmaAlerta = () => {
    this.removeMensagem(this.state.alertaID);
    this.apagaAlerta();
  }

  //Função acionada ao pressionar CANCELAR no alerta
    //Ela apaga o alerta do vetor
  apagaAlerta = () => {
    const criarAlerta = [];
    this.setState({ alerta: criarAlerta });
  }

  render() {

    /*Método responsável por renderizar o alerta*/
    const chamarAlerta = this.state.alerta.map((alert) => {

      return(
        <Alerta cancela={() => {this.apagaAlerta()}} confirma={() => {this.confirmaAlerta()}} mensagem={alert.texto}>
            
        </Alerta>
      )
      
    });

    /*Método responsável por renderizar as novas mensagens*/
    const chat = this.state.mensagens.map((men) => {
      return(
        <Mensagem click={() => {this.chamaAlerta(men.id)}} key={men.id} usuario={men.usuario} texto={men.texto}>

        </Mensagem>
      );
    });

    /*Método responsável por enviar as mensagens pressionando Enter*/
    this.handleKeyPress = (e) => {
      if(e.key === 'Enter'){
        this.enviaMensagem();
      }
    }

    /*Return Principal*/
    return (
      <DivGLobal>
  
        <p>WhyZap</p>

        {chamarAlerta}

        <DivPrincipal>
      
          <DivChat>
            {chat}
          </DivChat>

          <InputUsuario onChange={this.onChangeUsuario} value={this.state.usuarioInput} onKeyPress={this.handleKeyPress}></InputUsuario>

          <InputMensagem onChange={this.onChangeTexto} value={this.state.textoInput} onKeyPress={this.handleKeyPress}></InputMensagem>

          <BotaoEnviar onClick={this.enviaMensagem}> 
            Enviar 
          </BotaoEnviar>

        </DivPrincipal>
  
      </DivGLobal>
    );
  }
}

export default App;
