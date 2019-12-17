import { User } from './User.model';
export interface Fact {
  _id: String;
  user: User;
  text: string;
}
