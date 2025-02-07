import { useMutation } from "@tanstack/react-query"
import { IPutBankQuestionId, putBankQuestionId } from "../../services/QuestionBank"

export const useputBankQuestionId = (id : number) =>{
    const bankQuestionId = useMutation({
        mutationFn : (bank : IPutBankQuestionId) => putBankQuestionId(id , bank),
        mutationKey : ['bankQuestionId' , id]
    })
    return bankQuestionId;
}