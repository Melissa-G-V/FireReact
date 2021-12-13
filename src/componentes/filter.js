
import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { db } from "../cfirebase";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { Query } from "@firebase/firestore";



function Filtro({Chave, StartFilter, setChave, getanimais, FiltroAdicional, setFiltroAdicional, setbuttonPoP}) {

//  const [Animal, setAnimal] = useState('');
//  const [searchInput, setSearchInput] = useState('');
//  const searchItems =  (searchValue) => {
//    setSearchInput(searchValue)
//    console.log(searchValue)
//  }




  useEffect(() => {

  }, []);


  return (
    <div className="container-fluid bg-secondary py-3 mt-4">

    <div className="row">
    <div className="col-3">
    <button className="btn btn-block btn-warning" onClick={() => setbuttonPoP(true)}>NotFinished</button>
    </div>


    <div className="col-6">

    <select className="form-control border-dark py-1" id="tipo_filtro"
    value={FiltroAdicional}  onChange={(e) => setFiltroAdicional(e.target.value)}>
      <option value="id">Opção De Filtro</option>
      <option value="idade">idade</option>
      <option value="nome">Nome</option>
      <option value="raca">Especie</option>
      <option value="genero">Genero</option>
      </select>
 

    <input className="form-control " type="text" placeholder="Filtro" value={Chave}  onChange={(e) => setChave(e.target.value)} />
    <button className="btn btn-success btn-block" onClick={() => StartFilter(db)}>Pesquisar</button>
    </div>


      </div>

    </div>


  );
}

export default Filtro;