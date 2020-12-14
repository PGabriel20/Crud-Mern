import React, { useEffect, useState } from 'react';
import api from '../../services/api';



function Paineis() {
    const [paineis, setPaineis] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/paineis')
        .then(res=>res.json())
        .then(data => setPaineis(data));
    },[])



    return (
        <div>
            <h1>Paineis Cadastrados</h1>
            <button className='btn btn-success' >Adicionar</button>
            <div className='paienis'>
                {
                paineis.map(painel=>{
                    return(
                        <div>
                            <div>Codigo:{painel.codigo} </div>
                            <div>Cliente:{painel.cliente} </div>
                            <div>Descição:{painel.descricao} </div>
                            <div>Número do pedido:{painel.num_pedido} </div>
                            <div>Ordem:{painel.ordem} </div>
                            <div>Data do pedido:{painel.dt_pedido} </div>
                            <div>Valor:{painel.valor} </div>
                            <br/>   
                        </div>
                    )
                })
                }

            </div>
        </div>
    );
}

export default Paineis;