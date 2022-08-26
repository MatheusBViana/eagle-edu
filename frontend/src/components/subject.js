import React from 'react';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';


function Subject(props){

    console.log(props);
    const [item, setItems] = useState([]);

    useEffect(() =>{
        handle_curso();
    }, []);
    const handle_curso = async () =>{
        await Axios.get(`http://localhost:3001/curso/${props.id_subject}/assunto`).then((response) =>{
            console.log(response.data);
            setItems(response.data);
        }).catch((error) =>{
            console.log(error);
            setItems([]);
        })
    }
        
    return(
        <div>

        {item.map(iten => (
            <div className="assunto-div" key={iten.id}>
            <img className="assunto-icone" src={iten.img}/>
            <br/>
            <br/>
            <Link to={`/mission/${iten.title}?${iten.id}`} className="titulo-assunto">{iten.title}</Link>
                <div className="barra-progresso">
                    <div className="progresso-concluido" style={{width: `${iten.progress}%`}}><p>{iten.progress}%</p></div>
                </div>
            </div>
        ))}
        </div>
        // <div className="assunto-div" key={item.id}>
        //     <img className="assunto-icone" src={item.img}/>
        //     <br/>
        //     <br/>
        //     <Link to={`/mission/${item.title}?${item.id}`} className="titulo-assunto">{item.title}</Link>
        //     <div className="barra-progresso">
        //         <div className="progresso-concluido" style={{width: `${item.progress}%`}}><p>{item.progress}%</p></div>
        //     </div>
        // </div>
    )
    
}

export default Subject;