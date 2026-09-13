import Logo from "../assets/img/logo-text.png";

const Nav = () => {
  return (
    <section className="navbar">
      <div className="container mx-auto flex flex-between justify-between items-center ">
        <div className="logo w-0 md:w-1/4">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="nav-links flex gap-8 align-middle items-center text-gray-700">
          <li className="text-green-500 font-bold"><a href="#">Home</a></li>
          <li><a href="#">Technology</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="nav-btn flex gap-4">
          <button className="btn border-0 bg-transparent">Login</button>
          <button className="btn text-white bg-green-500 hover:bg-green-600 rounded-full">Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default Nav;