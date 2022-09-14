import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import { BooksInfo, Relacionados } from './style';
import Header from '../../components/header';

interface arrayBook {
    titulo: string;
    numeroPaginas: number;
    editora: string;
    autor: string;
}
interface arrayAutores {
    nacionalidade: string;
    nome: string;
}

const View: React.FC = () => {
    const { editora } = useParams();
    const { books } = useParams();
    const { paginas } = useParams();

    const [relacionado, setRelacionado] = useState<arrayBook[]>(() => {
        const storagedBooks = localStorage.getItem(
            '@LivrariaBook:ListRelacionados',
        );

        if (storagedBooks) {
            return JSON.parse(storagedBooks);
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem(
            '@LivrariaBook:ListRelacionados',
            JSON.stringify(relacionado),
        );
    }, [relacionado]);

    useEffect(() => {
        api.get(`/livros/busca?editora=${editora}`).then((res) => {
            const rel = res.data;

            setRelacionado(rel);
        });
    }, [editora]);

    const [autores, setAutor] = useState<arrayAutores[]>(() => {
        const storagedBooks = localStorage.getItem('@LivrariaBook:ListAutores');

        if (storagedBooks) {
            return JSON.parse(storagedBooks);
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem(
            '@LivrariaBook:ListAutores',
            JSON.stringify(autores),
        );
    }, [autores]);

    useEffect(() => {
        api.get(`/autores/${books}`).then((res) => {
            const dados = res.data;

            setAutor(dados);
        });
    }, [books]);

    // const [inputError, setInputError] = useState('');

    return (
        <>
            <Header />

            <BooksInfo>
                <header>
                    <img src="https://avatars.githubusercontent.com/u/57403088?v=4" />
                    <div>
                        <strong>Livro</strong>
                        <p>Autor:</p>
                        <p>Nacionalidade:</p>
                    </div>
                </header>
                <div>
                    <Link to={`/deleta/${books}`}>
                        <a>Remover Livro</a>
                    </Link>
                    <Link to={'/cadastro'}>
                        {' '}
                        <a>Atualizar Livro</a>
                    </Link>
                </div>
                <ul>
                    <li>
                        <strong>{paginas}</strong>
                        <span>Paginas</span>
                    </li>
                    <li>
                        <strong>{editora}</strong>
                        <span> Editora</span>
                    </li>
                    <li></li>
                </ul>
            </BooksInfo>

            <Relacionados>
                <h1>Relacionados:</h1>
                {relacionado.length > 0 &&
                    relacionado.map((item, key) => (
                        <Link
                            key={key}
                            to={`/view/${item.autor}/${item.editora}/${item.numeroPaginas}`}
                        >
                            <img
                                src="https://avatars.githubusercontent.com/u/57403088?v=4"
                                alt={item.autor}
                            />
                            <div>
                                <strong>Titulo: {item.titulo}</strong>
                                <p> Editora: {item.editora}</p>
                                <p>Num. Páginas: {item.numeroPaginas}</p>
                            </div>
                            <FiChevronRight size={20} />
                        </Link>
                    ))}
            </Relacionados>
        </>
    );
};

export default View;

/*
    async function loadData(): Promise<void> {
            const [livro] = await Promise.all([api.get('/livros')]);

            const resul = livro.data;
            setlistBook(resul);
        }
        loadData();

         api.get('/livros').then((res) => {
            const response = res.data;



             <h1>Autor: {listAutor?.nome}</h1>
            <h2>Nacionalidade: {listAutor?.nacionalidade}</h2>
            <h1>Autor: {listBook?.titulo}</h1>

        }); */
