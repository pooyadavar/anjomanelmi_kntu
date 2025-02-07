import { useQuery } from "@tanstack/react-query"
import { getBankQuestionId } from "../../services/QuestionBank"

const useGetBankQuestionId =(id : number) =>{
    const bankQuestionId =  useQuery({
        queryFn : () => getBankQuestionId(id),
        queryKey : ['bankQuestionId' , id]
    });
    return bankQuestionId;
}