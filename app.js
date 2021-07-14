const livros = require('./database')
console.log(livros )

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis: ')
    console.log('Suspense', '/ Tecnologia', '/ Budismo', '/ Ficção histórica', '/ Épico')

    const entradaCategoria = readline.question('Qual categoria você escolhe?')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}else{
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis: ')
    console.table(livrosOrdenados)
}

