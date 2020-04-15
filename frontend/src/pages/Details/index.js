import React, { useState, useEffect } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


import api from '../../services/api'
import './style.css';
//const history = useHistory('');

export default function Details(props) {
    const [Data, setData] = useState([]);


    let { name } = useParams();

    console.log('nome.....' + name);
    useEffect(() => {
        api.get(`/pokemon/${name}`).then(response => {
            setData(response.data);

            console.log(response.data);
        });
    });

    // function handleLogout(){
    //     localStorage.clear();

    //     history.push('/');
    // }



    return (
        <div className="detail-container">

            <div className="content">
                <header>

                    <Link className="button-login" to="/">Voltar</Link>
                    
                </header>
                <div className="texto">
                <h1>Detalhes</h1>
                </div>

                <section className=" aba-det">


                    {

                        <div>
                            <h2>{Data.name}</h2>
                            <h3>Experiencia base: {Data.base_experience}</h3>
                            <h3>Largura: {Data.weight}</h3>
                            <h3>Altura: {Data.height}</h3>
                        </div>
                    
                    
                    
                    
                    
                    
                    }

                    <ul>


                    </ul>
                </section>
            </div>
        </div >
    );

}