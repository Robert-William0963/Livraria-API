import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header';
import { Delete, Section } from './styles';

import api from '../../services/api';

const Deleta: React.FC = () => {
    const [deletado, setDeletado] = useState('');
    const { books } = useParams();

    useEffect(() => {
        api.delete(`/livros/${books}`).then((res) => {
            setDeletado('Deletado com sucesso!');
            // console.log(`Deletado com sucesso! ${res}`);
        });
    }, [books]);

    return (
        <>
            <Header />

            {deletado && (
                <>
                    {' '}
                    <Section>
                        <Delete>Deletado com sucesso!</Delete>{' '}
                    </Section>
                </>
            )}
        </>
    );
};

export default Deleta;
