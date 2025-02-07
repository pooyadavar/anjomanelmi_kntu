import { useIsMutating, useMutation } from "@tanstack/react-query"
import { IPostBankPackIdPin, postBankPackIdPin } from "../../services/QuestionBank"

const usePostBankPackIdPin =(id : number) =>{
    const bankPackIdPin = useMutation({
        mutationFn : (bank : IPostBankPackIdPin) => postBankPackIdPin(id , bank),
        mutationKey : ['bankPackIdPin' , id]
    })
    return bankPackIdPin;
}