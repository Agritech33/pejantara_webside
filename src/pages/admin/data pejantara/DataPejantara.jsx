import { useState } from "react";
import DataPejantaraLayout from "../../../LayoutComponents/DataPejantaraLayout";

const AdminDataPejantaraPage = () => {
  const [activeNavClick, setActiveNavClick] = useState(1);

  const buttonsNavClick = [
    { id: 1, label: "Data Pejantara", imageUrl: "/Reuse.png" },
    { id: 2, label: "Edukasi", imageUrl: "/Reuse.png" },
    { id: 3, label: "Berita", imageUrl: "/Reuse.png" },
    { id: 4, label: "Maps", imageUrl: "/Reuse.png" },
  ];

  const handleNavClick = (id) => {
    if (id === 1) {
      setActiveNavClick(1);
    } else if (id === 2) {
      setActiveNavClick(2);
    } else if (id === 3) {
      setActiveNavClick(3);
    } else if (id === 4) {
      setActiveNavClick(4);
    }
  };

  return (
    <div className="w-full flex flex-col gap-16">
      <div className="title flex items-center gap-3">
        <h1 className="text-4xl font-bold text-accent font-oswald">Data</h1>
        <h1 className="text-4xl font-bold text-secondary font-oswald">
          Pejantara
        </h1>
      </div>
      <div className="heder flex items-center gap-5">
        {buttonsNavClick.map((button) => (
          <button
            key={button.id}
            className={`button w-36 h-10 border-2 drop-shadow-xl drop-shadow-slate-600 rounded-2xl hover:text-background hover:bg-bgBtn hover:scale-105 transition-all duration-150 ease-in-out ${
              button.id === activeNavClick
                ? "bg-bgBtn text-background scale-110 border-none"
                : " border-accent text-accent bg-[#EFEEEC] bg-opacity-50"
            }`}
            onClick={() => handleNavClick(button.id)}
          >
            {button.label}
          </button>
        ))}
      </div>
      <DataPejantaraLayout />
    </div>
  );
};

export default AdminDataPejantaraPage;
