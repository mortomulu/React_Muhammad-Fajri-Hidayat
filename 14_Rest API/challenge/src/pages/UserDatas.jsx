import { useEffect, useState } from "react";
import axios from "axios";

export default function UserDatas() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState('')
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://660fae5c356b87a55c52079b.mockapi.io/todo"
      );
      setUsers(response.data);
    } catch (error) {
      console.error(error.massage);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function handleSubmitPost(event) {
    event.preventDefault();
    if(id){
        const data = {
            name,
            age,
          };
          try {
            const response = await axios.put(
              `https://660fae5c356b87a55c52079b.mockapi.io/todo/${id}`,
              data
            );
            console.log(response.data);
            setName("");
            setAge("");
            setId('')
            fetchData();
          } catch (error) {
            console.error(error.massage);
          }
    }else{
      const data = {
        name,
        age,
      };
      try {
        const response = await axios.post(
          "https://660fae5c356b87a55c52079b.mockapi.io/todo",
          data
        );
        console.log(response.data);
        setName("");
        setAge("");
        fetchData();
      } catch (error) {
        console.error(error.massage);
      }
    }
  }

function handleEdit(id, name, age){
    setName(name)
    setAge(age)
    setId(id)
  }

  async function handleDelete(id) {
    try {
      const response = await axios.delete(
        `https://660fae5c356b87a55c52079b.mockapi.io/todo/${id}`
      );
      fetchData()
    } catch {
      alert("delete error ngabs");
    }
  }

  return (
    <>
      <h1 className="mb-5">Data User</h1>
      <form
        onSubmit={handleSubmitPost}
        className="border py-8 px-12 rounded-lg"
        action="POST"
      >
        <div className="flex gap-4 mb-4 items-center">
          <label htmlFor="">name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2"
            type="text"
          />
        </div>
        <div className="flex gap-4 mb-4 items-center">
          <label htmlFor="">age</label>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="p-2"
            type="number"
          />
        </div>
        <button className="">Submit</button>
      </form>
      {users.map((user) => (
        <div className="mb-4 border mt-4" key={user.id}>
          <p className="font-bold">{user.name}</p>
          <p>{user.age}</p>
          <div className="flex gap-4 justify-center mt-4">
            <button onClick={() => handleEdit(user.id, user.name, user.age)}  className=" px-4 bg-blue-500">edit</button>
            <button onClick={() => handleDelete(user.id)} className="p-4 bg-red-500">delete</button>
          </div>
        </div>
      ))}
    </>
  );
}
