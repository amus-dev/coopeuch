import "./formAdd.styles.scss";
import { Alert } from "react-bootstrap";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { addNotesAction } from "../../redux/notesDuck";

import uniqueString from "unique-string";

const FormAdd = (props) => {
  const dispatch = useDispatch();

  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [visibleAlert, setVisibleAlert] = useState(false);
  const { visible, setVisible } = props;

  function addNote(e) {
    e.preventDefault();
    if (!note || !name) {
      setVisibleAlert(true);
      return false;
    }
    setVisibleAlert(false);
    dispatch(
      addNotesAction({
        id: uniqueString(),
        note: note,
        name: name,
      })
    );
    setVisible(false);
    setNote("");
    setName("");
  }

  return (
    <form className={`formAdd ${visible ? "open" : ""}`}>
      <input
        type="text"
        name="inputNote"
        id="inputNote"
        placeholder="Ingrese su tarea"
        className="formAdd__input"
        onChange={(e) => setNote(e.target.value)}
        value={note}
      />
      <input
        type="text"
        name="inputNameUser"
        id="inputNameUser"
        placeholder="Nombre Usuario"
        className="formAdd__input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button type="submit" className="formAdd__btn" onClick={addNote}>
        Agregar
      </button>
      <Alert
        variant="danger"
        className={`formAdd__alert ${visibleAlert ? "open" : ""}`}
      >
        Complete los campos vacios.
      </Alert>
    </form>
  );
};

export default FormAdd;
