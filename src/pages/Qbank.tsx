import {
  Box,
  Container,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import QbankFilters from "../components/qbank/QbankFilters";
import QbankNav from "../components/qbank/QbankNav";
import QuestionPack from "../cards/QuestionPack";
import assets from "../assets";
import { useGetBankPack } from "../hooks/api/useGetBankPack";
import { useNavigate } from "react-router-dom";
import QuestionPackPlaceholder from "../cards/placeHolder/QuestionPackPlaceholder";
import { useGetBankQuestion } from "../hooks/api/useGetBankQuestion";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "../cards/Accordingcard";
import { e2pNumber } from "../shared/NumberUtils";
import AccordionPlaceholder from "../cards/placeHolder/AccordionPlaceholde";

// add accord for test

interface Props {
  id: string;
  answer: string;
  author: string;
  chapter: string;
  correct_option: number;
  created_at: string;
  description: string;
  difficulty: string;
  grade: string;
  lesson: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  price: string;
  published_year: string;
  status: string;
  subject: string;
  updated_at: string;
  visibility: string;
}

const SigleQuestion: React.FC<Props> = (props) => {
  const options = [
    { text: props.option1 },
    { text: props.option2 },
    { text: props.option3 },
    { text: props.option4 },
  ];

  return (
    <>
      <Accordion
        sx={{ mb: 2 }}
        chapter={props.chapter}
        grade={props.grade}
        lesson={props.lesson}
        author={props.author}
        difficulty={props.difficulty}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{ width: "100%", marginRight: "7px" }}
              className="max-img-inner"
              dangerouslySetInnerHTML={{ __html: props.description }}
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container rowGap={2} spacing={3}>
            {options.map((singleAnswer, index) => (
              <Grid item xs={6} key={index}>
                <Box
                  sx={{
                    color:
                      index + 1 === props.correct_option
                        ? "gray.light"
                        : "black",
                    backgroundColor:
                      index + 1 === props.correct_option
                        ? "primary.main"
                        : "gray.light",
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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      py: 0,
                      px: "20px",
                    }}
                  >
                    <div
                      style={{ width: "100%", marginRight: "7px" }}
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
                <Typography
                  component={"span"}
                  sx={{ fontSize: "14px", fontWeight: 600, mt: 2 }}
                >
                  پاسخ تشریحی:
                </Typography>
                <div
                  style={{ width: "100%" }}
                  className="max-img-inner"
                  dangerouslySetInnerHTML={{ __html: props.answer }}
                />
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

 export const ShowQuestionPack: React.FC = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetBankPack();
  if (isError) {
    return (
      <Box mt={"2rem"}>
        <Box sx={{ px: "1rem", borderRadius: "15px", py: "1rem", mx: "auto" }}>
          <Grid container width={"100%"} gap={2}>
            {[...Array(4)].map((_, index) => (
              <Grid key={index} item lg={5.6} md={12} sm={12} xs={12}>
                <QuestionPackPlaceholder />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  }

  if (isError) {
    return <Typography color="error">Failed.</Typography>;
  }

  return (
    <Box mt={"2rem"}>
      {/* <AccordionPlaceholder/> */}
      <Box sx={{ px: "1rem", borderRadius: "15px", py: "1rem", mx: "auto" }}>
        <Grid container width={"100%"} gap={2}>
          {data?.map((info, index) => (
            <Grid
              key={index}
              item
              lg={5.6}
              md={12}
              sm={12}
              xs={12}
              onClick={() => navigate(`/qbank/pack/${info.id}`)}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.005)",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <QuestionPack
                title={info.title}
                header_image={info.header_image || assets.img.packDefoltImg}
                author={info.author}
                subject={info.subject}
                lesson={info.lesson}
                chapter={info.chapter}
                grade={info.grade}
                status={info.status}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

interface Filters {
  search: string;
  grade: number | null;
  difficulty: number | null;
  author: string;
}

export default function Qbank() {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    grade: null,
    difficulty: null,
    author: null,
  });
  const {
    data: questionData,
    isLoading: questionIsLoading,
    isError: questionIsError,
  } = useGetBankQuestion(filters);

  return (
    <Container maxWidth={false}>
      <QbankNav />
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={12} md={8.5}>
          <Grid container spacing={2} sx={{ pt: 3 }}>
            <Grid item xs={12} md={3}>
              <QbankFilters setFilters={setFilters} filters={filters} />
            </Grid>
            <Grid item xs={12} md={9}>
              {/* <ShowQuestionPack/> */}
              {questionIsLoading ? (
                Array.from({ length: 8 }).map((_, index) => (
                  <AccordionPlaceholder key={index} />
                ))
              ) : questionData?.results?.length > 0 ? (
                questionData.results.map((question) => (
                  <SigleQuestion
                    key={question.id}
                    id={question.id}
                    answer={question.answer}
                    author={
                      question.author.first_name + question.author.last_name ||
                      "بانک سوالات تستامینوفن"
                    }
                    chapter={question.chapter.title}
                    correct_option={question.correct_option}
                    created_at={question.created_at}
                    description={question.description}
                    difficulty={question.difficulty}
                    grade={question.grade.title}
                    lesson={question.lesson.title}
                    option1={question.option1}
                    option2={question.option2}
                    option3={question.option3}
                    option4={question.option4}
                    price={question.price}
                    published_year={question.published_year}
                    status={question.status}
                    subject={question.subject.title}
                    updated_at={question.updated_at}
                    visibility={question.visibility}
                  />
                ))
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    mt: "10%",
                  }}
                >
                  <Box sx={{textAlign:"center"}}>
                    <img
                      src={assets.img.notfoundImg}
                      alt="notfound"
                      width={"40%"}
                    />
                    <Typography sx={{fontWeight:"500" , fontSize:"20px" , color:"primary.main"}}>متاسفانه سوالی یافت نشد !!</Typography>
                  </Box>
                </Box>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
