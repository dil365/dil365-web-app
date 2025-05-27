export type LoginFieldsCanBe = 'email' | 'password';
export type RegisterFieldsCanBe = 'first_name' | 'last_name' | 'birthdate' & LoginFieldsCanBe;

export type LoginFormType = {
  email: string | null;
  password: string | null;
}

export type RegisterFormType = {
  first_name: string | null;
  last_name: string | null;
  birthdate: Date | string | null;
} & LoginFormType;
