import Navbar from "../component/fragments/navbar";
const Home = () => {
  return (
    <>
      <header>
        <Navbar />

        <div className="flex mt-11 h-11 justify-evenly">
          <div className="w-48 bg-gray-300 flex justify-center items-center rounded-lg">
            <span>Download Sportis App</span>
          </div>
          <input
            type="search"
            className="outline-none border-2 border-black rounded-lg w-2/3 px-2"
            placeholder="Search..."
          />
          <div className="flex justify-evenly items-center w-48 h-full border-2 border-black rounded-lg ">
            <a href="">
              <img
                src="/src/assets/shoppingcart.png"
                alt=""
                className="w-9 h-9"
              />
            </a>
            <a href="">
              <img src="/src/assets/notif.png" alt="" className="w-9 h-9" />
            </a>
            <a href="">
              <img src="/src/assets/mail.png" alt="" className="w-9 h-9" />
            </a>
          </div>
        </div>
        <div className="w-2/3 mx-auto py-2  ">
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

      <div className="bg-gray-300 w-2/3 h-[350px] mx-auto mt-2"></div>
    </>
  );
};

export default Home;
