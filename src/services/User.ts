import { httpClient } from "../shared/http-client"

export interface IPostUserLogout {
    refresh: string,
}

export const postUserLogout = async (user: IPostUserLogout) => {
    const formData = new FormData();
    formData.append("refresh_token", user.refresh)
    const response = await httpClient.post('user/logout/', formData);
    return response.data
}