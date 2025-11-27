export type MoviesModel = {
  id?: number;
  name: string;
  year: string;
}

export type MoviesList = [{
  id: number;
  name: string;
  year: string;
}]

export type UserModel = {
  id?: number;
  email: string;
  password: string;
}
