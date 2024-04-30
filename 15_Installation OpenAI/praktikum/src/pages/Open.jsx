import { useEffect, useState } from 'react';

function Open() {
  const [respond, setRespond] = useState('');
  const [prompt, setPrompt] = useState('');
  
  const dataKelasB = [
    {
      'Nama Panggilan': 'nazar',
      'Email Address': 'nazaryosa@gmail.com',
      'Ekspektasi Nilai': 8,
      'Cara belajar': 'melihat video tutorial, kalo baca, ngantuk malahan'
    },
    {
      'Nama Panggilan': 'raska / nebras',
      'Email Address': 'nabraskaamarilys@gmail.com',
      'Ekspektasi Nilai': 10,
      'Cara belajar': 'lihat video, baca referensi/modul'
    },
    // Tambahkan data peserta kelas B lainnya sesuai kebutuhan
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const promptAwal =
      'kamu adalah seorang wali kelas B yang tahu semua kepribadian peserta didik. tolong jawab berdasarkan data yang di masukkan';
    const API_KEY = 'Bearer sk-proj-hn1B5WPCLgy1EiH51cCNT3BlbkFJ6ZgbujjE01A35MzpyoLP'; // Ganti YOUR_OPENAI_API_KEY dengan kunci API Anda
    const APIBody = {
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: `${promptAwal} + list peserta didik dan kepribadian : ${JSON.stringify(dataKelasB)} + pertanyaan dari user${prompt}`
        }
      ]
    };

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': API_KEY
        },
        body: JSON.stringify(APIBody)
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      console.log(data);
      setRespond(data.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Contoh Pembuatan Customer Service Kampus Merdeka Class B</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="prompt">Enter your prompt:</label>
        <textarea id="prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        <button type="submit">Send to OpenAI</button>
      </form>
      {respond}
    </div>
  );
}

export default Open;
