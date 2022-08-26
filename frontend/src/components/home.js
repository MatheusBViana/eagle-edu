import React from 'react';
import '../styles/curso.css';
import '../styles/assuntos.css';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

import {Container, Row, Col} from 'react-bootstrap';

function Home(){
    const [stateSidebar, setstateSidebar] = useState(localStorage.getItem('sidebar'));
    setInterval(() => setstateSidebar(localStorage.getItem('sidebar')), 50);
    console.log(stateSidebar);
    return (
        <Container className={`janela-curso-${stateSidebar}`}>
            <Container className="info-curso">
                <Container className="info-curso-content">
                    <p>Bem vindo!</p>
                </Container>
            </Container>
        </Container>
    )
}

export default Home;