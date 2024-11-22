import Btn from "../../components/Btn";
import { NavLink } from "react-router-dom";

const PointsPage = () => {
  return (
    <div className="w-full flex my-10 flex-col gap-1">
      <div className="w-full flex flex-col bg-secondaryAccent rounded-xl p-10 gap-5">
        <div className="point flex items-center gap-3">
          <h1 className="text-4xl font-bold text-accent">You Points</h1>
          <img src="/coin.png" alt="coin" className="w-14 h-14" />
        </div>
        <div className="content flex w-full justify-between">
          <div className="nominal flex text-accent">
            <h3 className="font-bold">5000 = Rp5.000</h3>
          </div>
          <div className="actions">
            <Btn type="submit" value="submit">
              Withdraw Money
            </Btn>
          </div>
        </div>
      </div>
      <div className="redem bg-secondaryAccent rounded-xl p-10 flex justify-between items-center">
        <h3 className="font-bold text-accent text-opacity-65">Redeem Points</h3>
        <NavLink to="/voucher" className="flex text-accent">
          <img src="/voucher.png" alt="voucher" className="w-16 h-14" />
        </NavLink>
      </div>
      <div className="guide w-full bg-secondaryAccent rounded-xl p-10">
        <h3 className="font-bold text-accent text-opacity-65">
          How to redeem points?
        </h3>
        <p className="text-accent text-opacity-65">
          1. Langkah pertama adalah memilih voucher yang ingin Anda redeem.
        </p>
        <p className="text-accent text-opacity-65">
          You can also redeem points by clicking the redeem points button and
          then choose the voucher you want to redeem.
        </p>
        <p className="text-accent text-opacity-65">
          You can also redeem points by clicking the redeem points button and
          then choose the voucher you want to redeem.
        </p>
      </div>
    </div>
  );
};

export default PointsPage;
