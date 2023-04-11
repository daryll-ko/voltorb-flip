import logo from "../images/voltorb.png";

function Header() {
  return (
    <header className="flex items-center justify-center gap-2 bg-[#188060] p-2 text-white">
      <img src={logo} alt="Voltorb logo" className="h-[25px] w-[25px]" />
      <h1>Voltorb Flip</h1>
    </header>
  );
}

export default Header;
