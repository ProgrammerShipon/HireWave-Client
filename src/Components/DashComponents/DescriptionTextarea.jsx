
const DescriptionTextarea = ({ description, setDescription }) => {

    const handleTextareaChange = (event) => {
        const textareaValue = event.target.value;
        const lines = textareaValue.split('\n');
        setDescription(lines)
    };

    return (
        <textarea
            rows={5}
            className='w-full border border-gray/40 p-1 rounded-md focus:outline-none focus:border-green'
            placeholder="Write your about..."
            defaultValue={description ? description.join('\n') : ''}
            onChange={handleTextareaChange}
        ></textarea>
    );
};

export default DescriptionTextarea;