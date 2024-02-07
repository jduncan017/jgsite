import { useState, useCallback, FormEvent } from "react";

//. TO USE THIS HOOK:
// - import "useFormAndValidation" and interface "FormValues"
// - create submitCallback to handle submit logic, create initial fields object with all fields & initial values
// - destructure all return values in your form component, passing initial fields object and submit callback to hook
// - control all inputs with values."input name"
// - add onChange={handleChange} for all inputs
// - submitted can be used to display confirmation message and optionally disable submit button
// - isValid can be used to set button state
// - set error spans as:
{
  /* <span className="contact-form__error" id="name-error">
  {showError ? errors.name || "" : ""}
  </span> */
}
// - be sure to add "aria-describedby={errorId}" for each field for screen readers

export interface FormValues {
  [key: string]: any;
}

interface FormErrors {
  [key: string]: string;
}

export const useFormAndValidation = (
  initialFields: FormValues = {},
  submitCallback: (formData: FormValues) => void
) => {
  const [values, setValues] = useState<FormValues>(initialFields);
  const initialErrors: FormErrors = Object.keys(initialFields).reduce(
    (acc, key) => {
      acc[key] = "Please fill out this field.";
      return acc;
    },
    {} as FormErrors
  );
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [isValid, setIsValid] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, validationMessage } = e.target;
    let errorMessage = validationMessage;

    if (name === "phone") {
      const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (!phoneRegex.test(value)) {
        errorMessage = "Please enter a valid phone number";
      }
    } else if (name === "password") {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/;
      if (!passwordRegex.test(value)) {
        errorMessage =
          "Password must include an uppercase letter, a symbol, and be at least 8 characters long";
      }
    }

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    setIsValid(e.target.closest("form")?.checkValidity() ?? false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValid) {
      submitCallback(values);
      setShowError(false);
      resetForm();
    } else {
      setShowError(true);
    }
  };

  const resetForm = useCallback(() => {
    setValues(initialFields);
    setErrors(initialErrors);
    setIsValid(false);
    setShowError(false);
  }, [initialFields, initialErrors]);

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
    isValid,
    showError,
    resetForm,
  };
};
