import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './style.css';
import api from '../../services/api';
//const history = useHistory('');




export default function Home() {
   
    const [Data, setData] = useState([]);
    const [type, settype] = useState([]);

    //const userId = localStorage.getItem('userId');
    useEffect(() => {
        api.get('/pokemon?offset=10&limit=10').then(response => {
            setData(response.data['results']);
        });
        api.get('/type').then(response => {
            settype(response.data['results']);
        })
    });

    function getlist(num, limit){
        api.get(`/pokemon?offset=${num}&limit=${limit}`).then(response => {
            this.setState({
                Data : this.Data.value + response.data['results']
            })
  
        });
       
    }

    // function handleLogout(){
    //     localStorage.clear();

    //     history.push('/');
    // }



    return (
        <div className="home-container">

            <div className="content">
                <header>

                    <Link className="button-login" to="/Details">Login</Link>
                </header>
                <form className="form" action="">
                    <input type="text" placeholder="Pesquisar"
                    />
                    <button className="button search"><FaSearch /></button>
                </form>
                <section className="content-grid">
                    <ul >
                        {
                            Data.map((data, index) => (
                                <li key={index}>
                                    <h3>{data.name}</h3>
                                    <Link className="detail-btn" to={`/details/${data.name}`}>
                                        Detalhes
                                      </Link>
                                </li>

                            ))
                        }
                    </ul>
                    <button className="button" type="button">
                        Mais..
                            </button>
                </section>
                <section className="content-grid space">
                    <h2>Tipos</h2>
                    <ul >
                        {
                            type.map(data => (
                                <li key={data.name}>
                                    <h3>{data.name}</h3>
                                </li>

                            ))
                        }
                    </ul>

                </section>
            </div>
        </div>
    );

}
