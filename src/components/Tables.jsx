import { useState, useEffect } from "react";
import Modal from "./Modal";
import TableRow from "./TableRow";
import UserDetail from "./UserDetails";
import PropTypes from "prop-types";

const Tables = ({ dataTable, activeSubNavClick }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState(dataTable);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTableData(dataTable);
  }, [dataTable]);

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

    const filteredData = dataTable.filter(
      (user) => user.name || user.title.toLowerCase().includes(term)
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
            <th className="text-xl">Muatan Sampah</th>
            <th></th>
            <th></th>
            <th></th>
            <th>1-10 dari 250</th>
          </tr>
          {activeSubNavClick === 1 ? (
            <tr className="text-accent text-xl">
              <th>No</th>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          ) : (
            <tr className="text-accent text-xl">
              <th>No</th>
              <th>Name</th>
              <th>Job</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          )}
        </thead>
        <tbody>
          {tableData.map((user, index) => (
            <TableRow
              key={user.id || index}
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
            <th>Email</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        user={selectedUser ? <UserDetail user={selectedUser} /> : null}
      />
    </div>
  );
};

Tables.propTypes = {
  dataTable: PropTypes.array.isRequired,
  activeSubNavClick: PropTypes.number.isRequired,
};

export default Tables;
