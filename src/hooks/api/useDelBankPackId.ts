import { useQuery } from "@tanstack/react-query"
import { delBankPackId } from "../../services/QuestionBank"

export const useDelBankPackId =(id : number) =>{
    const BankPackId = useQuery({
        queryFn : ()=> delBankPackId(id),
        queryKey : ['BankPackId' , id]

    });
    return BankPackId;
}