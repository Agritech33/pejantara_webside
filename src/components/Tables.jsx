import { useState } from "react";
import Modal from "./Modal";
import TableRow from "./TableRow";
import UserDetail from "./UserDetails";
import tables from "../data/dataTables";

const Table = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState(tables);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDetailsClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredData = tables.filter((user) =>
      user.name.toLowerCase().includes(term)
    );
    setTableData(filteredData);
  };

  return (
    <div className="overflow-x-auto">
      <div className="search mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
          className="input input-bordered"
        />
      </div>
      <table className="table table-pin-rows-5">
        <thead>
          <tr className="bg-bgBtn text-white capitalize">
            <th className="text-xl">muatan sampah</th>
            <th></th>
            <th></th>
            <th></th>
            <th>1-10 dari 250</th>
          </tr>
          <tr className="text-accent text-xl">
            <th>No</th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((user) => (
            <TableRow
              key={user.id}
              user={user}
              onDetailsClick={handleDetailsClick}
            />
          ))}
        </tbody>
        <tfoot>
          <tr className="text-accent text-xl">
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedUser && <UserDetail user={selectedUser} />}
      </Modal>
    </div>
  );
};

export default Table;
