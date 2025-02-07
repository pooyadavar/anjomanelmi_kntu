import { useQuery } from "@tanstack/react-query"
import { getBankPack } from "../../services/QuestionBank";

export const useGetBankPack = () =>{
    const bankPack = useQuery({
        queryFn : getBankPack,
        queryKey : ['BankPack']
    });
    return bankPack;
}