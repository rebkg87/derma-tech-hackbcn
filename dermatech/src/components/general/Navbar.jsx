import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
    return (
        <nav>
            <div className="flex flex-row items-center justify-between w-screen p-4 pl-8 pr-8 mx-auto shadow">
                <img className='h-12' src="\images\dermatech1.png" />
                <div className="flex flex-row gap-8">
                    <Link to="/" className="text-ligth-gray hover:text-pink active:text-pink">Home</Link>
                    <Link to="/tools" className="text-ligth-gray hover:text-pink active:text-pink">Tools</Link>
                    <Link to="/learn" className="text-ligth-gray hover:text-pink active:text-pink">Learn</Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 pl-4 text-white border-none rounded-full outline-none bg-pink placeholder-pink-light active:border-0"
                    />
                    <Link to="/login" >
                        <Button buttonStyle="rounded-full bg-pink-light text-pink" buttonText="LOGIN" className="w-32 h-10" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
