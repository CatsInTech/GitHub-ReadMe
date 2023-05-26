const ContainerRow = ({ fluid, className, children }) => {
  return (
    <div
      className={
        "container" +
        (fluid ? "-fluid" : "") +
        (className && className.length > 0 ? " " + className : "")
      }
    >
      <div className="row">{children}</div>
    </div>
  );
};

export default ContainerRow;
