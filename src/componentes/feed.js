
import React from "react";
import { db } from "../cfirebase";
import { doc, deleteDoc} from "@firebase/firestore/lite";



const Feed = ({Animais, setAnimal}) => {


  const ExcluirA = async (id,nome) =>{
    if(window.confirm(`confirma a exclusão do ${nome} ?`)){
      await deleteDoc(doc(db,"Animais",id));
      const Animais2 = Animais.filter((Animal)=> Animal.id !== id);
      setAnimal(Animais2);
    }
  }




  return (

    <div className="container-fluid mt-2">
    <h2>Lista de animais:</h2>
  

      <div className="card-columns">
      {Animais.map((Animal)=>(
        <div className="card mt-4 " key={Animal.id}>
          
          <div className="card-title text-center text-white bg-primary">
            <h4>{Animal.nome}</h4>
            
          </div>

          <div className="card-body bg-dark">
         
           <img className="card-img" src={Animal.foto} alt="Card image cap"/>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">Idade: {Animal.idade} {Animal.tipo_idade}</li>
            <li className="list-group-item">Sexo: {Animal.genero}</li>
            <li className="list-group-item">{Animal.raca} </li>
            <li className="list-group-item">Comentario: {Animal.comentario}</li>
            <li className="list-group-item">Meu contato: {Animal.telefone}</li>
            <li className="list-group-item">Meu email: {Animal.email}</li>
            </ul>
      
          <div className="card-footer text-center d-flex justify-content-between bg-warning text-muted">
          <i className="fas fa-trash-alt fa-lg" onClick={()=>ExcluirA(Animal.id, Animal.nome)}></i>
         
          </div>
          </div>
        </div>

      ))}

    </div>
    </div>

  );
};

export default Feed;