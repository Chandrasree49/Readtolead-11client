import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const CardPayment = ({ onPaymentComplete }) => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const [isValid, setIsValid] = useState({
    number: false,
    expiry: false,
    cvc: false,
    name: false,
  });

  const [showPaymentButton, setShowPaymentButton] = useState(false);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const validateField = (fieldName, value) => {
    const isValidField = value.trim() !== "";
    setIsValid((prev) => ({ ...prev, [fieldName]: isValidField }));
    checkFormValidity();
  };

  const checkFormValidity = () => {
    const formIsValid = Object.values(isValid).every((valid) => valid);
    setShowPaymentButton(formIsValid);
  };

  const handlePayment = () => {
    if (showPaymentButton) {
      onPaymentComplete(true);
    }
  };

  return (
    <div>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form className="max-w-sm mx-auto mt-8">
        <div className="mb-4">
          <input
            className="appearance-none block w-full px-3 py-2 border rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="tel"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="mb-4 flex">
          <div className="w-1/2 mr-2">
            <input
              className="appearance-none block w-full px-3 py-2 border rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              name="expiry"
              placeholder="MM/YY Expiry"
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="w-1/2 ml-2">
            <input
              className="appearance-none block w-full px-3 py-2 border rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              name="cvc"
              placeholder="CVC"
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            className="appearance-none block w-full px-3 py-2 border rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            placeholder="Cardholder Name"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
      </form>

      {showPaymentButton && (
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
          onClick={handlePayment}
        >
          Pay 100 Taka
        </button>
      )}
    </div>
  );
};

export default CardPayment;
