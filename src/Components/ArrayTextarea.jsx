
const ArrayTextarea = ({ setCoverLetter, placeholder }) => {
    const handleTextareaChange = (event) => {
        const textareaValue = event.target.value;
        const lines = textareaValue.split('\n');
        setCoverLetter(lines);
    };

    return (
        <textarea
            rows={5}
            className='w-full border border-gray/40 p-2 rounded-md focus:outline-none focus:border-green'
            placeholder={placeholder}
            onChange={handleTextareaChange}
        ></textarea>
    );
};

export default ArrayTextarea;