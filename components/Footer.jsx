import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';
import Button from './Button';

const FooterLinks = ({ heading, items, extraClasses }) => (
  <div className={`flex-1 justify-start items-start ${extraClasses}`}>
    <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10">
      {heading}
    </h3>
    <div>
      {items.map((item, index) => (
        <div key={item.text + index} className="mb-3">
          <a
            href={item.url}
            target="_blank" // Open the link in a new tab
            className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer
          dark:hover:text-nft-gray-1 hover:text-nft-black-1 hover:underline"
            rel="noreferrer"
          >
            {item.text}
          </a>
        </div>
      ))}
    </div>
  </div>
);

const socialLinks = [
  { image: images.twitter, url: 'https://twitter.com/FusionwaveAI' },
  { image: images.linkedin, url: 'https://www.linkedin.com/company/fusionwaveai/' },
  { image: images.telegram, url: 'https://t.me/fusionwaveai' },
  { image: images.discord, url: 'https://discord.gg/MyfMCJukSe' },
];

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="flexCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">
      <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Image
              src={images.logo02}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
            <p className=" dark:text-white text-nft-dark font-semibold text-lg ml-1">
              FusionwaveNFT
            </p>
          </div>
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6">
            Get the latest updates
          </p>
          <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border
           dark:border-nft-black-2 border-nft-gray-2 rounded-md"
          >
            <input
              type="email"
              placeholder="Your Email"
              className="h-full flex-1 w-full dark:bg-nft-black-2
             bg-white px-4 rounded-md font-poppins dark:text-white text-nft-black-1 font-normal text-xs minlg:text-lg outline-none"
            />
            <div className="flex-initial">
              <Button
                btnName="Email me"
                btnType="secondary"
                classStyles="rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
          <FooterLinks
            heading="Resources(live)"
            items={[
              { text: 'Pitchdeck', url: 'https://drive.google.com/file/d/1ejBTI-hKUAznchKRb65WQsTxQG-t5uKI/view' },
              { text: 'Litepaper', url: 'https://drive.google.com/file/d/1TkK88BGE-LobHAxMCVI9Es58_Qpg91Mh/view' },
            ]}

          />
          <FooterLinks
            heading="T & Cs(not live)"
            items={[
              { text: 'Terms of service', url: '/terms' },
              { text: 'Privacy policy', url: '/privacy' },
              { text: 'Legals', url: '/legals' },
            ]}
            extraClasses="ml-4"
          />
        </div>
      </div>

      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">
            FusionwaveAI, All Rights Reserved
          </p>
          <div className="flex flex-row sm:mt-4">
            {socialLinks.map((social, index) => (
              <div className="mx-2 cursor-pointer" key={`social-${index}`}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer" // Add security attribute
                >
                  <Image
                    src={social.image}
                    key={index}
                    objectFit="contain"
                    width={24}
                    height={24}
                    alt="social"
                    className={theme === 'light' ? 'filter invert' : undefined}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
