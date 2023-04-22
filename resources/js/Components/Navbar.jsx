export default function Navbar () {
	return(
		<>
		<link href="/css/homepage.css" rel="stylesheet"/>
		<nav className="navbar bg-blue-600 flex justify-between items-center py-2 lg:px-10 px-6">
				<img src="/img/logo.png" alt="" className="navLogo w-24"/>
				<ul className="navList hidden lg:flex justify-center text-base">
					<li className="navListItem px-3 py-3">
						<a href="/">Home</a>
					</li>
					<li className="navListItem px-3 py-3">
						<a href="/category?code=market">Market</a>
					</li>
					<li className="navListItem px-3 py-3">
						<a href="/category?code=finance">My Money</a>
					</li>
					<li className="navListItem px-3 py-3">
						<a href="/category?code=news">News</a>
					</li>
					<li className="navListItem px-3 py-3">
						<a href="/category?code=tech">Tech</a>
					</li>
					<li className="navListItem px-3 py-3">
						<a href="/category?code=lifestyle">Lifestyle</a>
					</li>
					<li className="navListItem px-3 py-3">
						<a href="/category?code=syariah">Syariah</a>
					</li>
					<li className="navListItem px-3 py-3">
						<a href="/category?code=creative">Entrepreneur</a>
					</li>
					<li className="navListItem px-3 py-3">
						<a href="/category?code=busines">cuap cuap cuan</a>
					</li>
					<li className="navListItem px-3 py-3">
						<a href="/category?code=research">Research</a>
					</li>
					<li className="navListItem px-3 py-3 bg-red-600 flex">
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-dot m-0 p-0" viewBox="0 0 16 16">
						  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
						</svg>
						<a href="/cnbctv" className="p-0 m-0">CNBC TV</a>
					</li>
					<li className="navListItem px-3 py-3">
						<a href="/login">Login</a>
					</li>
				</ul>
				<span className="humbergerIcon md:hidden">
					<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
						<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
					</svg>
				</span>
			</nav>
		</>
	)
}