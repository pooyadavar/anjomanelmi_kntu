import { useQuery } from "@tanstack/react-query"
import { getBankChapters, getBankGrades } from "../../services/QuestionBank"

export const useGetBankGrades = () =>{
    const bankGrade = useQuery({
        queryFn : getBankGrades,
        queryKey : ['bankGrade']
    });
    return bankGrade;
}