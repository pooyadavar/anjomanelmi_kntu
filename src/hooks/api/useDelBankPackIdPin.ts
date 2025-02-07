import {  useQuery } from "@tanstack/react-query"
import { delBankPackIdPin } from "../../services/QuestionBank"

export const useDelBankPackIdPin =(id : number) =>{
    const BankPackIdPin = useQuery({
        queryFn : ()=> delBankPackIdPin(id),
        queryKey : ['BankPackIdPin' , id]
    });
    return BankPackIdPin;
}