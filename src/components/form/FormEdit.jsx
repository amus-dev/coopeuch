import "./formEdit.styles.scss";
import { useDispatch } from "react-redux";
import { editNoteAction } from "../../redux/notesDuck";
import { useState } from "react";

const FormEdit = (props) => {
  const { id, note, name } = props.note;
  const { setShowFormEdit } = props;

  const [noteEdit, setNoteEdit] = useState();
  const [nameEdited, setNameEdited] = useState();

  const dispatch = useDispatch();

  function editNote(e) {
    e.preventDefault();
    dispatch(
      editNoteAction({
        id,
        note: noteEdit,
        name: nameEdited,
      })
    );
    setShowFormEdit(false);
  }

  return (
    <div className="boxForm">
      <h5 className="boxForm__title">Editar Tarea</h5>
      <form className="boxForm__form">
        <input
          type="text"
          placeholder={note}
          className="form-control boxForm__form-input"
          onChange={(e) => setNoteEdit(e.target.value)}
        />
        <input
          type="text"
          placeholder={name}
          className="form-control boxForm__form-input"
          onChange={(e) => setNameEdited(e.target.value)}
        />
        <button className="boxForm__form-btn" onClick={editNote}>
          Editar
        </button>
      </form>
    </div>
  );
};

export default FormEdit;
