export default function Header() {
  return (
    <header className="bg-white 100 shadow-md fixed top-0 w-full z-5">
      <div className="max-w-7xl mx-auto flex items-center justify-center py-4 hover:cursor-pointer" onClick={() => window.location.href = '/'}>
        <img
          src="https://media.licdn.com/dms/image/v2/D4D0BAQGiaARpIEJqwQ/company-logo_200_200/B4DZZth6opH4AQ-/0/1745594330131/niroggyan_logo?e=1756944000&v=beta&t=A6FPAsUc4WIKj3xCzVeSBJCYG5ichI4KQf0dp2e5eEc" 
          alt="Logo"
          className="w-10 h-10 mr-2 "
        />
        <h1 className="text-2xl font-bold text-blue-700 font-sans">NirogGyan</h1>
      </div>
    </header>
  );
}
