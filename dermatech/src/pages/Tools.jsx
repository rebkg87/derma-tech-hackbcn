import Filters from '../components/tools/Filters';
import Chatbot from '../components/Chatbot';

const Tools = () => {
    return (
        <div className="flex">
            <div className="w-1/4">
                <Filters />
            </div>
            <div className="w-3/4">
                <Chatbot />
            </div>
        </div>
    );
};

export default Tools;