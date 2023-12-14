import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/utils";
import {FaFacebook, FaBars, FaLinkedin, FaTwitter} from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-grey-100 bg-slate-500 text-white py-8 px-4">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
             src='/insight.jfif'
            alt="logo"
            width={118}
            height={118}
            className="object-contain"
          />
          <div className="flex flex-1  justify-end gap-3">
            <div>
              <FaFacebook size={30} className='text-blue-800' />
            </div>
            <div>
              <FaTwitter size={30} className='text-blue-800'/>
            </div>
            <div>
              <FaLinkedin size={30} className='bg-blue-400 text-blue-900'/>
            </div>
          </div>
          <p className="text-xl text-grey-700">
            MY-INSIGHT 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-6 text-base min-w-[170px]"
            >
              <h3 className="foot-bold">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-grey-500"
                  >
                    {" "}
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
