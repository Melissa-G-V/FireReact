

import React from "react";
import "./PopEst.css"
import { useState, useEffect } from "react";
import 'firebase/auth';
import 'firebase/firestore';

import { db } from "../cfirebase";
import { collection, getDocs,  query, where  } from "firebase/firestore/lite";

const PopEst = (props, setbuttonPoP, Animais) => {
  const[Stats, setStats] = useState([]);

  const getstats = async (db) => {
    const gatos = []
    const cachorros =[];
    const femeas =[];
    const machos =[];
      const Ref =  collection(db, "Animais");
      const cats = query(Ref, where("raca", "==", "Gato"));
      const dogs = query(Ref, where("raca", "==", "Cachorro"));
      const female = query(Ref, where("genero", "==", "Femea"));
      const male = query(Ref, where("genero", "==", "Macho"));
      const Snapshot = await getDocs(cats);
      const Snapshot2 = await getDocs(dogs);
      const Snapshot3= await getDocs(female);
      const Snapshot4 = await getDocs(male);
      Snapshot.forEach((doc) => {     
        gatos.push({...doc.data(), id: doc.id});
      });
      Snapshot2.forEach((doc) => {     
        cachorros.push({...doc.data(), id: doc.id});
      })
      Snapshot3.forEach((doc) => {     
        femeas.push({...doc.data(), id: doc.id});
      });
      Snapshot4.forEach((doc) => {     
        machos.push({...doc.data(), id: doc.id});
      })
      const all = [gatos.length, cachorros.length, femeas.length, machos.length]
      console.log(all)
      setStats(all);
      console.log(`Gatos: ${gatos.length}\r`);
      console.log(`Cachorros: ${cachorros.length}`);
      console.log(`Femeas: ${femeas.length}`);
      console.log(`Machos: ${machos.length}`);
    };
  
 
  useEffect(() => {
    
    getstats(db);
  }, []);
  return (props.trigger) ? (
    <div className="popup">


     
        <div className="popup-inner">
        <button className="close-btn btn-danger  rounded-circle " onClick={() => props.setTrigger(false)} >X</button>
        {props.children}
              
        <div className="row">
        <div className="col-2">
       <img src="popcatgif.gif" width="100" height="100"></img>
       </div>
       <div className="col ml-1">
       <span className="text-white"> Ops... Talvez não foi uma boa ideia clicar aqui, seu programa quebrou.</span>

       </div>
        </div>
        </div>

    </div>
  ): "";
};

export default PopEst;