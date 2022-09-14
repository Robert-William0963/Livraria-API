import React, { useState } from 'react';
import api from '../../services/api';
import { Titulo, Nav, Form } from './styles';
import Header from '../header';

function FormLivro() {
    const [livro, setLivro] = useState('');
    const [edit, setEditora] = useState('');
    const [paginas, setPaginas] = useState('');

    function handleAddBook() {
        api.post('/livros', {
            titulo: livro,
            editora: edit,
            autor: '63068add1d3e1eea77fd28f9',
            numeroPaginas: paginas,
        })
            .then((response) => {
                alert('Livro cadastrado com sucesso');
            })
            .catch((error) => {
                alert('Erro ao cadastrar o livro');
            });

        // Script para adicionar um novo livros
    }

    return (
        <>
            <Header />
            <Nav>
                {' '}
                <Titulo>Adicionar novo livro</Titulo>
                <Form onSubmit={handleAddBook}>
                    <span>Nome do Livro:</span>
                    <input
                        value={livro}
                        onChange={(e) => setLivro(e.target.value)}
                        placeholder="Digite o nome do livro"
                    />
                    <span>Nome da Editora:</span>
                    <input
                        value={edit}
                        onChange={(e) => setEditora(e.target.value)}
                        placeholder="Digite o nome da editora"
                    />
                    <span>Número de Páginas:</span>
                    <input
                        value={paginas}
                        onChange={(e) => setPaginas(e.target.value)}
                        placeholder="Digite o número de páginas"
                    />
                    <div>
                        <button type="submit">Cadastrar</button>
                    </div>
                </Form>
            </Nav>
        </>
    );
}

export default FormLivro;
