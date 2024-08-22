import { useFormInput } from "./useFormInput.js";

export default function FormInputApp() {
  const firstNameProps = useFormInput("Raju");
  const lastNameProps = useFormInput("Chinthala");

  return (
    <>
      <br />
      <label>
        First Name: <input {...firstNameProps} />
      </label>
      <br />
      <label>
        Last Name: <input {...lastNameProps} />
      </label>

      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
}
