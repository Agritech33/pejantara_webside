import Tables from "../components/Tables";
import { users, berita } from "../data/adminDataPejantara";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import FormAdminDataPejantara from "./FormAdminDataPejantara";

const ActiveNavLayout = ({ activeNavClick }) => {
  const [dataTable, setDataTable] = useState([]);
  const [roles, setRoles] = useState("berita");

  useEffect(() => {
    if (activeNavClick === 2) {
      setDataTable(berita.filter((berita) => berita.type === "edukasi"));
      setRoles("edukasi");
    } else if (activeNavClick === 3) {
      setDataTable(berita.filter((berita) => berita.type === "berita"));
      setRoles("berita");
    } else if (activeNavClick === 4) {
      setRoles("maps");
      setDataTable(users);
    } else {
      setDataTable(users);
    }
  }, [activeNavClick]);

  return (
    <div className="w-full flex flex-col">
      <details className="dropdown">
        <summary className="btn bg-secondaryAccent mb-3 text-accent text-4xl rounded-full border-2 px-3 border-accent hover:bg-accent hover:text-secondaryAccent">
          +
        </summary>
        <div className="menu dropdown-content bg-secondaryAccent rounded-box w-full z-10 py-10 shadow text-accent flex flex-col justify-center items-center">
          {activeNavClick === 2 ? (
            <FormAdminDataPejantara type="edukasi" />
          ) : activeNavClick === 3 ? (
            <FormAdminDataPejantara type="berita" />
          ) : (
            <FormAdminDataPejantara type="maps" />
          )}
        </div>
      </details>

      <div className="tables-container">
        <Tables dataTable={dataTable} type={activeNavClick} role={roles} />
      </div>
    </div>
  );
};

ActiveNavLayout.propTypes = {
  activeNavClick: PropTypes.number,
};

export default ActiveNavLayout;
