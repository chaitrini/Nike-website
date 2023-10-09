import footer from '../assets/images/footer-logo.svg'
import copy from '../assets/icons/copyright-sign.svg'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'
interface social{
  src: string,
  alt:string,
}
interface footer{
  title: string,
  links: link[]
}
interface link{
  name: string,
  link:string,
}

const Footer = () => {
  const socialMedia:social[] = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
  ];
  
  const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
  ];
  

  return (
    <footer className="bg-black max-container text-white">
      <div className="flex flex-col justify-between items-start gap-20 flex-wrap max-lg:flex-col ml-4 mt-10">
        <div className="flex flex-col items-start mt-4">
          <a href="/">
            <img src={footer} alt='footer' width={155} height={46} /> 
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get the products from the store near to you to embrace your style with new collection
          </p>
          <div className='flex gap-5 mt-8 items-center'>
            {socialMedia.map((logo:social) => (
              <div className='flex justify-center items-center  w-12 h-12 bg-white rounded-full'>
                <img src={logo.src} alt={logo.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        
          <div className='flex flex-1 flex-wrap lg:gap-10 gap-20 justify-between'>
            {footerLinks.map((l) => (
              <div  className='flex flex-col items-start mt-8'>
                <h4 className='font-montserrat leading-normal font-medium text-2xl mb-6'>{l.title}</h4>
                <ul className='flex justify-start flex-col'>
                  {l.links.map((link:link) => (
                    <li className='mt-3 text-white-400 font-montserrat leading-normal hover:text-slate-gray cursor-pointer text-base'>
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>  
            ))}
            </div>
          </div>
          
            <div className='flex justify-around text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
              <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
                <img src={copy} alt='copyright ' className='rounded-full m-0' width={24} height={24} />
                <p>Copyrights All rights reserved</p>
              </div>
              <p className='font-montserrat cursor-pointer '>Terms and Conditions</p>
            </div> 
    </footer>
  )
}
export default Footer;