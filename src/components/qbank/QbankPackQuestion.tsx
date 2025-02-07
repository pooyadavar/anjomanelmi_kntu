import { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import QbankFilters from "./QbankFilters";

import { e2pNumber } from "../../shared/NumberUtils";
import { useParams } from "react-router-dom";
import { useGetBankPackIdContent } from "../../hooks/api/useGetBankPackIdContent";
import AccordionPlaceholder from "../../cards/placeHolder/AccordionPlaceholde";
import { useGetBankPack } from "../../hooks/api/useGetBankPack";
import QuestionPackLazy from "../../cards/QuestionPackLazy";
import assets from "../../assets";
import QuestionPackLazyPlaceholder from "../../cards/placeHolder/QuestionPackLazyPlaceholder";
import { Accordion, AccordionSummary, AccordionDetails } from "../../cards/Accordingcard";




// this component is useless yet 


interface Props {
    id: string,
    answer: string,
    author: string,
    chapter: string,
    correct_option: number,
    created_at: string,
    description: string,
    difficulty: string,
    grade: string,
    lesson: string,
    option1: string,
    option2: string,
    option3: string,
    option4: string,
    price: string,
    published_year: string,
    status: string,
    subject: string,
    updated_at: string,
    visibility: string,


}



const SigleQuestion: React.FC<Props> = (props) => {

    const options = [
        { text: props.option1 },
        { text: props.option2 },
        { text: props.option3 },
        { text: props.option4 }
    ];

    return (
        <>
            <Accordion sx={{ mb: 2 }} chapter={props.chapter} grade={props.grade} lesson={props.lesson} author={props.author} difficulty={props.difficulty}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Typography>{props.description}</Typography>
                    </Box>
                    {/* <Box sx={{ mr: "auto", ml: 2 }}>
                        <img src={props.image} width={200} alt="Question" />
                    </Box> */}
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container rowGap={2} spacing={3}>
                        {options.map((singleAnswer, index) => (
                            <Grid item xs={6} key={index}>
                                <Box
                                    sx={{
                                        backgroundColor: index + 1 === props.correct_option ? "primary.main" : "gray.light",
                                        color: index + 1 === props.correct_option ? "gray.light" : "black",
                                        display: "flex",
                                        width: "fit-content",
                                        px: 1,
                                        justifyContent: "flex-start",
                                        py: 0.6,
                                        borderRadius: "20px",
                                        alignItems: "center",

                                    }}
                                >
                                    <Box
                                        sx={{
                                            backgroundColor: "rgba(255, 255, 255, 1)",
                                            borderRadius: "30px",
                                            aspectRatio: "1/1",
                                            width: "20px",
                                            height: "20px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: "black",
                                        }}
                                    >
                                        {e2pNumber((index + 1).toString())}
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", py: 0 ,mr:"100px"}}>
                                        <div
                                            style={{ width: '100%' }}
                                            className="max-img-inner"
                                            dangerouslySetInnerHTML={{ __html: singleAnswer.text }}
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Box>
                        <Grid container>
                            <Grid item sx={{ pt: "2rem" }}>
                                <Typography component={'span'} sx={{ fontSize: "14px", fontWeight: 600, mt: 2 }}>
                                    پاسخ تشریحی:
                                </Typography>
                                <div
                                    style={{ width: '100%' }}
                                    className="max-img-inner"
                                    dangerouslySetInnerHTML={{ __html: props.description }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </AccordionDetails>
            </Accordion>

        </>
    )
}

const QbankPackQuestion: React.FC = () => {

    const { id } = useParams<{ id: string }>();
    const { isLoading, isError, data } = useGetBankPackIdContent(id);
    const { isLoading: packIsLoading, isError: packIsError, data: packdata } = useGetBankPack();

    interface Filters {
        difficulty: number;
        search: string;
    }

    const [newQuestion, setNewQuestion] = useState<number>(0);
    const [filters, setFilters] = useState<Filters>({ difficulty: 0, search: "" });

    useEffect(() => {
        console.log(
            `https://testaminofen.liara.run/api/bank/?${filters.difficulty > 0 ? "difficulty=" : ""
            }${filters.difficulty}&type=0${filters.search != "" ? "&searchQuery=" : ""
            }${encodeURI(filters.search)}`
        );
        fetch(
            `https://testaminofen.liara.run/api/bank/?${filters.difficulty > 0 ? "difficulty=" : ""
            }${filters.difficulty}&type=0${filters.search != "" ? "&searchQuery=" : ""
            }${encodeURI(filters.search)}`,
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((json) => {
                // setData(json);
                console.log(json);
            })
            .catch((err) => console.warn(err));
    }, [newQuestion, filters]);

    return (
        <>
            <Container maxWidth={false}>
                <Grid container sx={{ display: "flex", justifyContent: "center" }}>
                    <Grid item xs={12} md={8.5}>
                        {/* <ShowQuestionPack /> */}
                        <Grid container spacing={2} sx={{ pt: 3, justifyContent: "center" }}>
                            <Grid item xs={12} sm={10} md={3}>

                                {packdata && packdata[parseInt(id) - 1] ? (
                                    <>
                                        <QuestionPackLazy
                                            header_image={packdata[parseInt(id) - 1].header_image || assets.img.packDefoltImg}
                                            subject={packdata[parseInt(id) - 1].subject}
                                            lesson={packdata[parseInt(id) - 1].lesson}
                                            chapter={packdata[parseInt(id) - 1].chapter}
                                            grade={packdata[parseInt(id) - 1].grade}
                                            status={packdata[parseInt(id) - 1].status}
                                        />
                                    </>
                                ) : (
                                    <QuestionPackLazyPlaceholder />
                                )}
                            </Grid>
                            <Grid item xs={12} md={9}>
                                {data && data.length > 0 ? (
                                    data.map((questionData) => (
                                        <SigleQuestion
                                            key={questionData.id}
                                            id={questionData.id}
                                            answer={questionData.answer}
                                            author={questionData.author}
                                            chapter={questionData.chapter}
                                            correct_option={questionData.correct_option}
                                            created_at={questionData.created_at}
                                            description={questionData.description}
                                            difficulty={questionData.difficulty}
                                            grade={questionData.grade}
                                            lesson={questionData.lesson}
                                            option1={questionData.option1}
                                            option2={questionData.option2}
                                            option3={questionData.option3}
                                            option4={questionData.option4}
                                            price={questionData.price}
                                            published_year={questionData.published_year}
                                            status={questionData.status}
                                            subject={questionData.subject}
                                            updated_at={questionData.updated_at}
                                            visibility={questionData.visibility}
                                        />
                                    ))
                                ) : (
                                    Array.from({ length: 8 }).map((_, index) => (
                                        <AccordionPlaceholder key={index} />
                                    ))
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

        </>
    )
}
export default QbankPackQuestion;