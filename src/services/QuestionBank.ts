import { httpClient } from "../shared/http-client";


 export enum BankVisibility {
    Public = 'PUB',
    Private = 'PRIV',
}

export const getBankChapters = async (subject : number | string ) => {
    const response = await httpClient.get('bank/chapters/' ,{params : {
        subject
    }} );
    return response.data;
}
export const getBankGrades = async () => {
    const response = await httpClient.get('bank/grades/');
    return response.data;
}
export const getBankLessons = async (chapter : string | number) => {
    const response = await httpClient.get('bank/lessons/' , {params : {
        chapter
    }});
    return response.data;
}
export const getBankPack = async () => {
    const response = await httpClient.get('bank/pack/');
    return response.data;
}
interface IpostBankPack {
    id: number;
    visibility: BankVisibility;
    header_image: string,
    title: string,
    author: string,
    subject: string,
    lesson: string,
    chapter: string,
    grade: string,
    status: string
}
export const postBankPack = async (bank: IpostBankPack) => {
    const formData = new FormData();
    formData.append("id", bank.id.toString());
    formData.append("visibility", bank.visibility);
    formData.append("header_image", bank.header_image);
    formData.append("title", bank.title);
    formData.append("author", bank.author);
    formData.append("subject", bank.subject);
    formData.append("lesson", bank.lesson);
    formData.append("chapter", bank.chapter);
    formData.append("grade", bank.grade);
    formData.append("status", bank.status);

    const response = await httpClient.post('bank/pack/', formData);

    return response.data;
}

export const getBankPackId = async (id: number) => {
    const response = await httpClient.get(`/bank/pack/${id}/`);
    return response.data;
}
export interface IPutBankPackId {
    visibility: BankVisibility,
    header_image: string,
    title: string,
    author: string,
    grade: string,
    subject: string,
    chapter: string,
    lesson: string,
    status: string
}
export const putBankPackId = async (id: number, bank: IPutBankPackId) => {
    const formData = new FormData();
    formData.append("visibility", bank.visibility);
    formData.append("header_image", bank.header_image);
    formData.append("title", bank.title);
    formData.append("author", bank.author);
    formData.append("grade", bank.grade);
    formData.append("subject", bank.subject);
    formData.append("chapter", bank.chapter);
    formData.append("lesson", bank.lesson);
    formData.append("status", bank.status);

    const response = await httpClient.put(`bank/pack/${id}/`, formData);
    return response.data;
}


export const delBankPackId = async (id: number) => {
    const response = await httpClient.delete(`bank/pack/${id}/`);
    return response.data;
}



export const getBankPackIdContent = async (id: string) => {
    const response = await httpClient.get(`bank/pack/${id}/content/`);
    return response.data;
}


export interface IPostBankPackIdCotent {
    id: number;
}

export const postBankPackIdCotent = async (id: number, bank: IPostBankPackIdCotent) => {
    const response = await httpClient.post(`bank/pack/${id}/content/`, bank);
    return response.data;
}

export interface IPostBankPackIdPin {
    id: number;
}
export const postBankPackIdPin = async (id: number, bank: IPostBankPackIdPin) => {
    const response = await httpClient.post(`bank/pack/${id}/pin/`, bank);
    return response.data;
}


export const delBankPackIdPin = async (id: number) => {
    const response = await httpClient.delete(`bank/pack/${id}/pin/`);
    return response.data;
}

export const getBankSubjects = async (grade: string | number) => {
    const response = await httpClient.get('bank/subjects/', {params: {
        grade
    }});
    return response.data;
}


interface Filters {
    grade: number | null; 
    search: string; 
    difficulty :number | null;
    author : string;
  }
export const getBankQuestion = async (filters : Filters) => {
    const response = await httpClient.get('bank/question/' , {params :{
        search: filters.search,
        grade: filters.grade, 
        difficulty: filters.difficulty,
        author : filters.author
    }});
    return response.data;
}

export interface IPostBankQuestion {
    visibility: BankVisibility,
    description: string,
    published_year: string,
    difficulty: number,
    status: string,
    option1: string,
    option2: string,
    option3: string,
    option4: string,
    correct_option: string,
    answer: string,
    grade: string,
    subject: string,
    chapter: string,
    lesson: string
}

export const postBankQuestion = async (bank: IPostBankQuestion) => {
    const formData = new FormData();

    formData.append('visibility', bank.visibility);
    formData.append('description', bank.description);
    formData.append('published_year', bank.published_year);
    formData.append('difficulty', bank.difficulty.toString());
    formData.append('status', bank.status);
    formData.append('option1', bank.option1);
    formData.append('option2', bank.option2);
    formData.append('option3', bank.option3);
    formData.append('option4', bank.option4);
    formData.append('correct_option', bank.correct_option);
    formData.append('answer', bank.answer);
    formData.append('grade', bank.grade);
    formData.append('subject', bank.subject);
    formData.append('chapter', bank.chapter);
    formData.append('lesson', bank.lesson);
    const response = await httpClient.post('/bank/question/', formData);
    return response.data;
}
export const getBankQuestionId = async (id: number) => {
    const response = await httpClient.get(`/bank/question/${id}/`);
    return response.data;
}

export interface IPutBankQuestionId {
    visibility: BankVisibility,
    description: string,
    published_year: string,
    difficulty: number,
    status: string,
    option1: string,
    option2: string,
    option3: string,
    option4: string,
    correct_option: string,
    answer: string,
    author: string,
    grade: string,
    subject: string,
    chapter: string,
    lesson: string
}
export const putBankQuestionId = async (id : number ,bank: IPutBankQuestionId) => {
    const formData = new FormData();

    formData.append('visibility', bank.visibility);
    formData.append('description', bank.description);
    formData.append('published_year', bank.published_year);
    formData.append('difficulty', bank.difficulty.toString());
    formData.append('status', bank.status);
    formData.append('option1', bank.option1);
    formData.append('option2', bank.option2);
    formData.append('option3', bank.option3);
    formData.append('option4', bank.option4);
    formData.append('correct_option', bank.correct_option);
    formData.append('answer', bank.answer);
    formData.append('author', bank.author);
    formData.append('grade', bank.grade);
    formData.append('subject', bank.subject);
    formData.append('chapter', bank.chapter);
    formData.append('lesson', bank.lesson);

    const response = await httpClient.put(`bank/question/${id}/` , formData);
    return response.data;
}
export const delBankQuestionId = async (id: number) => {
    const response = await httpClient.delete(`bank/question/${id}/`);
    return response.data;
}
