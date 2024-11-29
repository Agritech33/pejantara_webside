const ProgresBar = () => {
  return (
    <>
      <div
        className="radial-progress"
        style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}
        role="progressbar"
      >
        70%
      </div>
    </>
  );
};

export default ProgresBar;
