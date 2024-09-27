import { useState } from 'react'
import './consultar.scss'

import axios from 'axios'



export default function Consultar() {
    const [produtos, setProdutos] = useState([]);


    async function buscar() {
        const url = 'http://localhost:5020/produtos';
        let resp = await axios.get(url);
        setProdutos(resp.data);
    }

    

    return (
        <div className='pagina-consultar'>
            <h1> CONSULTAR </h1>

            <button onClick={buscar}>Buscar</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Salgado?</th>
                        <th>Descrição</th>
                        <th>Zero Açucar?</th>
                        <th>Diet?</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {produtos.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.categoria ? 'Sim' : 'Não'}</td>
                            <td>{item.descricao}</td>
                            <td>{item.zeroAcucar ? 'Sim' : 'Não'}</td>
                            <td>{item.diet ? 'Sim' : 'Não'}</td>
                            <td>{item.preco}</td>
                        </tr>
                    )}
                </tbody>

            </table>

           
        </div>
    )
}