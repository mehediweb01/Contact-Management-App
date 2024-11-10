/* eslint-disable react/prop-types */

const AddAccount = ({
  name,
  number,
  email,
  handleNumberChange,
  handleNameChange,
  handleEmailChange,
  handleSubmit,
}) => {
  return (
    <div className="bg-slate-200 p-6 rounded-lg">
      <form className="flex flex-col gap-3">
        <label htmlFor="name">
          Name: <br />
          <input
            value={name}
            onChange={handleNameChange}
            type="text"
            id="name"
          />
        </label>

        <label htmlFor="Email">
          E-mail: <br />
          <input
            value={email}
            onChange={handleEmailChange}
            type="email"
            id="Email"
          />
        </label>
        <label htmlFor="number">
          Phone Number: <br />
          <input
            value={number}
            onChange={handleNumberChange}
            type="number"
            id="number"
          />
        </label>
        <div>
          <button
            type="button"
            className="bg-sky-500 text-white px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 hover:bg-sky-400 hover:text-slate-700 hover:font-semibold hover:tracking-[0.32px]"
            onClick={handleSubmit}
          >
            Add Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAccount;
