import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import HeaderPainel from '../../components/HeaderPainel';
import './styles.css';

Modal.setAppElement('#root');
function Paineis(painel) {
    const [paineis, setPaineis] = useState([]);
    const history = useHistory();
    //---Editar---
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [cd, setCodigo] = useState('');
    const [cl, setCliente] = useState('');
    const [desc, setDescricao] = useState('');
    const [mont, setMontador] = useState('');
    const [num, setNum_pedido] = useState('');
    const [ord, setOrdem] = useState('');
    const [data, setDt_pedido] = useState('');
    const [val, setValor] = useState('');
    const [obs, setObservacao] = useState('');
    //------------
    

    function deletarPainel(_id) {
        fetch('http://localhost:3001/paineis/' + _id, {
            method: "DELETE"

        }).then(() => {
            alert('Painel deletado com sucesso!');

            history.go(0);
            //window.location.reload();
        }).catch(() => {
            alert('Erro ao deletar painel!');
            history.go(0);
        })
    }

    function updatePainel(_id) {
        const codigo = cd || painel.codigo
        const cliente = cl || painel.cliente
        const descricao = desc || painel.descricao
        const montador = mont || painel.montador
        const num_pedido = num || painel.num_pedido
        const ordem = ord || painel.ordem
        const dt_pedido = data || painel.dt_pedido
        const valor = val || painel.valor
        const observacao = obs || painel.observacao

        fetch('http://localhost:3001/paineis/edit/' + _id, {
            method: 'PUT',
            body: JSON.stringify({ codigo, cliente, descricao, montador, num_pedido, ordem, dt_pedido, valor, observacao }),
            headers: new Headers({
                'Content-type': 'application/json',
                'Accept': 'application/json'
            })
        })
        .then(res => res.json())
        .then(() => { history.go(0) })
        .catch(() => {
            console.log('erro ao conectar-se com api');
        })
    }


    useEffect(() => {
        fetch('http://localhost:3001/paineis')
            .then(res => res.json())
            .then(data => setPaineis(data, ...paineis));
    }, [])

    return (
        <div className='wrapper'>
            <h2>Paineis atualmente cadastrados</h2>
            <HeaderPainel />
            <div className='paineis'>
                {
                paineis.map(painel => {
                    return (
                        <div key={painel._id} className='card tudo'>
                            <div className='card-body painel-body'>
                            <h5 className='codigo'>{painel.codigo} </h5>
                            <h5 className='cliente'>{painel.cliente} </h5>
                            <h5 className='desc'>{painel.descricao} </h5>
                            <h5 className='mont'>{painel.montador} </h5>
                            <h5 className='num'>{painel.num_pedido} </h5>
                            <h5 className='ordem'>{painel.ordem} </h5>
                            <h5 className='date'>{painel.dt_pedido} </h5>
                            <h5 className='val'>{painel.valor} </h5>
                            <h5 className='obs'>{painel.observacao} </h5>
                            <button className='btn btn-danger deletar' onClick={() => deletarPainel(painel._id)}>Deletar</button>
                            <button className='btn btn-primary editar2' onClick={()=>{setModalIsOpen(true)}}>Editar</button>
                            
                            <Modal key={painel._id} isOpen={modalIsOpen} ariaHideApp={false} contentLabel="Selected Option" onRequestClose={()=>setModalIsOpen(false)}>
                            <h1>Insira os novos dados:</h1>
                            <input type='number' value={cd || painel.codigo} onChange={(e) => setCodigo(e.target.value)}></input>
                            <input type='text' value={cl || painel.cliente} onChange={(e) => setCliente(e.target.value)}></input>
                            <input type='text' value={desc || painel.descricao} onChange={(e) => setDescricao(e.target.value)}></input>
                            <input type='text' value={mont || painel.montador} onChange={(e) => setMontador(e.target.value)}></input>
                            <input type='number' value={num || painel.num_pedido} onChange={(e) => setNum_pedido(e.target.value)}></input>
                            <input type='text' value={ord || painel.ordem} onChange={(e) => setOrdem(e.target.value)}></input>
                            <input type='date' value={data || painel.dt_pedido} onChange={(e) => setDt_pedido(e.target.value)}></input>
                            <input type='number' value={val || painel.valor} onChange={(e) => setValor(e.target.value)}></input>
                            <input type='text' value={obs || painel.observacao} onChange={(e) => setObservacao(e.target.value)}></input>
                            <br />
                            <button className='btn btn-success mt-3' onClick={() => updatePainel(painel._id)}>Salvar</button>
                            <button className='btn btn-danger ml-2 mt-3' onClick={()=>{setModalIsOpen(false)}}>Voltar</button>
                            </Modal>
                            </div>
                        </div>
                    )
                })
                }
                <a className='ml-4 mt-4' href='/paineis/add'><button className='btn btn-success btn-add'>Adicionar</button></a>
            </div>
        </div>
    );
}

export default Paineis;