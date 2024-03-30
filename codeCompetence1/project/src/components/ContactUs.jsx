import { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [list, setList] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      desc: desc,
    };

    setList(newData);

    setFirstName("");
    setLastName("");
    setEmail("");
    setDesc("");
  };

  console.log(list);

  return (
    <div className="p-16 pt-52 mb-10 flex flex-col">
      <div className="flex gap-40  justify-center">
        <div className="w-80">
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            sed maiores mollitia labore sint soluta deleniti modi dolor eaque
            enim quaerat minima veritatis saepe nam, quo temporibus unde quam
            iusto!
          </p>
        </div>
        <form className="w-80 grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="firstName">First Name</label>
            <input
              className="border-gray-300 border-2 rounded-md mt-2 w-full"
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="border-gray-300 border-2 rounded-md mt-2 w-full"
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="email">Email</label>
            <input
              className="border-gray-300 border-2 rounded-md mt-2 w-full"
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="desc">What can we help you with?</label>
            <textarea
              className="border-gray-300 border-2 rounded-md mt-2 w-full"
              type="text"
              name="desc"
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="col-span-2 w-1/2 mx-auto py-1 px-6 rounded-md bg-gray-300"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="tabel mx-auto mt-28 w-full">
        {list && (
          <>
            <table className="w-full border-collapse rounded mb-10">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border-b border-gray-400">First Name</th>
                  <th className="p-2 border-b border-gray-400">Last Name</th>
                  <th className="p-2 border-b border-gray-400">Email</th>
                  <th className="p-2 border-b border-gray-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100">
                  <td className="p-2 border-b border-gray-400 text-center">
                    {list.firstName}
                  </td>
                  <td className="p-2 border-b border-gray-400 text-center">
                    {list.lastName}
                  </td>
                  <td className="p-2 border-b border-gray-400 text-center">
                    {list.email}
                  </td>
                  <td className="p-2 border-b border-gray-400 text-center">
                    {list.desc}
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}
