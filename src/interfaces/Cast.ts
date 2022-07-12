interface IPerson {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  profile_path: string | null;
  popularity: number;
  credit_id: string;
}

export interface ICast extends IPerson {
  character: string;
  order: number;
}

export interface ICrew extends IPerson {
  department: string;
  job: string;
}

export default interface ICredit {
  id: number;
  cast: Array<ICast>;
  crew: Array<ICrew>;
}
