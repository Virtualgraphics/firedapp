import Image from 'next/image'

const Footer = () => {
    return (
      <footer className=" bg-primary-100 py-10 bg-black">
        <div className="justify-content mx-auto w-3/6 gap-16 md:flex">
          <div className="mt-10 basis-1/2 md:mt-0">
           
           
            <div className="w-40">
            <Image
              className="w-40"
              src="/assets/enDAPP_logo.svg"
              alt="Endapp Logo"
              width={1260}
              height={750}
            />
            </div>
            
            <p className="text-white my-5 text-lg" >
              Web3 meets Entertainment.
            </p>
            <p className="text-yellow-100"> &copy; {new Date().getFullYear()} Virtual Graphics. All rights reserved.</p>
          </div>
          
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className=" text-white font-bold">Contact Us</h4>
            <p className="text-yellow-100 my-5">david(at)virtual-graphics.ch</p>
            <p className="text-yellow-100 ">Terms of Use/Privacy/Support</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;