import { useState, useEffect } from "react";
import Header from "../components/Header"
import HeroFormAccount from "../components/HeroFormAccount"

export default function CreateAccount(){

    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        // Hanya tampilkan pesan sambutan saat komponen pertama kali dimuat
        if (showWelcome) {
        // Set showWelcome menjadi false setelah beberapa waktu (contoh: 3 detik)
        setTimeout(() => {
            setShowWelcome(false);
        }, 3000);
        }
    }, [showWelcome]);

    if(showWelcome){
        return(
            <div className="flex justify-center items-center h-screen ">
                <h1 className="text-6xl text-center">Welcome</h1>
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 ml-6"></div>
            </div>
        )
    }else{

        return(
            <>
            <Header/>
            <HeroFormAccount/>
            </>
        )
    }
}