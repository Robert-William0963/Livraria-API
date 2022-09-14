import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Head, Logo } from './styles';

function Header() {
    return (
        <>
            <Head>
                <Logo>Minha Livraria</Logo>
                <Link to={'/'}>
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Head>
        </>
    );
}

export default Header;
