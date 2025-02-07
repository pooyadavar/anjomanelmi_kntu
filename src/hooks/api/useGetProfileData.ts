import { useQuery } from "@tanstack/react-query"
import { getProfileData } from "../../services/ProfileData";

export const useGetProfileData = () => {
    const profileData = useQuery({
        queryFn: getProfileData,
        queryKey: ['profileData']
    });
    return profileData;
}