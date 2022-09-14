import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import View from '../pages/view';
import List from '../pages/list';
import Deleta from '../pages/deleta';
import Cadastro from '../pages/cadastro';

const RoutesApp: React.FC = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listAll" element={<List />} />
        <Route path="/view/:books/:editora/:paginas" element={<View />} />
        <Route path="/deleta/:books" element={<Deleta />} />
    </Routes>
);

export default RoutesApp;
