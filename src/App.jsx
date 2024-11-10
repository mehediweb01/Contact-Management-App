import { useState } from "react";
import AddAccount from "./components/AddAccount";
import ContactManagement from "./components/Manage/ContactManagement";
import { AccountData } from "./db";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNumberChange = (e) => setNumber(e.target.value);
  //next id
  const nextItemId = (next) => {
    const maxId = next.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
    return maxId + 1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setNumber("");
    AccountData.push({
      id: nextItemId(AccountData),
      name: name,
      email: email,
      number: number,
    });
  };

  return (
    <>
      <div className="flex md:justify-around justify-center md:items-start items-center mt-5 gap-3 mx-3 flex-col-reverse md:flex-row ">
        <div className="w-full">
          <ContactManagement AccountData={AccountData} />
        </div>
        <div className="w-1/3 flex justify-center">
          <AddAccount
            name={name}
            email={email}
            number={number}
            handleEmailChange={handleEmailChange}
            handleNameChange={handleNameChange}
            handleNumberChange={handleNumberChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
}

export default App;
