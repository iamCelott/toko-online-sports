const MenuButton = (props) => {
  const { img, type, classname } = props;
  return (
    <>
      <button type={type} className={`cursor-pointer ${classname}`}>
        <img src={img} alt="" />
      </button>
    </>
  );
};

export default MenuButton;
