import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';

function Adicionar() {
    const history = useHistory();
    const [paineis, setPaineis] = useState([]);
    const [codigo, setCodigo] = useState([]);
    const [cliente, setCliente] = useState([]);
    const [descricao, setDescricao] = useState([]);
    const [montador, setMontador] = useState([]);
    const [num_pedido, setNum_pedido] = useState([]);
    const [ordem, setOrdem] = useState([]);
    const [dt_pedido, setDt_pedido] = useState([]);
    const [valor, setValor] = useState([]);
    const [observacao, setObservacao] = useState([]);


    function addPainel() {
        fetch('http://localhost:3001/paineis/add', {
        method: 'POST',
        body: JSON.stringify({codigo, cliente, descricao, montador, num_pedido, ordem, dt_pedido, valor, observacao}),
        headers: new Headers({
              'Content-type': 'application/json',
              'Accept': 'application/json'
            })
        }).then(()=>{
            alert('Painel cadastrado com sucesso!')

            history.push('/paineis')
        }).catch((err)=>{
            alert('Erro ao adicionar painel!')
            history.push('/')
        });
    }

//tste
    return (
        <div className='card mt-4'>
            <h1 className='ml-3 mt-3'>Prencha os dados do painel:</h1>
            <div className='card-body'>
                <label>Codigo:</label>
                    <input className='form-control' type='number' value={codigo} onChange={(e)=> setCodigo(e.target.value)}></input>
                <label>Cliente:</label>
                    <input className='form-control' type='text' value={cliente} onChange={(e)=> setCliente(e.target.value)}></input>
                <label>Descrição:</label>
                    <input className='form-control' type='text' value={descricao} onChange={(e)=> setDescricao(e.target.value)}></input>
                <label>Montador:</label>
                    <input className='form-control' type='text' value={montador} onChange={(e)=> setMontador(e.target.value)}></input>
                <label>Nº Pedido:</label>
                    <input className='form-control' type='number' value={num_pedido} onChange={(e)=> setNum_pedido(e.target.value)}></input>
                <label>Ordem:</label>
                    <input className='form-control' type='text' value={ordem} onChange={(e)=> setOrdem(e.target.value)}></input>
                <label>Data de Pedido:</label>
                    <input className='form-control' type='date' value={dt_pedido} onChange={(e)=> setDt_pedido(e.target.value)}></input>
                <label>Valor:</label>
                    <input className='form-control' type='number' value={valor} onChange={(e)=> setValor(e.target.value)}></input>
                <label>Observação:</label>
                    <input className='form-control' type='text' value={observacao} onChange={(e)=> setObservacao(e.target.value)}></input>
                <button className='btn btn-success mt-2' onClick={addPainel}>Adicionar Painel</button>
            </div>
        </div>
    );
}

export default Adicionar;