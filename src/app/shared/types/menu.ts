export interface  MenuItem  {
  label: string;
  value: number;
};

export interface MenuList {
  name: string;
  items: MenuItem[];
};

export interface MenuPages {
  pages: MenuList[];
};