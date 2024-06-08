function PlanByGroupSwitcher({currentGroup, changeHandler, children}:PlanSwitcherPropsType) {
    
    return <>
        <div className="planTypeBox w-fit mx-auto">
            <div className="inline-flex flex-row flex-wrap gap-2 md:gap-1 rounded-md shadow-sm" role="group">
                <ButtonPlanType is_active={currentGroup == 'a'} onClickHandler={()=> changeHandler('a')}>Groupe A</ButtonPlanType>
                <ButtonPlanType is_active={currentGroup == 'b'} onClickHandler={()=>changeHandler('b')}>Groupe B</ButtonPlanType>
                <ButtonPlanType is_active={currentGroup == 'c'} onClickHandler={()=>changeHandler('c')}>Groupe C</ButtonPlanType>
            </div>
            <h4 className="text-center font-medium p-2">{children}</h4>
        </div>
    </>
}


function ButtonPlanType({children, is_active, onClickHandler}:ButtonPlanPropsType) {
    return <>
        <button type="button" className={`planTypeBtnSmall ${is_active ? 'active' : ""}`} onClick={onClickHandler}>
            {children}
        </button>
    </>
}


type PlanSwitcherPropsType = {
    currentGroup : string,
    changeHandler : (e:string) => void,
    children : React.ReactNode,
}

type ButtonPlanPropsType = {
    children: string;
    is_active?: boolean;
    onClickHandler : (e:React.MouseEvent<HTMLButtonElement>) => void
};


export default PlanByGroupSwitcher;