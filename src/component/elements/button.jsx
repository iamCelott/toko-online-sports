const Button = (props) => {
  const { color = "bg-gray-300", classname, onClick, children, type } = props;
  return (
    <button
      onClick={onClick}
      type={type}
      className={`text-xs px-3 ${color} ${classname}`}
    >
      {children}
    </button>
  );
};

export default Button;
