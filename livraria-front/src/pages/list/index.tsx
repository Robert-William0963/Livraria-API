import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { ListBooks, Error, Titulo } from './styles';
import Header from '../../components/header';

interface arrayBook {
    titulo: string;
    numeroPaginas: number;
    editora: string;
    autor: {
        nome: string;
        nacionalidade: string;
    };
}

const List: React.FC = () => {
    const [books, setBooks] = useState<arrayBook[]>(() => {
        const storagedBooks = localStorage.getItem('@LivrariaBook:Listbooks');

        if (storagedBooks) {
            return JSON.parse(storagedBooks);
        }
        return [];
    });

    const [inputError, setInputError] = useState('');

    useEffect(() => {
        localStorage.setItem('@LivrariaBook:Listbooks', JSON.stringify(books));
    }, [books]);

    useEffect(() => {
        async function lista() {
            try {
                const response = await api.get(`livros`);

                setInputError('');

                const listaBook = response.data;

                setBooks(listaBook);
                console.log(books);
            } catch (err) {
                setInputError('Erro na busca');
            }
        }

        lista();
    }, []);

    return (
        <>
            <Header />

            <Titulo>
                <h1>Todos os livros:</h1>
            </Titulo>

            {inputError && <Error>{inputError}</Error>}
            <ListBooks>
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
            </ListBooks>
        </>
    );
};

export default List;
