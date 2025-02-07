import { useMutation } from "@tanstack/react-query"
import { IPostUserLogout, postUserLogout } from "../../services/User"

export const usePostUserLogout = () =>{
    const UserLogout = useMutation({
        mutationFn :(user : IPostUserLogout) => postUserLogout(user),
        mutationKey :['UserLogout']
    })
    return UserLogout;
}