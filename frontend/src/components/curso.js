import React from 'react';
// import Assuntos from './assuntos';
import '../styles/curso.css';
import '../styles/assuntos.css';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

import {Container, Row, Col} from 'react-bootstrap';

function Course(){
    useEffect(() =>{
        handle_curso();
    }, []);
    const [subjects, setSubjects] = useState([]);

    const [stateSidebar, setstateSidebar] = useState(localStorage.getItem('sidebar'));
    setInterval(() => setstateSidebar(localStorage.getItem('sidebar')), 50);


    const handle_curso = async () =>{
        await Axios.get("http://localhost:3001/curso/1/assunto").then((response) =>{
            console.log(response.data);
            setSubjects(response.data);
        }).catch((error) =>{
            console.log(error);
        })
    }

    
    console.log(subjects);

    let retorno = '';
    if(subjects){
        retorno = subjects.map(item => 
        <div className="assunto-div" key={item.id}>
            <img className="assunto-icone" src={item.img}/>
            <br/>
            <br/>
            <Link to={`/mission/${item.title}?${item.id}`} className="titulo-assunto">{item.title}</Link>
            <div className="barra-progresso">
                <div className="progresso-concluido" style={{width: `${item.progress}%`}}><p>{item.progress}%</p></div>
            </div>
        </div>
        );
    }
    return (
        <Container className={`janela-curso-${stateSidebar}`}>
            <Container className="info-curso">
                <Container className="info-curso-content">
                    {retorno}
                </Container>
            </Container>
        </Container>
    )
}

export default Course;