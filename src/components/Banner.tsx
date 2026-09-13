import BannerImage from "../assets/img/banner-stack.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 md:py-8 md:min-h-[700px] md:flex-row md:justify-between md:px-6">

        <div className="w-full max-w-xl text-center md:text-left">
  
          <h1 className="mb-4 py-2 text-[32px] font-bold leading-tight md:text-5xl lg:text-7xl">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Build Your Ideal
            </span>
            <br />
            <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-5 max-w-xl text-sm leading-6 text-gray-600 md:mx-0 md:text-lg md:leading-7">
            Explore frontend, backend and mobile development and tooling
            options, compare them side by side and put together the perfect
            stack for your needs.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-2 sm:gap-3 md:justify-start">
            <button
              className="
            rounded-lg
            bg-gradient-to-r from-green-400 to-blue-500
            px-3 py-2
            text-xs font-bold text-white
            transition
            hover:from-pink-500 hover:to-yellow-500
            sm:px-4 sm:text-sm
            md:px-5 md:py-2.5 md:text-base
          "
            >
              Explore technologies
            </button>

            <button
              className="
            rounded-lg
            border border-gray-300
            bg-white
            px-3 py-2
            text-xs font-bold text-gray-800
            transition
            hover:bg-gray-100
            sm:px-4 sm:text-sm
            md:px-5 md:py-2.5 md:text-base
          "
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-8 w-full md:mt-0 md:max-w-[480px] lg:max-w-[550px]">
          <img
            src={BannerImage}
            alt="Development Stack"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
