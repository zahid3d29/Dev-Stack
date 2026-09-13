import BannerImage from "../assets/img/banner-stack.png";



const Banner = () => {
  return (
    <section className="banner h-[700px]">
      <div className="container mx-auto flex flex-between justify-between items-center align-center h-full">
        <div className="container mx-auto">
          <h1 className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-7xl font-bold text-left py-4 mb-4">
            Build Your Ideal<br></br> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Development Stack</span>
          </h1>
          <p className="text-lg mb-4 max-w-3xl">
            Explore frontend backend and mobile development and tooling options
            compare them side by side and put together the perfect stack for
            your needs{" "}
          </p>

          <div className="banner-btn flex gap-4 my-4">
            <button className="bg-linear-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300 hover:cursor-pointer">
              Explore technologies
            </button>
            <button className="bg-white text-gray-800 border border-gray-300 hover:bg-gray-200 font-bold py-2 px-4 rounded transition-colors duration-300 hover:cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
        <div className="banner-image">
          <img src={BannerImage} alt="Banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
