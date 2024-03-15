const CardCategory = (props) => {
  const { img, classname } = props;
  return (
    <a href="">
      <div
        className={`${classname} bg-[#D9D9D9] flex justify-center rounded-lg items-center`}
      >
        <img src={`/src/assets/categories/${img}`} alt="" className="w-1/2" />
      </div>
    </a>
  );
};

export default CardCategory;
