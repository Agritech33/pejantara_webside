import { useState } from "react";
import Tables from "../../../components/Tables";
import { users } from "../../../data/adminDataPejantara";

const AdminPenggunaPage = () => {
  const [activeSubNavClick, setActiveSubNavClick] = useState(1);
  const [dataTable, setDataTable] = useState(users);

  const subNavClick = [
    {
      id: 1,
      label: "Total Pengguna",
      imageUrl: "/Reuse.png",
      totalData: users.length,
    },
    {
      id: 2,
      label: "Pengguna Terbaru",
      imageUrl: "/Reuse.png",
      totalData: users.filter((user) => user.role === "admin").length,
    },
    {
      id: 3,
      label: "Akun Website",
      imageUrl: "/Reuse.png",
      totalData: users.filter((user) => user.role === "member web").length,
    },
    {
      id: 4,
      label: "Akun Mobile",
      imageUrl: "/Reuse.png",
      totalData: users.filter((user) => user.role === "member mobile").length,
    },
  ];

  const handleSubNavClick = (id) => {
    setActiveSubNavClick(id);
    switch (id) {
      case 1:
        setDataTable(users);
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
        setDataTable(users);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="title flex items-center gap-3">
        <h1 className="text-4xl font-bold text-accent font-oswald">Pengguna</h1>
      </div>
      <div className="sub-nav flex items-center gap-10 my-20 w-full">
        {subNavClick.map((nav) => (
          <button
            key={nav.id}
            onClick={() => handleSubNavClick(nav.id)}
            className={`w-1/4 h-40 bg-secondaryAccent rounded-2xl flex items-center justify-center gap-3 text-accent ${
              nav.id === activeSubNavClick
                ? "bg-bgBtn scale-110 border-none bg-opacity-100"
                : "border-accent text-accent bg-[#EFEEEC] bg-opacity-50"
            }`}
          >
            <img
              src={nav.imageUrl}
              alt={nav.label}
              className="w-16 h-16 p-2 bg-secondary rounded-full"
            />
            <div>
              <h4>{nav.totalData}</h4>
              <p>{nav.label}</p>
            </div>
          </button>
        ))}
      </div>
      <Tables dataTable={dataTable} type={activeSubNavClick} role="pengguna" />
    </div>
  );
};

export default AdminPenggunaPage;
