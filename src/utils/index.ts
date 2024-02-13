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
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/blog" },
      { title: "Podcast", url: "/" },
      // { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      // { title: "Discord", url: "/" },
      { title: "Instagram", url: "https://www.instagram.com/enochpromise1" },
      { title: "Twitter", url: "https://twitter.com/Tech_Noch" },
      { title: "Facebook", url: "https://web.facebook.com/?_rdc=1&_rdr" },
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
