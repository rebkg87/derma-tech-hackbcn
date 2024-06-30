import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
    return (
        <nav>
            <div className="p-4 pl-8 pr-8 flex-row mx-auto flex items-center justify-between shadow w-screen">
                <img className='h-12' src="\images\dermatech1.png" />
                <div className="flex flex-row gap-8">
                    <Link to="/" className="text-ligth-gray hover:text-pink active:text-pink">Home</Link>
                    <Link to="/tools" className="text-ligth-gray hover:text-pink active:text-pink">Tools</Link>
                    <Link to="/learn" className="text-ligth-gray hover:text-pink active:text-pink">Learn</Link>
                </div>
                <div className="flex justify-center items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 pl-4 rounded-full border-none bg-pink text-white placeholder-pink-light active:border-0 outline-none"
                    />
                    <Link to="/login" >
                        <Button buttonStyle="rounded-full bg-pink-light h-[3em] w-[6em] text-pink mt-[-1px]" buttonText="LOGIN" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
