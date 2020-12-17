import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles.css';

function Landing() {
    return (
        <div className="jumbotron main-jumbotron mt-5">
            <h1 className="display-5">Bem vindo!</h1>
            <p className="lead">App desenvolvido com Node.Js + Handlebars + MongoDb</p>
            <hr className="my-4"/>
            <a className="btn btn-lg mr-2 mt-2" role="button">Sair</a>
            <p>Crie uma conta ou faça login para começar.</p>
            <a className="btn btn-lg mr-2 mt-2"role="button">Entrar</a>
            <a className="btn btn-lg mt-2"role="button">Crie uma conta</a>
        </div>
    );
}

export default Landing;