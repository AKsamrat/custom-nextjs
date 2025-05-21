export interface Blog {
  _id?: string;
  title: string;
  link?: string;
  description: string;
  publish_date: string;
  author_name?: string;
  image?: string | null;
  category: string;
}
export interface UserData {
  name?: string,
  email: string,
  role?: string,
  iat?: string,
  expires?: string,
}
// export type UserData = {
//   username: string;
//   email: string;
//   password: string;
// };
export type UserProps = {
  user: {
    name?: string | null | undefined,
    email?: string | null | undefined,
    image?: string | null | undefined,
  }
}
export type AnimationProps = {
  duration?: number;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
};
export type Skills = {
  _id: string;
  title: string;
  image: string;
}