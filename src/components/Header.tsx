import logo from "../images/voltorb.png";

function Header() {
  return (
    <header className="flex items-center justify-center gap-4 bg-[#188060] p-4 font-bold text-white">
      <img src={logo} alt="Voltorb logo" className="h-[30px] w-[30px]" />
      <h1>Voltorb Flip</h1>
    </header>
  );
}

export default Header;
