import PropTypes from "prop-types";

const TableRow = ({ user, onDetailsClick, role }) => (
  <tr className="text-accent hover:bg-slate-300">
    <td>
      <label>
        <p>{user.id}</p>
      </label>
    </td>
    <td>
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img
              src={user.image_profile || user.image}
              alt={user.name || user.title}
            />
          </div>
        </div>
        <div>
          <div className="font-bold">{user.name || user.title}</div>
          <div className="text-sm opacity-50">{user.location || user.date}</div>
        </div>
      </div>
    </td>
    <td>
      {user.company || user.author?.name}
      <br />
      <span className="badge badge-ghost badge-sm">
        {user.pekerjaan || user.author?.email}
      </span>
    </td>
    <td>{user.email || user.description}</td>
    <td>
      <button
        className="btn btn-ghost btn-xs"
        onClick={() => onDetailsClick(user)}
      >
        {role === "pengguna" ? "View" : "Details"}
      </button>
    </td>
  </tr>
);

TableRow.propTypes = {
  user: PropTypes.object,
  onDetailsClick: PropTypes.func,
  role: PropTypes.string,
};

export default TableRow;
