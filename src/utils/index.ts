import { Categories, FormControlItem, MenuItem, Option } from "./types";

export const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "category",
    label: "Category",
    path: "/category/application",
  },
  {
    id: "blogs",
    label: "Blogs",
    path: "/blogs",
  },
  {
    id: "search",
    label: "Search",
    path: "/search",
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      // { title: "How it works", url: "/" },
      { title: "Techarvel", url: "https://portfolio-enoch.vercel.app" },
      { title: "Blog", url: "/blog" },
      { title: "portfolio", url: "https://portfolio-enoch.vercel.app" },
      ,
    ],
  },
  {
    title: "Socials",
    links: [
      // { title: "Discord", url: "/" },
      { title: "Instagram", url: "https://www.instagram.com/enochpromise1" },
      { title: "Twitter", url: "https://twitter.com/Tech_Noch" },
      { title: "Facebook", url: "https://web.facebook.com/?_rdc=1&_rdr" },
      { title: "LinkedIn", url: "https://www.linkedin.com/in/enoch-akhabue-%F0%9F%92%BB-full-stack-developer-01b991269" },
    ],
  },
];

export const categories: Categories[] = [
  {
    id: "Finance",
    label: "Finance",
  },
  {
    id: "Business",
    label: "Business",
  },
  {
    id: "Family",
    label: "Family",
  },
  {
    id: "Technology",
    label: "Technology",
  },
];

export const style = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    padding: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "10px",
    text: "center",
  },
  copyContainer: {
    border: "1px solid ",
    background: "rgb(0,0,0,0.7)",
    display: "none",
    text: "center",
  },
  title: {
    color: "aquamarine",
    fontStyle: "italic",
    fontSize: 20,
  },
  icons: {
    fontSize: 25,
  },
};

// export const footerLinks = [
//   {
//     title: "About",
//     links: [
//       // { title: "How it works", url: "/" },
//       { title: "Featured", url: "/" },
//       { title: "Partnership", url: "/" },
//       { title: "Bussiness Relation", url: "/" },
//     ],
//   },
//   {
//     title: "Company",
//     links: [
//       { title: "Events", url: "/" },
//       { title: "Blog", url: "/blog" },
//       { title: "Podcast", url: "/" },
//       // { title: "Invite a friend", url: "/" },
//     ],
//   },
//   {
//     title: "Socials",
//     links: [
//       // { title: "Discord", url: "/" },
//       { title: "Instagram", url: "https://www.instagram.com/enochpromise1" },
//       { title: "Twitter", url: "https://twitter.com/Tech_Noch" },
//       { title: "Facebook", url: "https://web.facebook.com/?_rdc=1&_rdr" },
//     ],
//   },
// ];

export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/planet-01.png',
    title: 'The Hogwarts',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-02.png',
    title: 'The Upside Down',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.png',
    title: 'Kadirojo Permai',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-04.png',
    title: 'Paradise Island',
  },
  {
    id: 'world-5',
    imgUrl: '/planet-05.png',
    title: 'Hawkins Labs',
  },
];

export const startingFeatures = [
  'Find a world that suits you and you want to enter',
  'Enter the world by reading basmalah to be safe',
  'No need to beat around the bush, just stay on the gas and have fun',
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'Blockchain Development',
    subtitle:
        'As  leading full-stack and blockchain developers, We provide client with cutting-edge web3 solutions and applications.',
  },
  {
    imgUrl: '/headset.svg',
    title: 'SmartContract & Dapps',
    subtitle:
        'From smart contracts and decentralized app(Dapps) to scalable backend systems, our expertise ensures that your project is built on a solid foundation. Eplore how our tailored services can bring your vision to life.',
  },
];

export const insights = [
  {
    imgUrl: '/planet-06.png',
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
        'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: '/planet-07.png',
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
        'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: '/planet-08.png',
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
        'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
];

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
];
