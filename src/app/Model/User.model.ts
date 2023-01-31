import { AdressModel } from "./Adresse.model";

export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AdressModel;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
