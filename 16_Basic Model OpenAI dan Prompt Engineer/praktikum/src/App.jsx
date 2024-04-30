import { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";

function App() {
  const [respond, setRespond] = useState();
  const [error, setError] = useState(null);
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    // const openai = new OpenAI(apiKey);
  }, []);

  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
  const dataKelasB = [
    {
      "Nama Panggilan": "nazar",
      "Email Address": "nazaryosa@gmail.com",
      "Ekspektasi Nilai": 8,
      "Cara belajar": "melihat video tutorial, kalo baca, ngantuk malahan",
    },
    {
      "Nama Panggilan": "raska / nebras",
      "Email Address": "nabraskaamarilys@gmail.com",
      "Ekspektasi Nilai": 10,
      "Cara belajar": "lihat video, baca referensi/modul",
    },
    {
      "Nama Panggilan": "henry",
      "Email Address": "henrykusuma@students.amikom.ac.id",
      "Ekspektasi Nilai": 9,
      "Cara belajar":
        "Bebas tapi kalo ditanya saya cuma akan menjawab sebisanya",
    },
    {
      "Nama Panggilan": "Hanafi",
      "Email Address": "hanafi.afwan.syahnuri@gmail.com",
      "Ekspektasi Nilai": 8,
      "Cara belajar":
        "Bebas bertanya kak, selagi bisa saya jawab akan saya jawab",
    },
    {
      "Nama Panggilan": "Acil",
      "Email Address": "miftahulacil0608@gmail.com",
      "Ekspektasi Nilai": 9,
      "Cara belajar":
        "Repetitive di materi yang belum dipahami. Belajar mandiri jika sudah mentok baru bertanya",
    },
    {
      "Nama Panggilan": "hilmi",
      "Email Address": "hilmiyahya825@gmail.com",
      "Ekspektasi Nilai": 9,
      "Cara belajar": "pelan - pelan yg penting paham",
    },
    {
      "Nama Panggilan": "alfian/ipan",
      "Email Address": "alfian.iqbal07@gmail.com",
      "Ekspektasi Nilai": 9,
      "Cara belajar":
        "lebih suka memperhatikan lalu praktek sendiri, tanya jawab lebih nyaman japri/face to face, dan menonton tutorial",
    },
    {
      "Nama Panggilan": "Agung",
      "Email Address": "agustinushenan01@gmail.com",
      "Ekspektasi Nilai": 10,
      "Cara belajar":
        "Ka kalau bisa yang santai saja biar apabila terima materi tidak tertekan.",
    },
    {
      "Nama Panggilan": "alif/alipo",
      "Email Address": "alifagsaklih4@gmail.com",
      "Ekspektasi Nilai": 8,
      "Cara belajar":
        "Baca dokumentasi di web, liat youtube pak dhika wpu, tanya temen suhu, berdoa agar belajar dipermudah, bebas boleh ditanya di kelas tapi jangan yg kayak dadakan mas wkwk, suka diajak ngobrol",
    },
    {
      "Nama Panggilan": "krisna",
      "Email Address": "krisnawa@student.unud.ac.id",
      "Ekspektasi Nilai": 8,
      "Cara belajar":
        "cara belajar yang lebih suka memperhatikan cara kerja mentor dan kemudian mengaplikasikannya secara langsung dan selain itu dengan menonton tutorial dari youtube atau sumber lain.",
    },
    {
      "Nama Panggilan": "raisal/rais/sal",
      "Email Address": "raisal.ahmad@mail.ugm.ac.id",
      "Ekspektasi Nilai": 9,
      "Cara belajar":
        "Belajar mandiri (eksplorasi) dengan deadline tugas yang jelas, akan lebih bagus kalau dituntut pada proyek-proyek pribadi.",
    },
  ];
  const handleSubmit = async (e) => {
    //menyambungkan ke Open ai dan memasukkan prompt
    e.preventDefault();
    const promptAwal =
      "kamu adalah seorang wali kelas B yang tahu semua kepribadian peserta didik. tolong jawab berdasarkan data yang di masukkan";
    // ini adalah cara setting open ai
    const APIBody = {
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: `${promptAwal} + list peserta didik dan kepribadian : {
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
          {
            'Nama Panggilan': 'henry',
            'Email Address': 'henrykusuma@students.amikom.ac.id',
            'Ekspektasi Nilai': 9,
            'Cara belajar': 'Bebas tapi kalo ditanya saya cuma akan menjawab sebisanya'
          },
          {
            'Nama Panggilan': 'Hanafi',
            'Email Address': 'hanafi.afwan.syahnuri@gmail.com',
            'Ekspektasi Nilai': 8,
            'Cara belajar': 'Bebas bertanya kak, selagi bisa saya jawab akan saya jawab'
          },
          {
            'Nama Panggilan': 'Acil',
            'Email Address': 'miftahulacil0608@gmail.com',
            'Ekspektasi Nilai': 9,
            'Cara belajar': 'Repetitive di materi yang belum dipahami. Belajar mandiri jika sudah mentok baru bertanya'
          },
          {
            'Nama Panggilan': 'hilmi',
            'Email Address': 'hilmiyahya825@gmail.com',
            'Ekspektasi Nilai': 9,
            'Cara belajar': 'pelan - pelan yg penting paham'
          },
          {
            'Nama Panggilan': 'alfian/ipan',
            'Email Address': 'alfian.iqbal07@gmail.com',
            'Ekspektasi Nilai': 9,
            'Cara belajar':
              'lebih suka memperhatikan lalu praktek sendiri, tanya jawab lebih nyaman japri/face to face, dan menonton tutorial'
          },
          {
            'Nama Panggilan': 'Agung',
            'Email Address': 'agustinushenan01@gmail.com',
            'Ekspektasi Nilai': 10,
            'Cara belajar': 'Ka kalau bisa yang santai saja biar apabila terima materi tidak tertekan.'
          },
          {
            'Nama Panggilan': 'alif/alipo',
            'Email Address': 'alifagsaklih4@gmail.com',
            'Ekspektasi Nilai': 8,
            'Cara belajar':
              'Baca dokumentasi di web, liat youtube pak dhika wpu, tanya temen suhu, berdoa agar belajar dipermudah, bebas boleh ditanya di kelas tapi jangan yg kayak dadakan mas wkwk, suka diajak ngobrol'
          },
          {
            'Nama Panggilan': 'krisna',
            'Email Address': 'krisnawa@student.unud.ac.id',
            'Ekspektasi Nilai': 8,
            'Cara belajar':
              'cara belajar yang lebih suka memperhatikan cara kerja mentor dan kemudian mengaplikasikannya secara langsung dan selain itu dengan menonton tutorial dari youtube atau sumber lain.'
          },
          {
            'Nama Panggilan': 'raisal/rais/sal',
            'Email Address': 'raisal.ahmad@mail.ugm.ac.id',
            'Ekspektasi Nilai': 9,
            'Cara belajar':
              'Belajar mandiri (eksplorasi) dengan deadline tugas yang jelas, akan lebih bagus kalau dituntut pada proyek-proyek pribadi.'
          } + pertanyaan dari user${prompt}`,
        },
      ],
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_KEY,
          },
          body: JSON.stringify(APIBody),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();
      console.log(data);
      setRespond(data.choices[0].message.content);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center">
        Contoh Pembuatan Customer Service Kampus Merdeka Class B
         with Model & Prompt Engineer
      </h1>
      <div className=" p-5  shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] rounded-lg mt-4 h-96">
        <div className="h-72">{respond}</div>
        <div className=" mt-4 ml-4">
          <form onSubmit={handleSubmit}>
            <input
              className="border rounded-full p-2 h-8 w-[1000px]"
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button className="bg-blue-900 text-white p-2 rounded-full ml-5" type="submit"><IoSend/></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
