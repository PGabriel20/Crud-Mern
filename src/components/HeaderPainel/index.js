import React from 'react';
import './styles.css';

function HeaderPainel(){
    return(
        <div className='header-painel'>
            <div className='inner-header-painel ml-4'>
                <li><h6>Código</h6></li>
                <li><h6>Cliente</h6></li>
                <li><h6>Descrição</h6></li>
                <li><h6>Montador</h6></li>
                <li><h6>Nº Pedido</h6></li>
                <li><h6>Ordem</h6></li>
                <li><h6>Data Pedido</h6></li>
                <li><h6>Valor</h6></li>
                <li><h6>Observação</h6></li>
                <li className="editar"><h6>Editar</h6></li>
                <li className="deletar"><h6>Deletar</h6></li>
            </div>
        </div>
    )
}

export default HeaderPainel;