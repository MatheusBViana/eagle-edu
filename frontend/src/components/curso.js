import React from 'react';
import Assuntos from './assuntos';
import '../styles/curso.css';
import {useEffect, useState} from 'react';
import Axios from 'axios';

import {Container, Row, Col} from 'react-bootstrap';

function Course(){
    useEffect(() =>{
        handle_curso();
    }, []);
    const [items, setItems] = useState([]);

    const handle_curso = async () =>{
        await Axios.get("http://localhost:3001/").then((response) =>{
            console.log(response.data);
            setItems(response.data);
        }).catch((error) =>{
            console.log(error);
        })
    }
    console.log(items);

    let retorno = '';
    if(items){
        retorno = items.map(item => 
        <div className="missao" key={item.idassunto}>
            <img className="assunto-icone" src="https://cdn-icons-png.flaticon.com/512/25/25404.png"/>
            <p className="titulo-assunto">{item.nomeassunto}</p>
            <div className="barra-progresso">
                <div className="progresso-concluido"><p>{item.progresso}/</p></div>
            </div>
        </div>
        );
    }
    return (
        <Container className="janela-curso">
            <Container className="info-curso">
                <Container className="info-curso-content">
                    {retorno}
                </Container>
            </Container>
        </Container>
    )
}

export default Course;