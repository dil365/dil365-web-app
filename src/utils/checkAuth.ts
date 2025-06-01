import { _UsersService } from "../services/users";

export default async function(token = localStorage.getItem('access_token')) {
  if (token) {
    return await _UsersService.me.GET();
  }
  return null;
}
