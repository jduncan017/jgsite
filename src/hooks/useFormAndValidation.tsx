import { useState, useCallback } from "react";

interface FormValues {
  subject?: string;
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  [key: string]: any; // This allows for additional dynamic keys
}

export function useFormAndValidation(initialFields: FormValues = {}) {
  const [values, setValues] = useState<FormValues>(initialFields);
  const [errors, setErrors] = useState<FormValues>({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, validationMessage, closest } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validationMessage }));
    setIsValid(e.target.closest("form")?.checkValidity() ?? false);
  };

  const resetForm = useCallback(
    (newValues = initialFields, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [initialFields]
  );

  return { values, handleChange, errors, isValid, resetForm };
}

export default useFormAndValidation;
