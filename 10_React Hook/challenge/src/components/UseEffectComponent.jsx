import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
  const [name, setName] = useState("");
  const [small, setSmall] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  useEffect(() => {
    console.log("UseEffect selalu berjalan tanpa kurung siku");

    if (name === "swiper" || name.length > 5) {
      console.log("Swiper jangan mencuri woi");
      setSmall(true);
    } else {
      setSmall(false);
    }
  }, [name]); // Perlu ditambahkan dependensi name agar useEffect hanya dipanggil saat name berubah

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      {small ? <small >Input terlalu panjang</small> : <small></small>}
    </>
  );
};

export default UseEffectComponent;
