
import { useState, useEffect } from "react";
import 'firebase/auth';
import 'firebase/firestore';
import './App.css';
import { db } from "./cfirebase";
import { collection, getDocs,  query, where  } from "firebase/firestore/lite";
import Navbar from './componentes/navbar';
import Formulario from './componentes/formulario';
import Feed from './componentes/feed';
import Filtro from './componentes/filter';
import PopEst from './componentes/PopEst';



function App() {
  const [buttonPoP, setbuttonPoP] = useState(false);
  const[Animais, setAnimal] = useState([]);
  const[Chave, setChave] = useState('');
  const[FiltroAdicional, setFiltroAdicional] = useState('');


  const getanimais = async (db) => {
    const animaisCol = collection(db, "Animais");
    const animaisnapshot = await getDocs(animaisCol);
    const animaisList = animaisnapshot.docs.map((doc) =>
     {
      const id = doc.id;
      const dados = doc.data();
      return{id, ...dados}
    });
    setAnimal(animaisList);
  };






  const StartFilter = async (db) =>{ // começo do filtro por nome ou algo parecido
    const AnimalRef =  collection(db, "Animais"); // pega a coleção do database
    const q = query(AnimalRef, where(FiltroAdicional, "==", Chave)); // pesquisa por query aonde a coluna igual a pesquisa
    const Snapshot = await getDocs(q); // pega os documentos baseados na pesquisa querry
    const Animais2 = []; // array vazio para receber a pesquisa
    Snapshot.forEach((doc) => { // percorre cada um dos dados recebidos
      // doc.data() is never undefined for query doc snapshots
      Animais2.push({...doc.data(), id: doc.id}); // adiciona os dados no array pelo id do documento
      console.log(doc.id, " => ", doc.data()); // testa pra ver se funciona
    })

    console.log(Snapshot) // teste do snapshot
    console.log(Animais2)// teste de array
      setAnimal(Animais2);
    if(Animais2.length == 0){
      alert('Não ha animais com a pesquisa feita');
      getanimais(db)
    }

    }



  useEffect(() => {
    getanimais(db);
    //getstats(db);
    //Teste();
  }, []);

  return (
        <>

        <Navbar/>
        <Formulario/>

      <Filtro 
      StartFilter={StartFilter} 
      setChave={setChave}
      Chave={Chave}
      getanimais={getanimais}
      FiltroAdicional={FiltroAdicional} 
      setFiltroAdicional={setFiltroAdicional}
      setbuttonPoP={setbuttonPoP}
      />
       <Feed Animais={Animais} setAnimal={setAnimal} />
        <PopEst trigger={buttonPoP} Animais={Animais} setTrigger={setbuttonPoP}/>
        </>
  );
}

export default App;
