import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import SubMenu from './SubMenu';

function SidebarData(){

    useEffect(() =>{
        get_courses();
    }, []);

    const [courses, setCourses] = useState([]);

    const get_courses = async () => {
        await Axios.get(`http://localhost:3001/course`).then((response) =>{
            console.log(response.data);
            setCourses(response.data);
        }).catch((error) =>{
            console.log(error);
        })
    }

    let array_courses = [];
    array_courses.push(courses);
    console.log(array_courses);
    const InfoSidebarData = [
        {
            title: 'Courses',
            path: '/course',
            
            subNav: array_courses
        },
    ];
    console.log(InfoSidebarData);
    return (
        <SubMenu item={InfoSidebarData[0]} key="1" />
    );
    
}

export default SidebarData;