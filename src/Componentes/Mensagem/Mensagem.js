import React from 'react';

/*Styled Components*/
import { DivMensagemEu, DivMensagem, Texto, Remetente } from '../../Styles/StyledComps';


function Mensagem(props) {

    /*Condição que define se a mensagem vai ser alinhada a Esquerda ou Direita dependendo do Usuário*/
    if (props.usuario === "eu") {
        
        //
        return (
            <div onDoubleClick={props.click}>
                <DivMensagemEu>
                    <Texto>
                        {props.texto}
                    </Texto>
                </DivMensagemEu>
            </div>
        )

    }else{

        return (
            <div onDoubleClick={props.click}>
                <DivMensagem>
                    <Remetente>
                        {props.usuario}
                    </Remetente>
                    <Texto>
                        {props.texto}
                    </Texto>
                </DivMensagem>
            </div>
        )
    }
}

export default Mensagem;