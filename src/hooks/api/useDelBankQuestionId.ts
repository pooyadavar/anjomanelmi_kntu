import { useQuery } from "@tanstack/react-query"
import { delBankQuestionId } from "../../services/QuestionBank"

export const useDelBankQuestionId =(id : number) =>{
    const bankQuestionId = useQuery({
        queryFn : () => delBankQuestionId(id),
        queryKey : ['bankQuestionId' , id] 
    })
    return bankQuestionId;
}