import PropTypes from "prop-types";

const UserDetail = ({ user }) => {
  if (!user) return null;

  return (
    <div>
      <div className="flex items-center gap-4">
        <img
          src={user.image_profile || user.image}
          alt={user.name || user.title}
          className="mask mask-squircle w-16 h-16"
        />
        <div>
          <h2 className="text-xl font-bold">{user.name || user.title}</h2>
          <p className="text-sm text-gray-500">{user.location || user.date}</p>
        </div>
      </div>
      <div className="mt-4">
        <p>
          <strong>
            {user.pekerjaan === undefined ? "Description: " : "Job: "}
          </strong>
          {user.pekerjaan || user.description}
        </p>
        <p>
          <strong>
            {user.company === undefined ? "Author: " : "Company: "}
          </strong>
          {user.company || user.author.name}
        </p>
        <p>
          <strong>Email: </strong> {user.email || user.author.email}
        </p>
      </div>
    </div>
  );
};

UserDetail.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserDetail;
