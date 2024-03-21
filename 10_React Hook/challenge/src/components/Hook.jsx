import React, { useState } from "react";

export default function Hook() {
  const [username, setUsername] = useState('');
  const [array, setArray] = useState(['henry', 'hilmi']);
  const [buttonText, setButtonText] = useState('button');
  const [counter, setCounter] = useState(0);

  const handleChangeInput = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    setArray([...array, username]);
    setUsername(''); // Mengosongkan nilai input setelah submit
  };

  const handleClick = () => {
    if (buttonText === 'button') {
      setButtonText('tombol');
    } else {
      setButtonText('button');
    }
    setCounter(prevCounter => prevCounter + 2);
  };

  return (
    <>
    <button onClick={handleClick}>{buttonText}</button>
    <span>: {counter}</span>
    <input value={username} onChange={handleChangeInput} type="text" />
    <button onClick={handleSubmit}>Submit</button>
    <p>{username}</p>
    <ul>
        {array.map((value, index) => (
            <li key={index}>{value}</li>
        ))}
    </ul>
    </>
  );
}
