import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box bg-bgBtn bg-opacity-95 bg-blur-sm">
        {user}
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.node, // Jadikan opsional
};

export default Modal;
