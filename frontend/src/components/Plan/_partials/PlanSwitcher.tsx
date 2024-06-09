function PlanSwitcher({currentPlan, changeHandler}:PlanSwitcherPropsType) {
    
    return <>
        <div className="planTypeBox w-fit mx-auto">
            <div className="inline-flex justify-center flex-col gap-2 md:flex-row md:gap-1 rounded-md shadow-sm" role="group">
                <ButtonPlanType is_active={currentPlan == 'completePlan'} onClickHandler={()=> changeHandler('completePlan')}>Plan Complet</ButtonPlanType>
                <ButtonPlanType is_active={currentPlan == 'planByGroup'} onClickHandler={()=>changeHandler('planByGroup')}>Plan par groupe</ButtonPlanType>
                <ButtonPlanType is_active={currentPlan == 'planByClass'} onClickHandler={()=>changeHandler('planByClass')}>Plan par classe</ButtonPlanType>
            </div>
        </div>
    </>
}


function ButtonPlanType({children, is_active, onClickHandler}:ButtonPlanPropsType) {
    return <>
        <button type="button" className={`planTypeBtn ${is_active ? 'active' : ""}`} onClick={onClickHandler}>
            {children}
        </button>
    </>
}


type PlanSwitcherPropsType = {
    currentPlan : string,
    changeHandler : (e:string) => void
}

type ButtonPlanPropsType = {
    children: string;
    is_active?: boolean;
    onClickHandler : (e:React.MouseEvent<HTMLButtonElement>) => void
};


export default PlanSwitcher;