import { useQueries, useQuery } from "@tanstack/react-query"
import { getBankSubjects } from "../../services/QuestionBank"

export const useGetBankSubjects = (grade: string | number) =>{
    const bankSubjects = useQuery({
        queryFn : () => getBankSubjects(grade) ,
        queryKey : ['bankSubjects', grade]
    })
    return bankSubjects;
}