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

        <div className="w-full">
          <div className="sm:w-[70%] max-w-[1024px] px-3 mx-auto h-11 my-11 flex justify-between gap-3">
            <button className="w-[110px] text-xs px-3 bg-gray-300 hidden sm:inline-block rounded-md ">
              Download Sportis App
            </button>
            <div className="flex-grow">
              <input
                type="text"
                className="w-full bg-gray-300 h-11 px-3 rounded-md sm:ml-0"
                placeholder="Search..."
              />
              <div className="flex text-xs sm:text-[0.6rem] md:text-xs lg:text-sm gap-2 md:gap-3 font-semibold py-3 sm:ml-0">
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
            <div className="w-[110px] flex gap-2 justify-between items-center">
              <MenuButton
                img="/src/assets/shoppingcart.png"
                classname="w-7 h-7"
              />
              <MenuButton img="/src/assets/notif.png" classname="w-7 h-7 " />
              <MenuButton img="/src/assets/mail.png" classname="w-7 h-7 " />
            </div>
          </div>
        </div>
        <hr className="border-black opacity-50" />
      </header>

      <div className="px-3 max-w-[1024px] sm:w-[70%] mx-auto">
        <div className="bg-gray-300 w-full mt-3 h-[20rem] "></div>

        <p className="font-bold 2xl:text-xl py-3">Selected Categories</p>

        <div className="w-full flex gap-3 overflow-x-auto sm:justify-between">
          <CardCategory
            img="category-1.png"
            classname="w-[5rem] h-[5rem] lg:w-[5.5rem] lg:h-[5.5rem]"
          />
          <CardCategory
            img="category-2.png"
            classname="w-[5rem] h-[5rem] lg:w-[5.5rem] lg:h-[5.5rem]"
          />
          <CardCategory
            img="category-3.png"
            classname="w-[5rem] h-[5rem] lg:w-[5.5rem] lg:h-[5.5rem]"
          />
          <CardCategory
            img="category-4.png"
            classname="w-[5rem] h-[5rem] lg:w-[5.5rem] lg:h-[5.5rem]"
          />
          <CardCategory
            img="category-5.png"
            classname="w-[5rem] h-[5rem] lg:w-[5.5rem] lg:h-[5.5rem]"
          />
          <CardCategory
            img="category-6.png"
            classname="w-[5rem] h-[5rem] lg:w-[5.5rem] lg:h-[5.5rem]"
          />
          <CardCategory
            img="category-7.png"
            classname="w-[5rem] h-[5rem] lg:w-[5.5rem] lg:h-[5.5rem]"
          />
        </div>

        {/* <p className="py-3 2xl:text-xl font-bold">Recommendations</p>

        <div className=" overflow-x-auto flex gap-2 p-2 mb-10">
          {data &&
            data.slice(0, 10).map((item, index) => (
              <a href="">
                <div
                  className="flex-shrink-0 w-[15rem] bg-[#D9D9D9] rounded-lg overflow-hidden"
                  key={index}
                >
                  <img
                    src="/src/assets/test.jpg"
                    alt=""
                    className="w-full h-52 object-cover"
                  />
                  <div className="border-t-2 border-black p-2">
                    <p className="text-sm">{item.nama}</p>
                    <p className="font-bold">
                      Rp. {item.harga.toLocaleString()}
                    </p>
                    <div className="w-full h-10"></div>
                    <div className="">
                      <span>{item.rating}</span>
                      <span className="px-2">|</span>
                      <span>{item.terjual}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
        </div> */}
      </div>
    </>
  );
};

export default Home;
