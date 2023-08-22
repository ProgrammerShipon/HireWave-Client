import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

const SkillsField = ({ skills, setSkills }) => {
    const handleChange = (newSkill) => {
        setSkills(newSkill);
    };
    return (
        <div className='md:col-span-2'>
            <label className='text-dark font-medium' htmlFor="skills">Skills:</label>
            <TagsInput
                id="skills"
                value={skills}
                onChange={handleChange}
                inputProps={{ placeholder: 'Add Skills' }}
            />
        </div>
    );
};

export default SkillsField;