import "./header.styles.scss";
import { IoIosAddCircleOutline } from "react-icons/io";
import FormAdd from "../form/FormAdd";
import { useState } from "react";

const Header = () => {
  const [openForm, setOpenForm] = useState(false);
  function openFormAdd() {
    setOpenForm(true);
  }

  return (
    <header className="header">
      <div className="header__controls">
        <h1 className="header__controls-title">Listado de Tareas</h1>
        <button className="header__controls-btn" onClick={openFormAdd}>
          <IoIosAddCircleOutline /> Nueva Tarea
        </button>
      </div>
      <div className="header__form">
        <FormAdd visible={openForm} setVisible={setOpenForm} />
      </div>
    </header>
  );
};

export default Header;
