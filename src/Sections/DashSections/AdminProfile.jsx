import { Tooltip } from 'react-tooltip';

// react icons
import { FaPencilAlt } from 'react-icons/fa';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';

const AdminProfile = ({ currentUser }) => {
    const { name, email, role, image } = currentUser;
    return (
        <div className='py-10 md:py-16 flex items-center justify-center duration-300'>
            <div className="relative bg-white w-72 flex flex-col items-center justify-center py-8 shadow-xl rounded-md border border-gray/40 hover:border-green duration-300 group">
                <div className="relative h-40 w-40 rounded-full">
                    <img className="w-full h-full rounded-full object-cover object-center" src={image} alt={name} />

                    <Tooltip id="admin" />
                    <div
                        data-tooltip-id="admin" data-tooltip-content="Admin"
                        className='absolute bottom-2 right-2 h-10 w-10 flex items-center justify-center bg-white text-purple rounded-full shadow-xl shadow-gray/40'>
                        <MdOutlineAdminPanelSettings size='27' />
                    </div>
                </div>

                <div className="text-center mt-6">
                    <p className="text-lightGray underline mb-1 italic">{role}</p>
                    <h2 className="text-4xl font-medium text-dark drop-shadow-lg">{name}</h2>
                    <p className="text-purple tracking-widest">{email}</p>
                </div>

                <Tooltip id="edit" />
                <button
                    data-tooltip-id="edit" data-tooltip-content="Edit Profile!"
                    className='absolute top-2 right-2 h-8 w-8 flex items-center justify-center bg-purple/20 text-purple rounded-full shadow-xl md:opacity-0 group-hover:opacity-100 duration-300'><FaPencilAlt /></button>
            </div>
        </div>
    );
};

export default AdminProfile;