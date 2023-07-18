import './styles.css';
import { useRef,useState } from 'react';




export default function Accordion(prop) {
    return <>
        <ul>
            {
                prop.data.map((item,index) => (
                    <li key={index}>
                        <button>
                            {item.question}
                            <span>-</span>
                        </button>
                        <div>
                            <div></div>
                        </div>
                    </li>
                ))
            }
        </ul>
    </>;
}