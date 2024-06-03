function ShowRangeSelect({onSelect}:ShowRangeSelectProps) {
    return <> 
            <div className="flex">
                <button className="flex-shrink-0 z-10 py-3 px-4 text-sm font-medium text-center bg-slate-100 border border-slate-300  rounded-s-lg outline-none" type="button">
                    Afficher
                </button>
                <select
                onChange={(e) => onSelect(parseInt(e.target.value))}
                id="range" 
                className="bg-slate-50 border border-l-0 border-slate-300 text-slate-900 text-sm rounded-e-lg border-s-slate-100 dark:border-s-slate-700 border-s-2 
                focus:ring-blue-500 focus:border-blue-500 focus:font-medium block w-full p-3 outline-none">
                    <option value="10">10 lignes</option>
                    <option value="25">25 lignes</option>
                    <option value="50">50 lignes</option>
                    <option value="100">100 lignes</option>
                </select>
            </div>
    </>
}

type ShowRangeSelectProps = {
    onSelect: (search: number) => void;
};


export default ShowRangeSelect;