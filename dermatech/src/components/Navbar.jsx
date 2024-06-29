import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="p-4 flex-row mx-auto flex items-center justify-between shadow w-screen">
                <img className='h-12' src="\images\dermatech1.png" />
                <div className="flex flex-row gap-4">
                    <Link to="/link1" className="text-ligth-gray hover:text-pink active:text-pink">Home</Link>
                    <Link to="/link2" className="text-ligth-gray hover:text-pink active:text-pink">Tools</Link>
                    <Link to="/link3" className="text-ligth-gray hover:text-pink active:text-pink">Learn</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 rounded border-none bg-pink text-white"
                    />
                    <button className="text-pink">
                        <i className="ti ti-user leading-none text-center text-lg transition-all duration-[0.2s] hover:text-pink  active:text-pink active:animate-ping text-ligth-gray"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
