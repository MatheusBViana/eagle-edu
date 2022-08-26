import React from 'react';
import '../styles/curso.css';
import '../styles/assuntos.css';
import {useEffect, useState} from 'react';
import {useRef} from 'react';

import Axios from 'axios';
import {Link} from 'react-router-dom';
// import Subject from './subject';
import {Container, Row, Col} from 'react-bootstrap';

function Course(){
    

    const [subject_id, setsubject_id] = useState(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
    console.log(subject_id);
    const [subjects, setSubjects] = useState([]);
    const [stateSidebar, setstateSidebar] = useState(localStorage.getItem('sidebar'));
    setInterval(() => setstateSidebar(localStorage.getItem('sidebar')), 2000);
    setInterval(() => setsubject_id(window.location.href.substring(window.location.href.lastIndexOf('/') + 1), 2000));
    useEffect(() =>{
        handle_curso();
    }, [2000]);

    const handle_curso = async () =>{
        await Axios.get(`http://localhost:3001/curso/${subject_id}/assunto`).then((response) =>{
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
    console.log(subjects.length);
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