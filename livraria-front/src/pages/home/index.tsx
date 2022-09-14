import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Logo, Form, Books, Error, Menu, Nav } from './styles';
import api from '../../services/api';

interface arrayBook {
    titulo: string;
    numeroPaginas: number;
    editora: string;
    autor: {
        nome: string;
        nacionalidade: string;
    };
}

const Home: React.FC = () => {
    const [newBook, setNewBook] = useState('');
    const [books, setBooks] = useState<arrayBook[]>(() => {
        const storagedBooks = localStorage.getItem('@LivrariaBook:book');

        if (storagedBooks) {
            return JSON.parse(storagedBooks);
        }
        return [];
    });
    const [inputError, setInputError] = useState('');

    useEffect(() => {
        localStorage.setItem('@LivrariaBook:book', JSON.stringify(books));
    }, [books]);

    async function handleAddBook(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        // Adiçao de um novo repositório
        event.preventDefault();

        if (!newBook) {
            setInputError('Digite uma Editora para Busca');
            return;
        }

        try {
            const response = await api.get(`/livros/busca?editora=${newBook}`);

            setInputError('');

            const listaBook = response.data;

            setBooks(listaBook);
        } catch (err) {
            setInputError('Erro na busca por essa editora');
        }
    }

    return (
        <>
            <Nav>
                {' '}
                <Logo>Minha Livraria</Logo>
                <Form hasError={!!inputError} onSubmit={handleAddBook}>
                    <input
                        value={newBook}
                        onChange={(e) => setNewBook(e.target.value)}
                        placeholder="Digite o nome da editora"
                    />
                    <button type="submit">Pesquisar</button>
                </Form>
                {inputError && <Error>{inputError}</Error>}
            </Nav>

            <Menu>
                <a href={'/listAll'}>Todos os Livros</a>
                <a href={'/cadastro'}>
                    <BiPlus size={25} />
                    Adicionar um Livro
                </a>
            </Menu>

            <Books>
                {books.length > 0 &&
                    books.map((item, key) => (
                        <Link
                            key={key}
                            to={`/view/${item.autor}/${item.editora}/${item.numeroPaginas}`}
                        >
                            <img
                                src="https://avatars.githubusercontent.com/u/57403088?v=4"
                                alt={item.titulo}
                            />
                            <div>
                                <strong>Titulo: {item.titulo}</strong>
                                <p> Editora: {item.editora}</p>
                                <p>Num. Páginas: {item.numeroPaginas}</p>
                            </div>
                            <FiChevronRight size={20} />
                        </Link>
                    ))}
            </Books>
        </>
    );
};

export default Home;
