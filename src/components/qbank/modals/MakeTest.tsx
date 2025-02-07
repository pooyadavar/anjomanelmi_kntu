import React, { useState, useRef } from 'react';
import { Box, Button, Grid, MenuItem, Modal, Select, Switch, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import assets from '../../../assets';
import { useGetBankGrades } from '../../../hooks/api/useGetBankGrades';
import { useGetBankSubjects } from '../../../hooks/api/useGetBankSubjects';
import { useGetBankChapters } from '../../../hooks/api/useGetBankChapters';
import { useGetBankLessons } from '../../../hooks/api/useGetBankLessons';
import QuillEditor from '../QuillEditor';
import { BankVisibility, postBankQuestion } from '../../../services/QuestionBank';
import { Public } from '@mui/icons-material';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 82,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
        margin: 1,
        padding: 0,
        transform: "translateX(10px)",
        "&.Mui-checked": {
            color: "#fff",
            transform: "translateX(39px)",
            "& .MuiSwitch-thumb": {
                backgroundColor: "rgba(116, 72, 132, 1)",
            },
            "& .MuiSwitch-thumb:before": {
                backgroundImage: `url('data:image/svg+xml,%3Csvg width="18" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M1 8.79803L7.41016 15.2082L21 1.61841" stroke="%23F5E8FA" stroke-width="2"/%3E%3C/svg%3E')`,
            },
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: "rgba(245, 232, 250, 1)",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        backgroundColor: "rgba(167, 167, 167, 1)",
        width: 30,
        height: 30,
        "&::before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,

            top: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="18" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M20.915 1.41333L0.917236 21.4127" stroke="%23F5E8FA" stroke-width="2"/%3E%3Cpath d="M0.915111 1.41333L20.9128 21.4127" stroke="%23F5E8FA" stroke-width="2"/%3E%3C/svg%3E')`,
        },
    },
    "& .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "rgba(245, 232, 250, 1)",
        borderRadius: 20 / 2,
        boxShadow: "0px 4px 0px 0px rgba(217, 217, 217, 1)",
    },
}));

const QuestionForm: React.FC<{ handleClose: () => void }> = ({ handleClose }) => {
    const [buttonText, setButtonText] = useState("ذخیره"); // State for button text
    const [success, setSuccess] = useState(false); 
    const [questionText, setQuestionText] = useState("");
    const [difficulty, setDifficulty] = useState(0);
    const [grade, setGrade] = useState(0);
    const [subject, setSubject] = useState(0);
    const [chapter, setChapter] = useState(0);
    const [lesson, setLesson] = useState(0);
    const [choices1, setChoices1] = useState("");
    const [choices2, setChoices2] = useState("");
    const [choices3, setChoices3] = useState("");
    const [choices4, setChoices4] = useState("");
    const [choice1Correction, setChoice1Correction] = useState(false);
    const [choice2Correction, setChoice2Correction] = useState(false);
    const [choice3Correction, setChoice3Correction] = useState(true);
    const [choice4Correction, setChoice4Correction] = useState(false);
    const [choice1Image, setChoice1Image] = useState("");
    const [choice3Image, setChoice3Image] = useState("");
    const [mainImage, setMainImage] = useState("");
    const [questionAnswer, setQuestionAnswer] = useState("");
    const { data: dataGrade } = useGetBankGrades();
    const { data: dataSubject } = useGetBankSubjects(grade);
    const { data: datachapter } = useGetBankChapters(subject);
    const { data: dataLesson } = useGetBankLessons(chapter)




    const handleSubmit = async () => {

        setButtonText("در حال ثبت");

        setTimeout(() => {
            setButtonText("ذخیره");
        }, 5000);


        const correctOption = choice1Correction ? 1 :
        choice2Correction ? 2 :
        choice3Correction ? 3 : 4;

        const questionData = {
            visibility: BankVisibility.Public,
            description: questionText,
            published_year: new Date().getFullYear().toString(),
            difficulty,
            status: 'active',
            option1: choices1,
            option2: choices2,
            option3: choices3,
            option4: choices4,
            correct_option: correctOption.toString(),
            answer: questionAnswer,
            grade: grade.toString(),
            subject: subject.toString(),
            chapter: chapter.toString(),
            lesson: lesson.toString(),
        };

        try {
            const response = await postBankQuestion(questionData);
            setSuccess(true);
        } catch (error) {
            console.error("Failed to post question:", error);
        }
    }

    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { md: "60%", xs: "80%" },
                    bgcolor: "background.paper",
                    p: 4,
                    height: "60%",
                    display: "block",
                    borderRadius: "20px",
                    overflow: "auto",
                    outline: "none",
                    boxShadow: "0px 12px 0px 0px rgba(0,0,0,0.4)",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 800, color: "#696969" }}
                        >
                            سؤال تستی
                        </Typography>
                        <Box
                            sx={{
                                width: "40px",
                                height: "40px",
                                backgroundColor: "#EE6A36",
                                borderRadius: "20px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0px 4px 0px 0px rgba(217, 217, 217, 1)",
                            }}

                            onClick={handleClose}
                        >
                            <img src={assets.svg.closeSvg} alt="closeSvg" />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: "#F6F6F6",
                            mt: 4,
                            borderRadius: "20px",
                            display: "flex",
                            flexDirection: "column",
                            pb: 2,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: 700,
                                color: "#390A4D",
                                paddingX: 4,
                                paddingY: 1.5,
                            }}
                        >
                            صورت سؤال
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center"  }}>
                            {/* <TextField
                                style={{ textAlign: "right", direction: "rtl", width: "90%" }}
                                sx={{ backgroundColor: "white" }}
                                placeholder="متن صورت سؤال"
                                multiline
                                rows={4}
                                value={questionText}
                                onChange={(e) => {
                                    setQuestionText(e.target.value);
                                }}
                            /> */}

                            <QuillEditor value={questionText} onChange={setQuestionText} />
                        </Box>
                        <Grid container sx={{ mt: 2, px: 4 }} rowGap={2}>
                            <Grid
                                item
                                xs={6}
                                sx={{ display: "flex", justifyContent: "center" }}
                            >
                                <Typography
                                    sx={{
                                        color: "rgba(57, 10, 77, 1)",
                                        width: "10%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    سختی
                                </Typography>
                                <Select
                                    value={difficulty}
                                    onChange={(e) => {
                                        setDifficulty(Number(e.target.value));
                                    }}
                                    size="small"
                                    sx={{
                                        mr: 2,
                                        width: "60%",
                                        textAlign: "center",
                                        borderRadius: "20px",
                                    }}
                                >
                                    <MenuItem value={0}>انتخاب کنید</MenuItem>
                                    <MenuItem value={1}>آسان</MenuItem>
                                    <MenuItem value={2}>متوسط</MenuItem>
                                    <MenuItem value={3}>سخت</MenuItem>
                                </Select>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sx={{ display: "flex", justifyContent: "center" }}
                            >
                                <Typography
                                    sx={{
                                        color: "rgba(57, 10, 77, 1)",
                                        width: "10%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    پایه
                                </Typography>
                                <Select
                                    value={grade}
                                    onChange={(e) => {
                                        setGrade(Number(e.target.value));
                                        console.log(grade)
                                    }}
                                    size="small"
                                    sx={{
                                        mr: 2,
                                        width: "60%",
                                        textAlign: "center",
                                        borderRadius: "20px",
                                    }}
                                >
                                    <MenuItem value={0}>انتخاب کنید</MenuItem>
                                    {dataGrade?.map((gradesSingle) => {
                                        return (
                                            <MenuItem value={gradesSingle.id}>
                                                {gradesSingle.title}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "rgba(57, 10, 77, 1)",
                                        width: "10%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    سرفصل
                                </Typography>
                                <Select
                                    value={subject}
                                    onChange={(e) => {
                                        setSubject(Number(e.target.value));

                                    }}
                                    size="small"
                                    sx={{
                                        mr: 2,
                                        width: "60%",
                                        textAlign: "center",
                                        borderRadius: "20px",
                                    }}
                                >
                                    <MenuItem value={0}>انتخاب کنید</MenuItem>
                                    {dataSubject && dataSubject.map((subjectsSingle) => {
                                        return (
                                            <MenuItem value={subjectsSingle.id}>
                                                {subjectsSingle.title}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sx={{ display: "flex", justifyContent: "center" }}
                            >
                                <Typography
                                    sx={{
                                        color: "rgba(57, 10, 77, 1)",
                                        width: "10%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    فصل
                                </Typography>
                                <Select
                                    value={chapter}
                                    onChange={(e) => {
                                        setChapter(Number(e.target.value));
                                    }}
                                    size="small"
                                    sx={{
                                        mr: 2,
                                        width: "60%",
                                        textAlign: "center",
                                        borderRadius: "20px",
                                    }}
                                >
                                    <MenuItem value={0}>انتخاب کنید</MenuItem>
                                    {datachapter?.map((chaptersSingle) => {
                                        return (
                                            <MenuItem value={chaptersSingle.id}>
                                                {chaptersSingle.title}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sx={{ display: "flex", justifyContent: "center" }}
                            >
                                <Typography
                                    sx={{
                                        color: "rgba(57, 10, 77, 1)",
                                        width: "10%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    درس
                                </Typography>
                                <Select
                                    value={lesson}
                                    onChange={(e) => {
                                        setLesson(Number(e.target.value));
                                    }}
                                    size="small"
                                    sx={{
                                        mr: 2,
                                        width: "60%",
                                        textAlign: "center",
                                        borderRadius: "20px",
                                    }}
                                >
                                    <MenuItem value={0}>انتخاب کنید</MenuItem>
                                    {dataLesson?.map((lessonsSingle) => {
                                        return (
                                            <MenuItem value={lessonsSingle.id}>
                                                {lessonsSingle.title}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sx={{ display: "flex", justifyContent: "center" }}
                            >
                                <Box>
                                    {/* <Button
                                        sx={{
                                            backgroundColor: "rgba(245, 232, 250, 1)",
                                            border: "2px solid rgba(170, 123, 189, 1)",
                                            borderRadius: "100px",
                                            py: 0,
                                            px: 2,
                                        }}
                                    >
                                        <img src={assets.svg.uploadFile} alt="uploadfile" style={{ paddingLeft: "5px" }} />
                                        {mainImage == "" ? "افزودن تصویر" : "تغییر تصویر"}
                                    </Button> */}
                                    <Button
                                        sx={{
                                            backgroundColor: "rgba(245, 232, 250, 1)",
                                            border: "2px solid rgba(170, 123, 189, 1)",
                                            borderRadius: "100px",
                                            py: 0,
                                            px: 0,
                                            display: mainImage == "" ? "none" : "unset",
                                        }}
                                    >
                                        حذف
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ width: "100%" }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Box
                                    sx={{
                                        backgroundColor: "#F6F6F6",
                                        mt: 4,
                                        borderRadius: "20px",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 700,
                                            color: "#390A4D",
                                            paddingX: 4,
                                            paddingY: 1.5,
                                        }}
                                    >
                                        گزینه 1
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                        <QuillEditor value={choices1} onChange={setChoices1} />
                                    </Box>

                                    <Box>
                                        <Box
                                            sx={{
                                                px: 5,
                                                mt: 1,
                                                display: "flex",
                                                justifyContent: "space-between",
                                                marginBottom: "1rem",
                                                marginTop: "1rem",
                                            }}
                                        >
                                            <Box>
                                                <Button
                                                    sx={{
                                                        backgroundColor: "rgba(245, 232, 250, 1)",
                                                        border: "2px solid rgba(170, 123, 189, 1)",
                                                        borderRadius: "100px",
                                                        py: 0,
                                                        px: 0,
                                                        display: choice1Image == "" ? "none" : "unset",
                                                    }}
                                                >
                                                    حذف
                                                </Button>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Typography>
                                                    {choice1Correction ? "درست" : "غلط"}
                                                </Typography>
                                                <MaterialUISwitch
                                                    checked={choice1Correction}
                                                    onChange={(e) => {
                                                        if (choice1Correction == false) {
                                                            setChoice2Correction(false);
                                                            setChoice3Correction(false);
                                                            setChoice4Correction(false);
                                                            setChoice1Correction(true);
                                                        }
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box
                                    sx={{
                                        backgroundColor: "#F6F6F6",

                                        borderRadius: "20px",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 700,
                                            color: "#390A4D",
                                            paddingX: 4,
                                            paddingY: 1.5,
                                        }}
                                    >
                                        گزینه 2
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <QuillEditor value={choices2} onChange={setChoices2} />

                                    </Box>
                                    <Box>
                                        <Box
                                            sx={{
                                                px: 5,
                                                mt: 1,
                                                display: "flex",
                                                justifyContent: "space-between",
                                                marginBottom: "1rem",
                                                marginTop: "1rem",
                                            }}
                                        >
                                            <Box>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Typography>
                                                    {choice2Correction ? "درست" : "غلط"}
                                                </Typography>
                                                <MaterialUISwitch
                                                    checked={choice2Correction}
                                                    onChange={(e) => {
                                                        if (choice2Correction == false) {
                                                            setChoice2Correction(true);
                                                            setChoice3Correction(false);
                                                            setChoice4Correction(false);
                                                            setChoice1Correction(false);
                                                        }
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box
                                    sx={{
                                        backgroundColor: "#F6F6F6",
                                        borderRadius: "20px",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 700,
                                            color: "#390A4D",
                                            paddingX: 4,
                                            paddingY: 1.5,
                                        }}
                                    >
                                        گزینه 3
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <QuillEditor value={choices3} onChange={setChoices3} />

                                    </Box>
                                    <Box>
                                        <Box
                                            sx={{
                                                px: 5,
                                                mt: 1,
                                                display: "flex",
                                                justifyContent: "space-between",
                                                marginBottom: "1rem",
                                                marginTop: "1rem",
                                            }}
                                        >
                                            <Box>
                                                <Button
                                                    sx={{
                                                        backgroundColor: "rgba(245, 232, 250, 1)",
                                                        border: "2px solid rgba(170, 123, 189, 1)",
                                                        borderRadius: "100px",
                                                        py: 0,
                                                        px: 0,
                                                        display: choice3Image == "" ? "none" : "unset",
                                                    }}
                                                >
                                                    حذف
                                                </Button>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Typography>
                                                    {choice3Correction ? "درست" : "غلط"}
                                                </Typography>
                                                <MaterialUISwitch
                                                    checked={choice3Correction}
                                                    onChange={(e) => {
                                                        if (choice3Correction == false) {
                                                            setChoice3Correction(true);
                                                            setChoice2Correction(false);
                                                            setChoice4Correction(false);
                                                            setChoice1Correction(false);
                                                        }
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box
                                    sx={{
                                        backgroundColor: "#F6F6F6",
                                        borderRadius: "20px",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 700,
                                            color: "#390A4D",
                                            paddingX: 4,
                                            paddingY: 1.5,
                                        }}
                                    >
                                        گزینه 4
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <QuillEditor value={choices4} onChange={setChoices4} />

                                    </Box>
                                    <Box>
                                        <Box
                                            sx={{
                                                px: 5,
                                                mt: 1,
                                                display: "flex",
                                                justifyContent: "space-between",
                                                marginBottom: "1rem",
                                                marginTop: "1rem",
                                            }}
                                        >
                                            <Box>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <Typography>
                                                    {choice4Correction ? "درست" : "غلط"}
                                                </Typography>
                                                <MaterialUISwitch
                                                    checked={choice4Correction}
                                                    onChange={(e) => {
                                                        if (choice4Correction == false) {
                                                            setChoice4Correction(true);
                                                            setChoice2Correction(false);
                                                            setChoice3Correction(false);
                                                            setChoice1Correction(false);
                                                        }
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: "#F6F6F6",
                            mt: 2,
                            borderRadius: "20px",
                            display: "flex",
                            flexDirection: "column",
                            pb: 2,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: 700,
                                color: "#390A4D",
                                paddingX: 10,
                                paddingY: 1.5,
                            }}
                        >
                            پاسخ تشریحی
                        </Typography>
                        <QuillEditor value={questionAnswer} onChange={setQuestionAnswer} />
                    </Box>
                    <Box>
                        <Button
                            onClick={handleSubmit}
                        >
                             {buttonText}
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Success Modal */}
            <Modal open={success} onClose={() => setSuccess(false)}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 250,
                        bgcolor: "background.paper",
                        p: 4,
                        boxShadow: 24,
                        borderRadius: "20px",


                    }}
                >
                    <Box sx={{
                        flexDirection: "column",
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <img src={assets.svg.tikeSvg} alt="tikeSvg" />

                        </Box>
                        <Box>
                            <Typography sx={{textAlign:"center" , pt:"1rem" ,fontWeight:"700" , color:"gray.main" }}>پرسش شما با موفقیت ثبت شد!</Typography>

                        </Box>
                    </Box>
                    <Box sx={{display:"flex" , justifyContent:"center" , position:"relative" , top:"20px"}}>
                        <Button onClick={() => { setSuccess(false); handleClose(); }}>
                            بستن
                        </Button>

                    </Box>


                </Box>
            </Modal>
        </>

    )

}
export default QuestionForm;