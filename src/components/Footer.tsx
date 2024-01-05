import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/utils";
import {
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-grey-100 bg-sky-950 text-white py-8 px-4">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/Dev-Noch1.png"
            alt="logo"
            width={118}
            height={118}
            className="object-contain"
          />
          <div className="flex flex-1  justify-end gap-3">
            <div>
              <a title="icon" href="https://web.facebook.com/profile.php?id=61555363765065">
                <FacebookIcon size={30} round={true} />
              </a>
            </div>
            <div>
              <TwitterIcon size={30} round={true} />
            </div>
            <div>
              <WhatsappIcon  size={30} round={true} />
            </div>
            <div>
              <a title="icon" href="https://www.linkedin.com/in/enoch-akhabue-01b991269/">
                <LinkedinIcon size={30} round={true} />
              </a>
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
