import { useMutation } from "@tanstack/react-query"
import { postBankPack } from "../../services/QuestionBank"

export const usePostBankPack =() =>{
    const BankPack = useMutation({
        mutationFn : postBankPack,
        mutationKey : ['BankPack']
    });
    return BankPack;
}