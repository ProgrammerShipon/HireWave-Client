
const DescriptionTextarea = ({ description, setDescription }) => {

    const handleTextareaChange = (event) => {
        const textareaValue = event.target.value;
        const lines = textareaValue.split('\n');
        setDescription(lines)
    };

    return (
        <textarea
            rows={8}
            className='w-full border border-gray/40 p-2 rounded-md focus:outline-none focus:border-green'
            placeholder="Write about yourself..."
            defaultValue={description ? description.join('\n') : ''}
            onChange={handleTextareaChange}
        ></textarea>
    );
};

export default DescriptionTextarea;