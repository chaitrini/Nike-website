
import header from '../assets/images/header-logo.svg'
import { model } from './model.ts'
import hamburger from '../assets/icons/hamburger.svg'


const Nav = () => {
  const navLinks:model[]  = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];
  return (
    <header className='px-6 py-8 absolute true z-10 w-full'>
      <nav className='flex justify-between items-center max-container' >
        <a href='/'>
        <img src={header} alt='logo' width={130} height={29}>
        </img> 
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-md:hidden' >
          {navLinks.map((item:model) => (
            <li key={item.label}><a href={item.href}
              className='font-montserrat leading-normal text-lg text-slate-gray'>
              {item.label}</a></li>
          ))}
        </ul>
        <div className='hidden max-md:block'>
          <img src={hamburger} alt='humburger' width={25} height={25}></img>
        </div>
        
        
      </nav>
    </header>
  )
}
export default Nav;