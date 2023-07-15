import './styles.css';
import { useRef,useState } from 'react';




export default function Accordion() {
    const [active, setActive] = useState(true);
    const id1 = useRef(null);
    function HandleClick() {
        // console.log(className.current.className);
        // id1.current.classList = {max-height: 0};
        setActive(!active);
        // active ? id1.current.classList.remove('max-h-0') : id1.current.classList.add('max-h-0');
        // console.log(id1.current.nextElementSibling.classList[0]);
        active ? id1.current.nextElementSibling.classList.remove('max-h-0') : id1.current.nextElementSibling.classList.add('max-h-0');
    }
    return <>
        <h2>Accordion with symbols</h2>
        <p>In this example we have added a "plus" sign to each button. When the user clicks on the button, the "plus" sign is replaced with a "minus" sign.</p>
        <button ref={id1} onClick={HandleClick} className="accordion">Section 1</button>
        <div className="transition-all duration-700 max-h-0">
            <p  >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <button className="accordion">Section 2</button>
        <div className="panel">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <button className="accordion">Section 3</button>
        <div className="panel">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </>;
}