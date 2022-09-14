import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../../services/api';
import { Titulo, Nav, Form, Error } from './styles';
import FormLivro from '../../components/form-livro';
import Header from '../../components/header';

const Cadastro: React.FC = () => {
    const [autor, setAutor] = useState('');
    const [origem, setOrigem] = useState('');
    const [inputError, setInputError] = useState('');
    const [preenchido, setPreenchido] = useState('');
    const [sucesso, setSucesso] = useState({});

    function handleAddBook() {
        api.post('/autores', {
            nome: autor,
            nacionalidade: origem,
        })
            .then((response) => {
                setInputError('');
                setSucesso('Cadastrado com sucesso!');
                alert('Autor cadastrado com sucesso');
            })
            .catch((error) => {
                setInputError(error);
                setInputError(`Erro ao cadastrar ator: ${error}`);
            });

        if (!autor && !origem) {
            setInputError('Por favor, preencha todos os campos');
        } else {
            setPreenchido('Preenchido corretamente');
        }

        // Script para adicionar um novo livros
    }

    return (
        <>
            {preenchido.length ? (
                <FormLivro />
            ) : (
                <>
                    <Header />
                    <Nav>
                        {' '}
                        <Titulo>Adicionar novo autor</Titulo>
                        <Form hasError={!!inputError} onSubmit={handleAddBook}>
                            <span>Nome do Autor:</span>
                            <input
                                value={autor}
                                onChange={(e) => setAutor(e.target.value)}
                                placeholder="Digite o nome do autor"
                            />
                            <span>Nacionalidade do Autor:</span>
                            <input
                                value={origem}
                                onChange={(e) => setOrigem(e.target.value)}
                                placeholder="Digite a nacionalidade"
                            />
                            <div>
                                <button type="submit">Cadastrar Autor</button>
                            </div>{' '}
                        </Form>{' '}
                        {inputError && <Error>{inputError}</Error>}
                    </Nav>
                </>
            )}
        </>
    );
};

export default Cadastro;
