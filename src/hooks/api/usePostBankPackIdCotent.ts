import { useMutation } from "@tanstack/react-query"
import { IPostBankPackIdCotent, postBankPackIdCotent } from "../../services/QuestionBank"

export const usePostBankPackIdCotent =(id : number) =>{
    const bankPackIdCotent = useMutation({
        mutationFn : (bank : IPostBankPackIdCotent) => postBankPackIdCotent(id , bank),
        mutationKey:['bankPackIdCotent' , id]
    })
    return bankPackIdCotent;
}