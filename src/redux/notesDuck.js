const initialState = {
  notes: [
    {
      id: "b4de2a49c8ffa3fbee04446f045483b2",
      note: "Nota iniciada por defecto",
      name: "Matias",
    },
  ],
};

// types
const GET_NOTES = "GET_NOTES";
const ADD_NOTES = "ADD_NOTES";
const REMOVE_NOTE = "REMOVE_NOTE";
const EDIT_NOTE = "EDIT_NOTE";

//reducer
export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case ADD_NOTES:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? (note = action.payload) : note
        ),
      };
    default:
      return state;
  }
}

// actions
export const getNotesAction = () => async (dispatch) => {
  dispatch({
    type: GET_NOTES,
    payload: initialState,
  });
};

export const addNotesAction = (newNote) => async (dispatch) => {
  dispatch({
    type: ADD_NOTES,
    payload: newNote,
  });
};

export const removeNoteAction = (id) => async (dispatch) => {
  dispatch({
    type: REMOVE_NOTE,
    payload: id,
  });
};

export const editNoteAction = (noteEdited) => async (dispatch) => {
  dispatch({
    type: EDIT_NOTE,
    payload: noteEdited,
  });
};
