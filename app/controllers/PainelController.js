const Painel = require('../models/Painel');

class PainelController{
    //Funções

    async create(req, res){
        //Criar painel
        
        const {codigo, cliente, descricao, montador, num_pedido, ordem, dt_pedido, valor, observacao} = req.body;

        try{
            const createdPainel = await Painel.create({codigo, cliente, descricao, montador, num_pedido, ordem, dt_pedido, valor, observacao});
            
            console.log('Painel criado com sucesso!');
            return res.status(200).json(createdPainel);
        }catch(err){
            console.log('Falha ao criar painel!');
            return res.status(400).json(err);
        }

    }
    async index (req,res){
        //Lista paineis

        try{
            const paineis = await Painel.find();

            return res.status(200).json(paineis);
        }catch(err){
            console.log('Falha ao listar paineis');
            return res.status(400).json(err);
        }
    }
    async edit (req,res){
        //Edita painel
        
        const {_id} = req.params;

        try{
            const edited = await Painel.updateOne({_id}, req.body).exec();

            console.log('Mudanças salvas com sucesso!')
            return res.status(200).json(edited)
        }
        catch(err){
            console.log('Falha ao salvar painel');
            return res.status(400).json(err)
        }
    }
    async delete (req, res){
        //Deltar painel

        const {_id} = req.params;

        try{
            const deleted = await Painel.deleteOne({_id});

            console.log('Painel deletado com sucesso!');
            return res.status(200).json(deleted);
        }
        catch(err){
            console.log('Erro ao deletar painel!');
            return res.status(400).json(err);
        }
    }
    async showOne (req, res){
        //Listar Um

        const {_id} = req.params;

        try{
            const single = await Painel.findOne({_id}, req.body).exec();

            return res.status(200).json(single)
        }
        catch(err){
            console.log('Erro ao listar painel!');
            return res.status(400).json(err);
        }     
    }

}


module.exports = new PainelController();