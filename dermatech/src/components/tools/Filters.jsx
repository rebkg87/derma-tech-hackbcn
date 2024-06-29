import { useState } from 'react';

const Filters = ({ onFilterChange }) => {
    const [skinType, setSkinType] = useState('');
    const [hasSpots, setHasSpots] = useState(false);
    const [hasAcne, setHasAcne] = useState(false);

    const handleFilterChange = () => {
        // Aquí puedes implementar lógica adicional si es necesario
        onFilterChange({
            skinType,
            hasSpots,
            hasAcne
        });
    };

    return (
        <aside>
            <div className="bg-pink-light p-4 shadow rounded-md flex flex-col items-start w-[15em] h-screen md:h-screen gap-1">
                <h2 className="text-lg text-pink font-semibold mb-2">Filtros</h2>

                {/* Selector para tipos de piel */}
                <div className="mb-4">
                    <label htmlFor="skinType" className="block text-sm font-medium text-gray-700 mb-1">Tipo de piel</label>
                    <select id="skinType" name="skinType" value={skinType} onChange={(e) => setSkinType(e.target.value)} className=" w-48 h-6 pl-2 border-gray-300 text-xs rounded-md shadow-sm focus:border-pink focus:ring focus:ring-pink focus:ring-opacity-50">
                        <option className='text-xs text-dark-gray font-semibold focus:bg-pink-light' value="">Selecciona tipo de piel</option>
                        <option className='text-xs text-dark-gray font-semibold focus:bg-pink-light'  value="seca">Piel seca</option>
                        <option  className='text-xs text-dark-gray font-semibold focus:bg-pink-light' value="mixta">Piel mixta</option>
                        <option  className='text-xs text-dark-gray font-semibold focus:bg-pink-light' value="grasa">Piel grasa</option>
                        <option  className='text-xs text-dark-gray font-semibold focus:bg-pink-light' value="sensible">Piel sensible</option>
                    </select>
                </div>

                {/* Checkbox para manchas */}
                <div className="mb-4">
                    <input type="checkbox" id="hasSpots" name="hasSpots" checked={hasSpots} onChange={(e) => setHasSpots(e.target.checked)} className="mr-2 rounded-sm" />
                    <label htmlFor="hasSpots" className="text-sm font-medium text-gray-700">¿Tiene manchas?</label>
                </div>

                {/* Checkbox para acné */}
                <div className="mb-4">
                    <input type="checkbox" id="hasAcne" name="hasAcne" checked={hasAcne} onChange={(e) => setHasAcne(e.target.checked)} className="mr-2 rounded-sm" />
                    <label htmlFor="hasAcne" className="text-sm font-medium text-gray-700">¿Tiene acné?</label>
                </div>

                {/* Botón de aplicar filtros */}
                <button onClick={handleFilterChange} className="bg-pink hover:bg-white hover:text-pink text-pink-light px-4 py-2 rounded-md focus:outline-none focus:bg-pink">
                    Crear Rutina
                </button>
            </div>
        </aside>
    );
};

export default Filters;
