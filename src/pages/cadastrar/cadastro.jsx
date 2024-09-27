import { useState } from 'react'
import './cadastro.scss'

import axios from 'axios'



export default function Cadastrar() {
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState(false);
    const [descricao, setDescricao] = useState('');
    const [zeroAcucar, setZeroAcucar] = useState(false);
    const [diet, setDiet] = useState(false);
    const [preco, setPreco] = useState('');


    async function salvar() {
        const paramCorpo = {
            "nome": nome,
            "categoria": categoria,
            "descricao": descricao,
            "zeroAcucar": zeroAcucar,
            "diet": diet,
            "preco": preco
        }

        const url = 'http://localhost:5020/produto';
        let resp = await axios.post(url, paramCorpo);

        alert('Produto adicionado ao catálogo. Id: ' + resp.data.novoId);
    }


    return (
        <div className='pagina-cadastrar'>
            <h1> CADASTRAR </h1>


            <div className='form'>
                <div>
                    <label>Nome do Produto:</label>
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label>É Salgado?</label>
                    <input type='checkbox' checked={categoria} onChange={e => setCategoria(e.target.checked)} />
                </div>
                <div>
                    <label>Descrição:</label>
                    <input type='text' value={descricao} onChange={e => setDescricao(e.target.value)} />
                </div>
                <div>
                    <label>É Zero Açucar?</label>
                    <input type='checkbox' checked={zeroAcucar} onChange={e => setZeroAcucar(e.target.checked)} />
                </div>
                <div>
                    <label>É Diet?</label>
                    <input type='checkbox' checked={diet} onChange={e => setDiet(e.target.checked)} />
                </div>
                <div>
                    <label>Preço:</label>
                    <input type='text' value={preco} onChange={e => setPreco(e.target.value)} />
                </div>
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    )
}