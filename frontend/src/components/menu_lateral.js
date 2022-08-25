import React from 'react';  
import '../styles/menu_lateral.css';
import Axios from 'axios';
import styled from 'styled-components';

function Menu(){



    const handle_curso = async () =>{
        await Axios.get("http://localhost:3001/").then((response) =>{
            console.log(response.data);
        }).catch((error) =>{
            console.log(error);
        })
    }
    return(
        <div className="menu-lateral">
            <div className="menu-lateral-content">
                <p onClick={handle_curso}>Painel de Controle</p>
                <div className="menu-lateral-botao-cursos">
                    Cursos <span className="bi-book"></span>
                </div>
            </div>
        </div>
    )
}

export default Menu;