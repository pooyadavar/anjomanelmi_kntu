export const changeDifficultyVal = (difficalty: string): string => {
    if (difficalty === "1") return "آسان"
    if (difficalty === "3") return "دشوار"
    return "متوسط"
}
