import PropTypes from "prop-types";

const UserDetail = ({ user }) => {
  if (!user) return null;

  return (
    <div>
      <div className="flex items-center gap-4">
        <img
          src={user.imgUrl}
          alt={user.name}
          className="mask mask-squircle w-16 h-16"
        />
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.location}</p>
        </div>
      </div>
      <div className="mt-4">
        <p>
          <strong>Job:</strong> {user.job}
        </p>
        <p>
          <strong>Company:</strong> {user.company}
        </p>
        <p>
          <strong>Favorite Color:</strong> {user.favoriteColor}
        </p>
      </div>
    </div>
  );
};

UserDetail.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserDetail;
