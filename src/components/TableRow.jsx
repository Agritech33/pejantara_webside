import PropTypes from "prop-types";

const TableRow = ({ user, onDetailsClick }) => {
  return (
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
              <img src={user.imgUrl} alt={user.name} />
            </div>
          </div>
          <div>
            <div className="font-bold">{user.name}</div>
            <div className="text-sm opacity-50">{user.location}</div>
          </div>
        </div>
      </td>
      <td>
        {user.company}
        <br />
        <span className="badge badge-ghost badge-sm">{user.job}</span>
      </td>
      <td>{user.favoriteColor}</td>
      <td>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => onDetailsClick(user)}
        >
          Details
        </button>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  user: PropTypes.object.isRequired,
  onDetailsClick: PropTypes.func.isRequired,
};

export default TableRow;
