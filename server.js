const app = require('./app/app');

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('Servidor Rodando na porta '+PORT+'...');
})
