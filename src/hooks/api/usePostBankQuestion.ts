import { useMutation } from "@tanstack/react-query"
import { IPostBankQuestion, postBankQuestion } from "../../services/QuestionBank"

export const usePostBankQuestion =() =>{
    const bankQuestion = useMutation({
        mutationFn : (bank : IPostBankQuestion) =>postBankQuestion(bank),
        mutationKey : ['bankQuestion']
    })
    return bankQuestion;
}
