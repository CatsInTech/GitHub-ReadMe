const Card = ({
  Image,
  ImgAlign,
  Header,
  TextHeader,
  Title,
  Text,
  children,
  Footer,
  className
}) => {
  return (
    <div className={"card" + (className ? " " + className : "")}>
      {Image && (
        <img
          className={"card-img-" + ImgAlign}
          src={Image}
          alt={Header && Title}
        />
      )}
      {Header &&
        (TextHeader ? (
          <div className="card-header">{Header}</div>
        ) : (
          <h5 className="card-header">{Header}</h5>
        ))}
      {(Title || Text || children) && (
        <div className="card-body">
          {Title && <h5 className="card-title">{Title}</h5>}
          {Text && <p className="card-text">{Text}</p>}
          {children}
        </div>
      )}
      {Footer && <div className="card-footer text-muted">{Footer}</div>}
    </div>
  );
};

export default Card;
