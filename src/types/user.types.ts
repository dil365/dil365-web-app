export type UserInitialStateType = {
  user_data: {
    user_id: number | null,
    first_name: string | null,
    last_name: string | null,
    email: string | null,
    birthdate: Date | string | null,
  }
}
