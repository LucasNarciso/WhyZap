import React from 'react';

/*Styled Components*/
import { DivAlerta, DivInternaAlerta, AlertaMensagem, AlertaTitulo, AlertaDivBotoes, AlertaDivMensagem, AlertaBotaoOk, AlertaBotaoCancelar } from '../../Styles/StyledComps';

function Alerta(props) {

    return(
       
        <DivAlerta>
            <DivInternaAlerta>

                <AlertaTitulo> ATENÇÃO! </AlertaTitulo>
                A seguinte mensagem será apagada:

                <AlertaDivMensagem>
                    <AlertaMensagem>{props.mensagem}</AlertaMensagem>
                </AlertaDivMensagem>

                <AlertaDivBotoes>
                    <AlertaBotaoOk onClick={props.confirma}>OK</AlertaBotaoOk>
                    <AlertaBotaoCancelar onClick={props.cancela}>CANCELAR</AlertaBotaoCancelar>
                </AlertaDivBotoes>

            </DivInternaAlerta>
        </DivAlerta>
    )
}

export default Alerta;