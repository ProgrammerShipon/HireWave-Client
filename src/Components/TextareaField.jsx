import { useEffect, useState } from "react";

const TextareaField = ({ label, setUpdate }) => {
    const [textareaValue, setTextareaValue] = useState('• ');
    const [listItems, setListItems] = useState([]);

    const handleTextareaValueChange = (e) => {
        setTextareaValue(e.target.value);
    };

    const handleTextareaValueKeyPress = (e) => {
        if (e.key === 'Enter' && e.shiftKey) {
            setTextareaValue(textareaValue + '\n');
        } else if (e.key === 'Enter') {
            setTextareaValue(textareaValue + '\n• ');
            e.preventDefault();
        }
    };

    useEffect(() => {
        const items = textareaValue.split('\n');
        const listItemsWithoutBullet = items.filter((item) => item.trim() !== '').map((item) => item.replace('• ', ''));

        setListItems(listItemsWithoutBullet);
        setUpdate(listItems)
    }, [textareaValue]);

    return (
        <div>
            <label htmlFor="textareaValue" className="text-dark font-medium">{label}</label>
            <textarea
                id="textareaValue"
                rows={4}
                className="w-full border border-gray/40 focus:border-green p-2 focus:shadow-lg focus:shadow-gray/20 duration-300 rounded-md outline-none"
                value={textareaValue}
                onChange={handleTextareaValueChange}
                onKeyPress={handleTextareaValueKeyPress} // Handle Enter key press
                placeholder={"Write " + "Your " + label}
            />
        </div>
    );
};

export default TextareaField;