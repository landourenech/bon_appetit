export type  User ={
  id: string;
  name:string;
  email:string;
  password:string;
};

export type Promo ={
  id: string;
  name: string;
  image_url:string;
  date:string;
  total_students:number;
  status: 'terminer '| 'encours';
}

export type Student ={
  id: string;
  firth_name:string;
  last_name: string;
  social: string;
  skill: 'frontend' | 'backend';
}

export type Social ={
  id:string;
  name: string;
  link:string;
}
