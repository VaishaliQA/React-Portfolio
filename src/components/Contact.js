import React, { useState } from "react";
// import helper class for validate email
import { validateEmail } from "../utils/helper";

// contact me section
function Contact() {
  // set state variables for object using `useState`
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    if (e.target.value === undefined) {
      setErrorMessage("Field should not be blank");
    } else {
      // setErrorMessage("");
    }
    console.log("errorMsg", errorMessage);
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    // validate email address
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    }
    // Check name and message is blank or not
    else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    console.log("errorMsg", errorMessage);
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };
  return (
    <section>
      <h1 data-testid="h1tag">Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label> <br />
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address: </label> <br />
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text" style={{ color: "red" }}>
              {errorMessage}
            </p>
          </div>
        )}
        <button data-testid="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
