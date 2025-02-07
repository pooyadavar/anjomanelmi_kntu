import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../style/QuillEditorStyles.css'
import { Button } from '@mui/material';
import QuillResizeImage from 'quill-resize-image';

interface QuillEditorProps {
    value: string;
    onChange: (value: string) => void;
}

// @ts-ignore
// Quill.register("modules/resize", QuillResizeImage);

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
    const handleRemoveImages = () => {
        const updatedContent = value.replace(/<img[^>]*>/g, '');
        onChange(updatedContent);
    };
    const convertToPersianNumbers = (text: string) => {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return text.replace(/\d/g, (digit) => persianDigits[parseInt(digit, 10)]);
    };

    const handleChange = (content: string) => {

        const convertedContent = convertToPersianNumbers(content);
        if (content !== convertedContent) {
            onChange(convertedContent);
        } else {
            onChange(content);
        }
    };

    return (
        <div >
            <ReactQuill
                value={value}
                onChange={handleChange}
                theme="snow"
                style={{ width: "100%", whiteSpace: "pre-wrap", wordWrap: "break-word" }}
                modules={{
                    toolbar: [
                        [{ 'header': [1, 2, 3, 4, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'align': [] }],
                        ['blockquote', 'code-block'],
                        ['link', 'image'],
                        ['clean'],
                         [{ 'removeImage': 'removeImage' }] 
                    ],
                    clipboard: {
                        matchVisual: true,
                    },
                    // resizeImage: {
                    //     modules: ['Resize', 'DisplaySize', 'Toolbar']
                    // }
                }}
            />
            <Button sx={{border:"2px solid white" , fontSize:"12px" , mt:"5px" , mr:"5px"}} onClick={handleRemoveImages}>حذف تصاویر</Button>
        </div>
    );
};

export default QuillEditor;