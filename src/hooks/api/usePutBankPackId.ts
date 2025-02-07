import { useMutation } from "@tanstack/react-query"
import { putBankPackId } from "../../services/QuestionBank"
import { IPutBankPackId } from "../../services/QuestionBank";

export const usePutBankPackId =(id : number) =>{
    const BankPackId = useMutation({
        mutationFn : (bank : IPutBankPackId)=> putBankPackId(id , bank),
        mutationKey : ['BankPackId' , id]
    });
    return BankPackId;
}