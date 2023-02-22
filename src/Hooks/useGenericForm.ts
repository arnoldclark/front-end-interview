import { useState } from "react";

// A function that is called with a argument of type `Type`, and doesn't return anything
function useGenericForm<Type>(
  defaultValues: Type,
  handleFormSubmission: (formState: Type) => void
) {
  const [formState, setFormState] = useState<Type>(defaultValues);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleFormSubmission(formState);
  };

  return { formState, onChange, onSubmit };
}
export default useGenericForm;
