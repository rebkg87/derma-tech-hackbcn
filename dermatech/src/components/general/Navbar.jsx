import { Link } from 'react-router-dom';

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
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 pl-4 rounded-full border-none bg-pink text-white placeholder-pink-light active:border-0 outline-none"
                    />
                </div>
                <div className="group fixed bottom-0 mb-8 mt-2 md:mb-8 md:mt-8 flex items-center justify-center align-middle w-14 h-14 rounded-[10px] transition-all duration-[0.5s] hover:bg-pink active:bg-pink cursor-pointer">
                    <i className="ti ti-user leading-none text-center text-lg transition-all duration-[0.2s] hover:text-pink  active:text-pink active:animate-ping text-ligth-gray"></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
