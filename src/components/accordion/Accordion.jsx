import './styles.css';
import { useRef,useState } from 'react';




export default function Accordion(prop) {
    const [acc, setAcc] = useState(null);
    const [clicked, setClicked] = useState(false);
    const contentEl = useRef();
    const HandleClick = () => {
        setClicked(!clicked);
    }
    return <>
        <ul>
            {
                prop.data.map((item,index) => (
                    <li onClick={HandleClick} className='overflow-hidden' key={index}>
                        <button className='bg-gray-500'>
                            {item.question}
                            <span>-</span>
                        </button>
                        <div ref={contentEl} className='transition-all duration-700'>
                            <div className='max-h-4 lg:max-h-0'>{ item.answer}</div>
                        </div>
                    </li>
                ))
            }
        </ul>
    </>;
}