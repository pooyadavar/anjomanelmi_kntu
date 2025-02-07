import { useQuery } from "@tanstack/react-query";
import { getBankLessons } from "../../services/QuestionBank";

export const useGetBankLessons = (chapter : number |string) => {
    const bankLessons = useQuery({
        queryFn: () => getBankLessons(chapter),
        queryKey: ['bankLessons' , chapter]
    });
    return bankLessons;
}