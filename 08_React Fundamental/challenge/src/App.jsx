import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  let bahasa = "bekasi";
  const namaAnakKelas = [
    {
      id: 1,
      name:"muchson"
    },
    {
      id: 2,
      name:"Hanafi"
    },
    {
      id: 3,
      name:"Krisna"
    },
    {
      id: 4,
      name:"Ardian"
    }
  ];
  const tampil = () => {
    // Fungsi yang akan dieksekusi saat tombol diklik
  };
    return (
      <>
        <h1>Ini adalah halam APP</h1>
        {/* pemanggilan components navbar */}
         <NavBar name={"john"}/>

         {/* fungsi map */}
         <ul>
          {namaAnakKelas.map(nama => (
            <h3>{nama.name}</h3>
          ))}
         </ul>

         {/* button ternary */}
         <button onClick={tampil}>
          {bahasa == "indonesia" ? "tombol" : "button"}
         </button>
         
         
      </>
    )
  }
  
  export default App