const mongoose = require('../database/connection');
const Schema = mongoose.Schema;

//Schema de painel
const PainelSchema = new mongoose.Schema({
    codigo: {
        type: Number,
        requires: true
    },
    cliente: {
        // type: Schema.Types.ObjectId,
        // ref: 'clientes',
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    montador: {
        type: String,
        required: true
    },
    num_pedido: {
        type: Number,
        required: true
    },
    ordem: {
        type: String,
        required: true
    },
    dt_pedido: {
        type: String,
        required: true
    },
    // dt_previsao: {
    //     type: String,
    //     required: true
    // },
    valor: {
        type: Number,
        required: true
    },
    observacao: {
        type: String,
        required: true
    }
},
{timestamps: true})


const Painel = mongoose.model('Painel', PainelSchema);
module.exports = Painel;