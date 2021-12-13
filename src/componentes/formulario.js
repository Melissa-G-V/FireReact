
import React from "react";
import { useForm } from "react-hook-form";
import { db } from "../cfirebase";
import { collection, addDoc } from "firebase/firestore/lite";


const Formulario = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
      } = useForm();
      
    
      const onSubmit = async (data) => {
        const docRef = await addDoc(collection(db, "Animais"), data);
        alert('cadastrado com sucesso:', docRef.id);
        setValue("nome","");
        setValue("comentario","");
        setValue("genero","");
        setValue("idade","");
        setValue("tipo_idade","");
        setValue("foto","");
        setValue("raca","");
        setValue("email","");
        setValue("telefone","");
      }; // your form submit function which will invoke after successful validation
    


  return (
    <div className="container mt-2">
    <form className="card card-body bg-secondary" onSubmit={handleSubmit(onSubmit)}>
    <h5 className="text-white">Formulario:</h5>


    <div className="input-group mb-1">
      <input
        type="text"
        className="form-control border-dark border-2"
        placeholder="Nome"
        {...register("nome", {
            required: true,
            minLength: 3,
          })}
      />
    </div>


    <div className="row">
    <div className="input-group mb-1 col"> 
        <select className="form-control border-dark border-2 py-2" id="genero"
        {...register("genero", {
            required: true,
          })}>
        <option value="">Sexo</option>
      <option value="Femea">Femea</option>
      <option value="Macho">Macho</option>
        </select>
      </div>

      <div className="input-group mb-1 col"> 
        <select className="form-control border-dark border-2 py-2" id="raca" 
        {...register("raca", {
            required: true,
          })}>
      <option value="">Raça</option>
      <option value="Cachorro">Cachorro</option>
      <option value="Gato">Gato</option>
        </select>
      </div>

    </div>
   

    <div className="input-group mb-1">
      <input
        type="foto"
        className="form-control border-dark border-2"
        placeholder="Url Foto"
        {...register("foto", {
            required: true,
            minLength: 10,
          })}
      />
    </div>


    <div className="input-group mb-1">
      <textarea
        rows="2"
        className="form-control border-dark border-2"
        placeholder="Comentario"
        {...register("comentario", {
            required: true,
            minLength: 10,
          })}
      ></textarea>
    </div>



    <div className="row">
    <div className="input-group mb-1 col">
        
      <input
        type="number"
        className="form-control border-dark border-2 py-2"
        placeholder="idade"
        {...register("idade", {
            required: true,
            min: 1,
            max: 10,
          })}
      />
          
    </div>

    <div className="input-group mb-1 col"> 
        <select className="form-control border-dark border-2 py-2" id="tipo_idade"
        {...register("tipo_idade", {
            required: true,
          })}
        >
      <option value="">Filhote/Adulto</option>
      <option value="Ano(s)">Ano(s)</option>
      <option value="Meses">Meses</option>
        </select>
      </div>


    </div>


    <div className="input-group mb-1">
      <input
        type="telefone"
        className="form-control border-dark border-2"
        placeholder="telefone"
        {...register("telefone", {
            required: true,
            minLength: 10,
          })}
      />
    </div>



    <div className="input-group mb-1">
      <input
        type="email"
        className="form-control border-dark border-2"
        placeholder="E-Mail"
        {...register("email", {
            required: true,
            minLength: 10,
          })}
      />
    </div>


    <input
      type="submit"
      value="Cadastrar"
      className="btn btn-warning btn-block"
    />



  </form>
  
  </div>

  );
};

export default Formulario;