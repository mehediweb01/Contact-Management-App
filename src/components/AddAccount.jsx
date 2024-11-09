const AddAccount = () => {
  return (
    <div className="bg-slate-200 p-6 rounded-lg">
      <form className="flex flex-col gap-3">
        <label htmlFor="name"> Name: <br />
          <input type="text" id="name"  />
        </label>
        <label htmlFor="number"> Phone Number: <br />
          <input type="number" id="number"  />
        </label>
        <label htmlFor="Email"> E-mail: <br />
          <input type="email" id="Email" />
        </label>
        <div>
          <button type="button" className="bg-sky-500 text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 hover:bg-sky-400 hover:text-slate-700 hover:font-semibold hover:tracking-[0.32px]">Add Account</button>
        </div>
      </form>
    </div>
  );
};

export default AddAccount;
