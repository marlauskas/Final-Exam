import { useState } from "react";
import Form from "../../molecules/Form";
import Button from "../../atoms/Button";

const RegistrationForm = ({
  closeModal,
  onCreate,
  onDelete,
  onUpdate,
  register,
}) => {
  const [name, setName] = useState(
    register ? register.name.toString().split(" ")[0] : ""
  );

  const [surname, setSurname] = useState(
    register ? register.name.toString().split(" ")[1] : ""
  );

  const [email, setEmail] = useState(register ? register.email : "");
  const [gymStartYear, setGymStartYear] = useState(
    register ? register.gymStartYear : ""
  );

  const [gymEndYear, setGymEndYear] = useState(
    register ? register.gymEndYear : ""
  );

  const inputs = () => {
    const registrationForm = [
      {
        id: "name",
        type: "text",
        label: "Name",
        value: name,
        setValue: (value) => setName(value),
      },
      {
        id: "surname",
        type: "text",
        label: "Surname",
        value: surname,
        setValue: (value) => setSurname(value),
      },
      {
        id: "email",
        type: "email",
        label: "Email",
        value: email,
        setValue: (value) => setEmail(value),
      },
      {
        id: "gymStartYear",
        type: "month",
        label: "Membership start date",
        value: gymStartYear,
        setValue: (value) => setGymStartYear(value),
      },
      {
        id: "gymEndYear",
        type: "month",
        label: "Membership end date",
        value: gymEndYear,
        setValue: (value) => setGymEndYear(value),
        required: true,
      },
    ];

    return registrationForm;
  };

  const handleSubmit = () => {
    const clientModel = {
      name: name + " " + surname,
      email: email,
      gymStartYear: gymStartYear,
      gymEndYear: gymEndYear,
    };

    if (register) {
      clientModel["_id"] = register._id;
      onUpdate(clientModel);
    } else {
      onCreate(clientModel);
    }

    setTimeout(() => {
      closeModal();
    }, 200);
  };

  return (
    <Form
      inputs={inputs()}
      handleSubmit={handleSubmit}
      buttonTitle={register ? "Done" : "Add user"}
      footer={
        register && (
          <Button
            action={() => {
              onDelete(register);
            }}
            text={"Remove user"}
          />
        )
      }
    />
  );
};

export default RegistrationForm;
