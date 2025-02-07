import { useQuery } from "@tanstack/react-query"
import { getBankPackIdContent } from "../../services/QuestionBank"

export const useGetBankPackIdContent = (id : string) =>{
    const bankPackIdContent = useQuery({
        queryFn :()=> getBankPackIdContent(id),
        queryKey : ['bankPackIdContent' , id]
    });
    return bankPackIdContent;
}