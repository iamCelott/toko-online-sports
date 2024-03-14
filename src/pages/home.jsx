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

        <div className="grid grid-cols-2 md:flex md:w-full h-11 gap-2 mt-11 w-2/3 mx-auto">
          <input
            type="search"
            className="w-full h-11 md:order-2 md:w-3/4 outline-none border-2 border-black rounded-lg px-3 col-span-2"
            placeholder="Search..."
          />
          <button className="cursor-pointer md:order-1 bg-gray-200 ">
            Download Sportis App
          </button>
          <div class="flex bg-red-200 justify-center md:order-3 gap-1 items-center rounded-lg h-11">
            <MenuButton
              type="button"
              img="/src/assets/shoppingcart.png"
              classname="w-10"
            />
            <MenuButton
              type="button"
              img="/src/assets/notif.png"
              classname="w-10"
            />
            <MenuButton
              type="button"
              img="/src/assets/mail.png"
              classname="w-10"
            />
          </div>
        </div>

        <div className="w-2/3 mx-auto pt-16 pb-2 lg:pt-2 ">
          <a href="" className="mr-4">
            Sneakers
          </a>
          <a href="" className="mx-4">
            Racket
          </a>
          <a href="" className="mx-4">
            Cuff
          </a>
          <a href="" className="mx-4">
            Towel
          </a>
          <a href="" className="mx-4">
            Shuttlecock
          </a>
        </div>

        <hr className="border-black opacity-50" />
      </header>

      {/* <div className="w-2/3 mx-auto">
        <div className="bg-gray-300 w-full sm:h-[15rem] mt-2"></div>

        <p className="py-3 font-bold">Selected Categories</p>

        <div className="w-full flex justify-between">
          <CardCategory img="category-1.png" classname="sm:w-12 sm:h-12" />
          <CardCategory img="category-2.png" classname="sm:w-12 sm:h-12" />
          <CardCategory img="category-3.png" classname="sm:w-12 sm:h-12" />
          <CardCategory img="category-4.png" classname="sm:w-12 sm:h-12" />
          <CardCategory img="category-5.png" classname="sm:w-12 sm:h-12" />
          <CardCategory img="category-6.png" classname="sm:w-12 sm:h-12" />
          <CardCategory img="category-7.png" classname="sm:w-12 sm:h-12" />
        </div>

        <p className="py-3 font-bold">Recommendations</p>
      </div> */}

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
