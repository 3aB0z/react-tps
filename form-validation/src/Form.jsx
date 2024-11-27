import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [validation, setValidation] = useState({
    characters: false,
    number: false,
    symbol: false,
  });

  function changeInputValue(e) {
    const name = e.target.name;
    const value = e.target.value;
    const newForm = { ...form, [name]: value };
    setForm(newForm);

    let newValidation = {
      characters: false,
      number: false,
      symbol: false,
    };
    if (newForm.password.length >= 8) {
      newValidation.characters = true;
    }
    if (/[0-9]/.test(newForm.password)) {
      newValidation.number = true;
    }
    if (/[!@#$%^&*]/.test(newForm.password)) {
      newValidation.symbol = true;
    }
    setValidation(newValidation);
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg">
          <h2 className="mb-8 text-3xl font-bold text-sky-700 text-center">
            Login
          </h2>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={form.username}
              onChange={(e) => changeInputValue(e)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => changeInputValue(e)}
            />
          </div>
          <ul className="mb-4 ml-2">
            <li className="text-slate-700 font-semibold">
              Password may contain at least:
            </li>
            <li className="text-slate-700 font-semibold">
              <i
                className={`fa-solid fa-circle-${
                  validation.characters
                    ? "check text-green-500"
                    : "xmark text-red-500"
                }`}
              ></i>
              <span className="ml-1">8 characters</span>
            </li>
            <li className="text-slate-700 font-semibold">
              <i
                className={`fa-solid fa-circle-${
                  validation.number
                    ? "check text-green-500"
                    : "xmark text-red-500"
                }`}
              ></i>
              <span className="ml-1">1 number</span>
            </li>
            <li className="text-slate-700 font-semibold">
              <i
                className={`fa-solid fa-circle-${
                  validation.symbol
                    ? "check text-green-500"
                    : "xmark text-red-500"
                }`}
              ></i>
              <span className="ml-1">1 symbol (@#&...)</span>
            </li>
          </ul>
          <button
            className={`w-full px-4 py-2 font-semibold text-white ${
              validation.characters && validation.number && validation.symbol
                ? "bg-blue-500"
                : "bg-gray-500"
            } rounded-lg`}
            type="button"
            onClick={() => alert("Submitted Successfully!")}
            disabled={
              validation.characters && validation.number && validation.symbol
                ? false
                : true
            }
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
