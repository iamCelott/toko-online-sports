import { useEffect, useState } from "react";
import Navbar from "../component/fragments/navbar";
import CardCategory from "../component/fragments/cardcategory";
import MenuButton from "../component/fragments/menubutton";

const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000");
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header className="sticky top-0 bg-white">
        <Navbar />

        <div className="flex mx-3 lg:mx-10 h-11 my-11 justify-between gap-3 lg:gap-10">
          <button className="w-32 lg:w-[160px] bg-gray-300 rounded-md text-[0.8rem] sm:px-5 md:px-2 text-wrap hidden sm:inline-block">
            Download Sportis App
          </button>
          <div className="flex-grow">
            <input
              type="text"
              className="w-full bg-gray-300 h-11 px-3 rounded-md sm:ml-0"
              placeholder="Search..."
            />
            <div className="text-xs gap-3 md:gap-5 lg:7 flex font-semibold py-3 sm:ml-0 sm:text-sm">
              <a href="" className="">
                Sneakers
              </a>
              <a href="" className="">
                Racket
              </a>
              <a href="" className="">
                Cuff
              </a>
              <a href="" className="">
                Towel
              </a>
              <a href="" className="">
                Shuttlecock
              </a>
            </div>
          </div>
          <div className="w-24 sm:w-32 lg:w-[160px] flex justify-between items-center">
            <MenuButton
              img="/src/assets/shoppingcart.png"
              classname="w-7 h-7 lg:w-9 lg:h-9"
            />
            <MenuButton
              img="/src/assets/notif.png"
              classname="w-7 h-7 lg:w-9 lg:h-9"
            />
            <MenuButton
              img="/src/assets/mail.png"
              classname="w-7 h-7 lg:w-9 lg:h-9"
            />
          </div>
        </div>

        <hr className="border-black opacity-50" />
      </header>

      <div className="px-3 mx-auto md:px-[10rem] lg:px-[15rem] ">
        <div className="bg-gray-300 w-full sm:h-[20rem] mt-3 h-[15rem] md:h-[17rem]"></div>

        <p className="font-bold py-3">Selected Categories</p>

        <div className="w-full flex gap-3 md:gap-5 overflow-x-auto sm:justify-between">
          <CardCategory img="category-1.png" classname="w-[5rem] h-[5rem]" />
          <CardCategory img="category-2.png" classname="w-[5rem] h-[5rem]" />
          <CardCategory img="category-3.png" classname="w-[5rem] h-[5rem]" />
          <CardCategory img="category-4.png" classname="w-[5rem] h-[5rem]" />
          <CardCategory img="category-5.png" classname="w-[5rem] h-[5rem]" />
          <CardCategory img="category-6.png" classname="w-[5rem] h-[5rem]" />
          <CardCategory img="category-7.png" classname="w-[5rem] h-[5rem]" />
        </div>

        <p className="py-3 font-bold">Recommendations</p>
      </div>

      {/* <div>
        <h1>Daftar Peralatan Olahraga</h1>
        <ul>
          {data &&
            data.slice(0, 4).map((item, index) => (
              <li key={index}>
                <h2>{item.nama}</h2>
                <p>Rating: {item.rating}</p>
                <p>Harga: Rp {item.harga}</p>
                <p>Diskon: {item.diskon}%</p>
                <p>Kategori: {item.kategori}</p>
                <img src={item.gambar} alt={item.nama} />
              </li>
            ))}
        </ul>
      </div> */}
    </>
  );
};

export default Home;
