import { useQuery } from "@tanstack/react-query"
import { getBankPackId } from "../../services/QuestionBank"

export const usegetBankPackId = (id : number) =>{
    const BankPackId = useQuery({
        queryFn : () => getBankPackId(id),
        queryKey : ['BankPackId',id]
    });
    return BankPackId;
}