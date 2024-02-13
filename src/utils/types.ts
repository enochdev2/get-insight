export interface MenuItem {
  id: string;
  label: string;
  path: string;
}

export interface Option {
  label: string;
  value: string;
}

export interface NavBarItem {
  id: number;
  name: string;
  link: string;
}
export interface FormControlItem {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  component: string;
  options: Option[];
}

export interface BlogFormData {
  title: string;
  except: string;
  description: string;
  image: string;
  category: string;
}

export interface Blog {
  id: number;
  title: string;
  description: string;
  categories: string;
  userId: {username:string};
  userimage: string;
  comments: string[];
  image: string;
}

export interface Categories {
  id: string;
  label: string;
}
 
export interface ProfileForm  {
  username: string;
  email: any;
  password: string;
  imageUrls?: any;
  country: string;
  phone: string;
  address: string;
  postalcode: string;
  city: string;
}