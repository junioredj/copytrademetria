import {
    useEffect,
    useRef,
    useState,
} from 'react';

import {UserCircle, User, SignOut, CaretDown} from 'phosphor-react';

import {useAuth} from '../../context/AuthProvider/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { getUserLocalStorage } from '../../context/AuthProvider/util';

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (event) => {
            if(!ref.current || ref.current.contains(event.target)){
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

export const DropdownProfile = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef(null);
    useOnClickOutside(ref, () => setIsOpen(false));

    


    return (
        <div ref={ref} className={
            `dropdown ${isOpen? "open" : ""}`
        }>
            <button onClick={() => setIsOpen(!isOpen)}>
                <UserCircle size={24} color="#fff" weight='fill' />
                <span>{getUserLocalStorage().nome}</span>
                <CaretDown size={14} className={`dropdownButton ${isOpen? "close" : "expand_more"}`} />
            </button>
            <div className="menu-dropdown">
                <ul>
                    <li>
                        <Link to='/perfil'>
                            <User size={16} color='#fff' weight='fill' />
                            <span>Perfil</span>
                        </Link>
                    </li>
                    <li>
                        <button onClick={ () => {
                            auth.logout( () => navigate('/signin') );
                        }}>
                            <SignOut size={16} color='#fff' weight='fill' />
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}