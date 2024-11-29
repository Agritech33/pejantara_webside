import PropTypes from "prop-types";
import { ekonomi } from "../data/adminStatistik";

const StatistikLayout = ({ data, type }) => {
  const total =
    type === "muatanSampah"
      ? data.kapasitas
      : type === "tpsTpa"
      ? data.tps + data.tpa
      : type === "jenisSampah"
      ? data.organik + data.anorganik
      : type === "ekonomi"
      ? data.kertas
      : 0;
  const used =
    type === "muatanSampah"
      ? data.jumlah
      : type === "tpsTpa"
      ? data.tps
      : type === "jenisSampah"
      ? data.organik
      : type === "ekonomi"
      ? data.plastik
      : 0;
  const remaining = type === "ekonomi" ? data.logam : total - used;
  const percentage =
    type === "muatanSampah"
      ? Math.round((used / total) * 100)
      : type === "ekonomi"
      ? Math.round((remaining / total) * 100)
      : Math.round((used / total) * 100);
  const rightText =
    type === "muatanSampah"
      ? "Total Kapasitas"
      : type === "ekonomi"
      ? "Total Sampah Kertas"
      : "Total Sampah";
  const rightText2 =
    type === "muatanSampah"
      ? "Sampah Tertampung"
      : type === "tpsTpa"
      ? "Sampah Dari TPS"
      : type === "ekonomi"
      ? "Total Sampah Plastik"
      : "Sampah Organik";
  const rightText3 =
    type === "muatanSampah"
      ? "Sampah Yang Bisa Tertampung"
      : type === "tpsTpa"
      ? "Sampah Dari Perumahan"
      : type === "ekonomi"
      ? "Total Sampah Logam"
      : "Sampah Anorganik";
  const percentage2 =
    type === "muatanSampah"
      ? Math.round(100 - percentage)
      : Math.round(100 - percentage);

  const totalKertas = ekonomi.reduce((total, item) => total + item.kertas, 0);
  const totalPlastik = ekonomi.reduce((total, item) => total + item.plastik, 0);
  const totalLogam = ekonomi.reduce((total, item) => total + item.logam, 0);

  const totalSampah = totalKertas + totalPlastik + totalLogam;

  const percentageKertas = Math.round((totalKertas / totalSampah) * 100);
  const percentagePlastik = Math.round((totalPlastik / totalSampah) * 100);
  const percentageLogam = Math.round((totalLogam / totalSampah) * 100);

  const progress =
    type === "ekonomi" ? (
      <>
        <div className="flex flex-col h-full gap-4 w-full">
          {/* Diagram */}
          <div className="flex flex-row items-end gap-3">
            {/* Nilai Vertikal */}
            <div className="flex flex-col-reverse items-start gap-12">
              {[0, 4000, 8000, 12000, 16000].map((value) => (
                <span key={value} className="text-sm">
                  {value}
                </span>
              ))}
            </div>
          </div>
          {/* Label Bulan */}
          <div className="flex justify-evenly w-full h-full items-end">
            {ekonomi.map((item) => (
              <div key={item.id} className="text-sm mb-5 relative">
                <div className="flex flex-col gap-3 absolute bottom-40 left-1/2 -translate-x-1/2 -rotate-90">
                  <progress
                    className="progress w-72 h-2"
                    value={item.kertas}
                    max="16000"
                  ></progress>
                  <progress
                    className="progress w-72 h-2 progress-success"
                    value={item.plastik}
                    max="16000"
                  ></progress>
                  <progress
                    className="progress w-72 h-2 progress-info"
                    value={item.logam}
                    max="16000"
                  ></progress>
                </div>
                <div className="capitalize">{item.month}</div>
              </div>
            ))}
          </div>
        </div>
      </>
    ) : (
      <>
        {/* Outer Circle */}
        <div
          className="radial-progress text-[#89E557]"
          style={{
            "--value": "100",
            "--size": "12rem",
            "--thickness": "2rem",
          }}
          role="progressbar"
        ></div>
        {/* Inner Circle */}
        <div
          className="radial-progress z-10 absolute rounded-none text-bgBtn"
          style={{
            "--value": percentage,
            "--size": "12rem",
            "--thickness": "2rem",
          }}
          role="progressbar"
        >
          <p className="text-white">{percentage}%</p>
        </div>
      </>
    );

  return (
    <div className="container flex justify-between w-full py-24">
      {/* Main Card */}
      <div className="card w-[750px] h-[500px] bg-accent2 bg-opacity-90 p-10">
        <div className="flex justify-between items-center">
          <h1 className="text-xl text-white font-semibold">
            Jumlah Sampah yang Tercatat
          </h1>
          <select className="select select-ghost max-w-xs">
            <option>Bulan ini</option>
            <option>Bulan lalu</option>
          </select>
        </div>
        <div className="flex w-full justify-evenly items-center h-full relative">
          {progress}
        </div>
        {type === "ekonomi" ? (
          <>
            <div className="w-full flex gap-5 justify-center text-white">
              <div className="flex items-center gap-2">
                <div className="bg-gray-300 w-5 h-5 rounded-full"></div>
                <p className="text-sm">
                  {rightText}: {percentageKertas}%
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-bgBtn w-5 h-5 rounded-full"></div>
                <p className="text-sm">
                  {rightText2}: {percentagePlastik}%
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#89E557] w-5 h-5 rounded-full"></div>
                <p className="text-sm">
                  {rightText3}: {percentageLogam}%
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full flex flex-col gap-5 justify-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-bgBtn w-5 h-5 rounded-full"></div>
              <p className="text-sm">
                {rightText2}: {percentage}%
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#89E557] w-5 h-5 rounded-full"></div>
              <p className="text-sm">
                {rightText3}: {percentage2}%
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Side Cards */}
      {type === "ekonomi" ? (
        <>
          <div className="secondcard flex flex-col justify-between">
            {/* Total Card */}
            <div className="card w-[500px] h-[150px] bg-accent2 bg-opacity-90 text-white flex flex-col justify-center items-center">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                <div>
                  <h4 className="text-2xl font-semibold">
                    {totalKertas.toLocaleString()} Ton
                  </h4>
                  <p className="text-xl font-thin">{rightText}</p>
                </div>
              </div>
            </div>

            {/* Used Card */}
            <div className="card w-[500px] h-[150px] bg-accent2 bg-opacity-90 text-white flex flex-col justify-center items-center">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-bgBtn"></div>
                <div>
                  <h4 className="text-2xl font-semibold">
                    {totalPlastik.toLocaleString()} Ton
                  </h4>
                  <p className="text-xl font-thin">{rightText2}</p>
                </div>
              </div>
            </div>

            {/* Remaining Card */}
            <div className="card w-[500px] h-[150px] bg-accent2 bg-opacity-90 text-white flex flex-col justify-center items-center">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#89E557]"></div>
                <div>
                  <h4 className="text-2xl font-semibold">
                    {totalLogam.toLocaleString()} Ton
                  </h4>
                  <p className="text-xl font-thin">{rightText3}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="secondcard flex flex-col justify-between">
          {/* Total Card */}
          <div className="card w-[500px] h-[150px] bg-accent2 bg-opacity-90 text-white flex flex-col justify-center items-center">
            <h4 className="text-2xl font-semibold">
              {total.toLocaleString()} Ton
            </h4>
            <p className="text-xl font-thin">{rightText}</p>
          </div>

          {/* Used Card */}
          <div className="card w-[500px] h-[150px] bg-accent2 bg-opacity-90 text-white flex flex-col justify-center items-center">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-bgBtn"></div>
              <div>
                <h4 className="text-2xl font-semibold">
                  {used.toLocaleString()} Ton
                </h4>
                <p className="text-xl font-thin">{rightText2}</p>
              </div>
            </div>
          </div>

          {/* Remaining Card */}
          <div className="card w-[500px] h-[150px] bg-accent2 bg-opacity-90 text-white flex flex-col justify-center items-center">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-[#89E557]"></div>
              <div>
                <h4 className="text-2xl font-semibold">
                  {remaining.toLocaleString()} Ton
                </h4>
                <p className="text-xl font-thin">{rightText3}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

StatistikLayout.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default StatistikLayout;
