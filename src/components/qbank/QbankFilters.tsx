import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import assets from "../../assets";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import { useGetBankGrades } from "../../hooks/api/useGetBankGrades";
import { BarLoader } from "react-spinners";
import { Numbers } from "@mui/icons-material";

interface Filters {
  grade: number | null; // Grade filter
  search?: string; // Only include search as a filter
  difficulty?: number | null; // Difficulty filter
  author?: string;
}

const difficulties = {
  1: "آسان",
  2: "متوسط",
  3: "دشوار",
};

interface QbankFiltersProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const QbankFilters: React.FC<QbankFiltersProps> = ({ filters, setFilters }) => {
  const [search, setSearch] = useState<string>("");
  const [selectAuthor, setSelectAuthor] = useState<string>("");
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | null>(
    null
  );
  const {
    data: dataGrade,
    isLoading: gradesLoading,
    isError: gradesError,
  } = useGetBankGrades();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
          p: 1.2,
          display: "flex",
          borderRadius: "20px",
          boxShadow: "0px 4px 0px 0px rgba(217, 217, 217, 1)",
          justifyContent: "center",
        }}
      >
        <TextField
          variant="standard"
          style={{ textAlign: "right", direction: "rtl" }}
          sx={{
            backgroundColor: "rgba(246, 246, 246, 1)",
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
            border: 0,
            pr: 2,
            py: 0.7,
            height: "100%",
            width: "100%",
          }}
          placeholder="جستجو کنید"
          value={search}
          size="small"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              setFilters({ ...filters, search });
            }
          }}
          InputProps={{
            style: {
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
              border: 0,
            },
            disableUnderline: true,
          }}
        />
        <Button
          sx={{
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
            backgroundColor: "rgba(246, 246, 246, 1)",
            mr: 1,
          }}
          onClick={() => {
            setFilters({ ...filters, search });
          }}
        >
          <img src={assets.svg.filterSearchSvg} alt="filterSearchSvg" />
        </Button>
      </Box>

      {/* filter */}

      <Box sx={{ mt: "1rem" }}>
        <Accordion sx={{ boxShadow: "none", borderRadius: "5px" }}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "#744884", scale: "0.8" }} />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography color={"primary.main"}>پایه</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Filter Buttons */}
            <Box sx={{ width: "100%" }}>
              {gradesLoading ? (
                <BarLoader
                  color="purple"
                  height={5}
                  width={"100%"}
                  loading={true}
                />
              ) : gradesError ? (
                <BarLoader
                  color="purple"
                  height={5}
                  width={"100%"}
                  loading={true}
                />
              ) : (
                dataGrade?.map((grade: { id: number; title: string }) => (
                  <Button
                    key={grade.id}
                    onClick={() => {
                      setSelectedGrade(grade.id);
                      setFilters((prev) => ({ ...prev, grade: grade.id }));
                    }}
                    sx={{
                      fontSize: "12px",
                      backgroundColor:
                        selectedGrade === grade.id ? "primary.main" : "#f0f0f0",
                      color:
                        selectedGrade === grade.id ? "gray.light" : "gray.dark",
                      mx: 1,
                      mb: 1,
                      borderRadius: "20px",
                      "&:hover": {
                        backgroundColor:
                          selectedGrade === grade.id
                            ? "primary.main"
                            : "#e0e0e0",
                      },
                    }}
                  >
                    {grade.title}
                  </Button>
                ))
              )}
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: "none", borderRadius: "5px" }}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "#744884", scale: "0.8" }} />
            }
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography color={"primary.main"}>طراح</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box display={"flex"} marginTop={"-10px"}>
              <TextField
                variant="standard"
                style={{ textAlign: "right", direction: "rtl" }}
                sx={{
                  backgroundColor: "rgba(246, 246, 246, 1)",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  border: 0,
                  pr: 2,
                  py: 0.7,
                  height: "100%",
                  width: "100%",
                }}
                placeholder="نام طراح"
                value={selectAuthor}
                size="small"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSelectAuthor(e.target.value);
                }}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === "Enter") {
                    setFilters((prev) => ({ ...prev, author: selectAuthor }));
                  }
                }}
                InputProps={{
                  style: {
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    border: 0,
                  },
                  disableUnderline: true,
                }}
              />
              <Button
                sx={{
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                  backgroundColor: "rgba(246, 246, 246, 1)",
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
                onClick={() => {
                  setFilters((prev) => ({ ...prev, author: selectAuthor }));
                }}
              >
                <img src={assets.svg.filterSearchSvg} alt="filterSearchSvg" />
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ boxShadow: "none", borderRadius: "5px" }}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "#744884", scale: "0.8" }} />
            }
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography color={"primary.main"}>گروه</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <BarLoader
              color="purple"
              height={5}
              width={"100%"}
              loading={true}
            />
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            borderRadius: "5px",
            boxShadow: "0px 4px 0px 0px rgba(217, 217, 217, 1)",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon sx={{ color: "#744884", scale: "0.8" }} />
            }
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography color={"primary.main"}>سختی</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box gap={2} mt={2}>
              {Object.entries(difficulties).map(([id, title]) => (
                <Button
                  key={id}
                  onClick={() => {
                    setSelectedDifficulty(Number(id));
                    setFilters((prev) => ({ ...prev, difficulty: Number(id) }));
                  }}
                  sx={{
                    fontSize: "12px",
                    backgroundColor:
                      selectedDifficulty === Number(id)
                        ? "primary.main"
                        : "#f0f0f0",
                    color:
                      selectedDifficulty === Number(id)
                        ? "gray.light"
                        : "gray.dark",
                    mx: 1,
                    mb: 1,
                    borderRadius: "20px",
                    "&:hover": {
                      backgroundColor:
                        selectedDifficulty === Number(id)
                          ? "primary.main"
                          : "#e0e0e0",
                    },
                  }}
                >
                  {title}
                </Button>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default QbankFilters;
