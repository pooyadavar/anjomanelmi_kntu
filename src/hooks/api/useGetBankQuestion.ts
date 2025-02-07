import { useQuery } from "@tanstack/react-query";
import { getBankQuestion } from "../../services/QuestionBank";

interface Filters {
    grade: number | null;
    search: string; 
    difficulty :number | null;  
    author : string  ; 
  }
  
  export const useGetBankQuestion = (filters: Filters) => {
    const bankQuestion = useQuery({
      queryFn: () => getBankQuestion(filters),
      queryKey: ['bankQuestion', filters], 
    });
    return bankQuestion;
  };