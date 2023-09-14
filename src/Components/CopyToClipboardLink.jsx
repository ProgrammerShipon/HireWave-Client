import { useRef } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

const CopyToClipboardLink = ({ url }) => {
    const textAreaRef = useRef(null);

    const handleCopyClick = () => {
        textAreaRef.current.select();
        document.execCommand('copy');
        toast('Copy to Clipboard!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "dark",
        });
    };

    return (
        <>
            <textarea
                ref={textAreaRef}
                value={url}
                className="absolute left-[-999px]"
                readOnly
            />
            <Tooltip id={url} />
            <button onClick={handleCopyClick}
                data-tooltip-id={url} data-tooltip-content="Click to Copy Link!"
            >
                <AiOutlineShareAlt size="24px" className="text-green" />
            </button>
        </>
    );
};

export default CopyToClipboardLink;