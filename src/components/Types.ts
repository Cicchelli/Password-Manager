import { type } from "@testing-library/user-event/dist/type";

export type TargetType = React
  .ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
export type FormDefaultValuesType = {
  nomeDoServico: string,
  login: string,
  senha: string,
  url: string,
};
export type FormDefaultValuesTypewithid = FormDefaultValuesType &{id:string}