import { useState } from "react";
import StatistikLayout from "../../../LayoutComponents/StatistikLayout";
import {
  muatanSampah,
  tpsTpa,
  jenisSampah,
  ekonomi,
} from "../../../data/adminStatistik";

const AdminStatistikPage = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [tableData, setTableData] = useState({
    data: muatanSampah,
    type: "muatanSampah",
  });
  const [selectedType, setSelectedType] = useState(null);

  const buttons = [
    { id: 1, label: "muatan sampah", imageUrl: "/Reuse.png" },
    { id: 2, label: "tps/tpa", imageUrl: "/Reuse.png" },
    { id: 3, label: "jenis sampah", imageUrl: "/Reuse.png" },
    { id: 4, label: "ekonomi", imageUrl: "/Reuse.png" },
  ];

  const handleButtonClick = (id) => {
    setActiveButton(id);
    if (id === 1) {
      setTableData({ data: muatanSampah, type: "muatanSampah" });
      setSelectedType("muatanSampah");
    } else if (id === 2) {
      setTableData({ data: tpsTpa, type: "tpsTpa" });
      setSelectedType("tpsTpa");
    } else if (id === 3) {
      setTableData({ data: jenisSampah, type: "jenisSampah" });
      setSelectedType("jenisSampah");
    } else if (id === 4) {
      setTableData({ data: ekonomi, type: "ekonomi" });
      setSelectedType("ekonomi");
    } else {
      setTableData(null);
    }
  };

  const title =
    selectedType === "muatanSampah"
      ? "Pusat Pemantauan Sampah Bersama Pejantara"
      : selectedType === "tpsTpa"
      ? "Pusat Pemantauan Data Sampah Pada TPS/TPA Bersama Pejantara"
      : selectedType === "jenisSampah"
      ? "Pusat Pemantauan Data Sampah Berdasarkan Jenisnya Bersama Pejantara"
      : selectedType === "ekonomi"
      ? "Pusat Pemantauan Penukaran Sampah Bersama Pejantara"
      : null;

  return (
    <div className="flex flex-col gap-10">
      <div className="title flex items-center gap-3">
        <h1 className="text-4xl font-bold text-accent font-oswald">
          Statistik
        </h1>
        <h1 className="text-4xl font-bold text-secondary font-oswald">
          Pejantara
        </h1>
      </div>
      <div className="w-full">
        <div className="w-full border-b-2 border-black">
          <div className="flex py-10 w-full text-accent text-xl font-semibold relative">
            {buttons.map((button) => (
              <div key={button.id} className="relative w-full px-24">
                <button
                  onClick={() => handleButtonClick(button.id)}
                  className={`capitalize w-1/4 flex flex-col justify-center items-center gap-3 ${
                    activeButton === button.id
                      ? "bg-accent2 text-white w-52 rounded-md h-40 absolute bottom-[-100px] right-[50%] translate-x-1/2"
                      : "bg-transparent text-accent w-full"
                  }`}
                >
                  {button.imageUrl && (
                    <img
                      src={button.imageUrl}
                      alt="vector"
                      className={`w-10 h-10 ${
                        activeButton === button.id ? "block" : "hidden"
                      }`}
                    />
                  )}
                  {button.label}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-screen flex flex-col mt-28">
          <h1 className="text-accent text-3xl font-semibold font-oswald">
            {title}
          </h1>
          {tableData && tableData.data.length > 0 ? (
            tableData.data
              .slice(0, 1)
              .map((item) => (
                <StatistikLayout
                  key={item.id}
                  data={item}
                  type={tableData.type}
                />
              ))
          ) : (
            <p className="text-center text-accent mt-10">
              Pilih kategori untuk melihat data statistik.
            </p>
          )}
          <p className="text-xl text-accent text-center mt-10">
            Statistik ini dihitung berdasarkan muatan sampah yang sudah
            tertampung dan masih bisa ditampung dalam periode satu bulan di Kota
            Batam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminStatistikPage;
