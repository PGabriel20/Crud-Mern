const routes = require('express').Router();
const PainelController = require('../controllers/PainelController');


//Rotas
routes.get('/', (req, res) => {
    res.json({msg: 'Rota principal'});
})

routes.get('/paineis', PainelController.index);
routes.get('/paineis/:_id', PainelController.showOne);
routes.post('/paineis/add', PainelController.create);
routes.put('/paineis/edit/:_id', PainelController.edit);
routes.delete('/paineis/:_id', PainelController.delete);


module.exports = routes;