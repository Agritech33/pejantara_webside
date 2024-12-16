import { useState, useEffect } from "react";
import Modal from "./Modal";
import TableRow from "./TableRow";
import UserDetail from "./UserDetails";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Tables = ({ dataTable, type, role }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState(dataTable);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setTableData(dataTable);
  }, [dataTable]);

  const getTableTitle = (type, role) => {
    if (type === 2 && role === "edukasi") return "Data Edukasi Pejantara";
    if (type === 3 && role === "berita") return "Data Berita Pejantara";
    if (type === 4 && role === "maps") return "Data Maps Pejantara";
    if (type === 1) return "Data Konten Pejantara";
    if (type === 2) return "Data Admin Pejantara";
    if (type === 3) return "Data Akun Website";
    return "Data Akun Mobile";
  };
  const handleDetailsClick = (user) => {
    if (!user || !user.id) {
      console.error("User data is undefined or missing an ID.");
      return;
    }

    if (role === "pengguna") {
      navigate(`/admin/pengguna/${user.id}`, { state: user });
    } else {
      setSelectedUser(user);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredData = dataTable.filter(
      (user) =>
        (user.name && user.name.toLowerCase().includes(term)) ||
        (user.title && user.title.toLowerCase().includes(term))
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
            <th className="text-xl">{getTableTitle(type, role)}</th>
            <th></th>
            <th></th>
            <th></th>
            <th>1-10 dari 250</th>
          </tr>
          {type === 1 ? (
            <tr className="text-accent text-xl">
              <th>Id</th>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          ) : (
            <tr className="text-accent text-xl">
              <th>Id</th>
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
              role={role}
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
  type: PropTypes.number,
  role: PropTypes.string,
};

export default Tables;
