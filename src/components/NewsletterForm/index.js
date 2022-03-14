import axios from "axios";
import { useState, useEffect } from "react";

import { Form, ErrorMsg, SuccessMsg, Spinner } from "./styles";

export function NewsletterForm() {
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccesMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = () => {
    const emailValidation = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    return emailValidation.test(userInfo.email);
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const handleErrors = () => {
    if (userInfo.name === "" && userInfo.email === "") {
      setIsError(true);
      setErrorMessage("Both fields should be filled.");
    } else if (userInfo.name === "") {
      setIsError(true);
      setErrorMessage("Name field should be filled.");
    } else if (!validateEmail()) {
      setIsError(true);
      setErrorMessage("Email field must be a valid email");
    } else {
      setIsError(true);
      setErrorMessage("An unexpected error occurred. Please, try again.");
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const res = await axios.post(
        "https://api.jungledevs.com/api/v1/challenge-newsletter/",
        userInfo
      );
      if (res.status === 200) {
        setIsError(false);
        setIsLoading(false);
        setSuccesMessage("You have successfully subscribed to our Newsletter");
        setUserInfo({ name: "", email: "" });
      }
    } catch {
      setIsLoading(false);
      handleErrors();
    }
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <Form onSubmit={preventDefault}>
      <div>
        <input
          type="text"
          placeholder="Your name"
          value={userInfo.name}
          onChange={({ target: { value } }) =>
            setUserInfo({ ...userInfo, name: value })
          }
        />
        <input
          type="email"
          placeholder="Your email"
          value={userInfo.email}
          onChange={({ target: { value } }) =>
            setUserInfo({ ...userInfo, email: value })
          }
        />
        <button onClick={() => handleSubmit()} type="submit">
          Send
        </button>
      </div>
      <div>
        {isError ? (
          <ErrorMsg>
            <strong>{errorMessage}</strong>
          </ErrorMsg>
        ) : (
          <SuccessMsg>
            <strong>{successMessage}</strong>
          </SuccessMsg>
        )}
      </div>
    </Form>
  );
}
