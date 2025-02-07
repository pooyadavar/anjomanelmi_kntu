import { httpClient } from "../shared/http-client";

export const getProfileData = async () => {
    const response = await httpClient.get('school/profile/');
    return response.data;
}
