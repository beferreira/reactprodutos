import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastrar from "./pages/cadastrar/cadastro.jsx";
import Consultar from "./pages/consultar/consultar.jsx";

export default function Navegacao(){

    return(

        <BrowserRouter>
            <Routes>
              
              <Route path='/consultar' element={<Consultar />} />
              <Route path='/cadastrar' element={<Cadastrar />} />
         </Routes>
      </BrowserRouter>

    )

}