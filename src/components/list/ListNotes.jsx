import { useState } from "react";
import { Table } from "react-bootstrap";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import FormEdit from "../form/FormEdit";

import { useSelector, useDispatch } from "react-redux";
import { removeNoteAction } from "../../redux/notesDuck";

import "./listNotes.styles.scss";

const ListNotes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((store) => store.arrayNotes.notes);

  const [noteEdited, setNoteEdited] = useState([]);
  const [showFormEdit, setShowFormEdit] = useState(false);

  function removeNote(id) {
    dispatch(removeNoteAction(id));
  }

  function editNote(id, note, name) {
    setShowFormEdit(true);
    setNoteEdited({
      id,
      note,
      name,
    });
  }

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tarea</th>
            <th>Creado por</th>
            <th>Controles</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id}>
              <td>{note.id}</td>
              <td>{note.note}</td>
              <td>{note.name}</td>
              <td>
                <FaTrashAlt
                  className="icon-trash"
                  onClick={() => removeNote(note.id)}
                />
                <FaUserEdit
                  className="icon-edit"
                  onClick={() => editNote(note.id, note.note, note.name)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showFormEdit && (
        <FormEdit note={noteEdited} setShowFormEdit={setShowFormEdit} />
      )}
    </>
  );
};

export default ListNotes;
