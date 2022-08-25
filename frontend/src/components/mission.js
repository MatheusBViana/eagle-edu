import React from 'react';
import '../styles/curso.css';
import '../styles/assuntos.css';
import '../styles/mission.css';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

import {Container, Row, Col} from 'react-bootstrap';

function Mission(){
    const navigate = useNavigate();

    useEffect(() =>{
        get_missions();
    }, []);
    
    const subject_id = window.location.href.substring(window.location.href.lastIndexOf('?') + 1);

    const [missions, setMissions] = useState([]);

    const get_missions = async () => {
        await Axios.get(`http://localhost:3001/${subject_id}/missao`).then((response) =>{
            // console.log(response.data);
            let missions_availables = response.data.filter(mission => mission.answered == false); 
            console.log(missions_availables[0])
            setMissions(missions_availables[0]);
        }).catch((error) =>{
            console.log(error);
        })
    }

    const finish_mission = async () => {
        let updated_mission = {
            id: missions.id,
            title: missions.title,
            answered: true,
            AssuntoId: missions.AssuntoId
        }
        console.log(updated_mission);
        const response = await Axios.put('http://localhost:3001/missao', updated_mission);
        navigate(-1);
        console.log(response);
    }


    let retorno = '';
    if(missions){
        console.log(missions);
        retorno = 
        <div className="mission" key={missions.id}>
            <img className="mission-img" src={missions.img}/>
            <p className="mission-text">{missions.title}</p>
            <p onClick={finish_mission} className="button-finish">Finalizar Tarefa</p>
        </div>
    }

    return (
        <Container className="mission-window">
            <Container className="white-window">
                <Container className="mission-content">
                    {retorno}
                </Container>
            </Container>
        </Container>
    )
}

export default Mission;