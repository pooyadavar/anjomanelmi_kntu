import { useQuery } from "@tanstack/react-query"
import { getBankChapters } from "../../services/QuestionBank"

export const useGetBankChapters =(subject : number | string) =>{
    const BankChapters = useQuery({
        queryFn : () =>getBankChapters(subject),
        queryKey : ['BankChapters' , subject]
    });
    return BankChapters;
}