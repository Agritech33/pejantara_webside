import { useState } from "react";
import Tables from "../components/Tables";
import { users, berita } from "../data/adminDataPejantara";

const DataPejantaraLayout = () => {
  const [activeSubNavClick, setActiveSubNavClick] = useState(1);
  const [dataTable, setDataTable] = useState(berita);

  const subNavClick = [
    { id: 1, label: "Data Konten", imageUrl: "/Reuse.png" },
    { id: 2, label: "Admin", imageUrl: "/Reuse.png" },
    { id: 3, label: "Akun Website", imageUrl: "/Reuse.png" },
    { id: 4, label: "Akun Mobile", imageUrl: "/Reuse.png" },
  ];

  const handleSubNavClick = (id) => {
    setActiveSubNavClick(id);
    switch (id) {
      case 1:
        setDataTable(berita);
        break;
      case 2:
        setDataTable(users.filter((user) => user.role === "admin"));
        break;
      case 3:
        setDataTable(users.filter((user) => user.role === "member web"));
        break;
      case 4:
        setDataTable(users.filter((user) => user.role === "member mobile"));
        break;
      default:
        setDataTable([]);
    }
  };

  return (
    <>
      <div className="containerLink w-full items-center flex gap-10">
        {subNavClick.map((nav) => (
          <button
            key={nav.id}
            onClick={() => handleSubNavClick(nav.id)}
            className={`w-1/4 h-40 bg-secondaryAccent rounded-2xl flex items-center justify-center gap-3 text-accent ${
              nav.id === activeSubNavClick
                ? "bg-bgBtn scale-110 border-none"
                : "border-accent text-accent bg-[#EFEEEC] bg-opacity-50"
            }`}
          >
            <img
              src={nav.imageUrl}
              alt={nav.label}
              className="w-16 h-16 p-2 bg-secondary rounded-full"
            />
            <div>
              <h4>25</h4>
              <p>{nav.label}</p>
            </div>
          </button>
        ))}
      </div>
      <Tables dataTable={dataTable} activeSubNavClick={activeSubNavClick} />
    </>
  );
};

export default DataPejantaraLayout;
