function PlanByClassSwitcher({currentClass, changeHandler, children}:PlanSwitcherPropsType) {
    
    return <>
        <div className="planTypeBox w-fit mx-auto">
            <div className="inline-flex justify-center flex-row flex-wrap gap-2 md:gap-1 rounded-md shadow-sm" role="group">
                <ButtonPlanType is_active={currentClass == '1'} onClickHandler={()=> changeHandler('1')}>Classe 1</ButtonPlanType>
                <ButtonPlanType is_active={currentClass == '2'} onClickHandler={()=>changeHandler('2')}>Classe 2</ButtonPlanType>
                <ButtonPlanType is_active={currentClass == '3'} onClickHandler={()=>changeHandler('3')}>Classe 3</ButtonPlanType>
                <ButtonPlanType is_active={currentClass == '4'} onClickHandler={()=>changeHandler('4')}>Classe 4</ButtonPlanType>
                <ButtonPlanType is_active={currentClass == '5'} onClickHandler={()=>changeHandler('5')}>Classe 5</ButtonPlanType>
                <ButtonPlanType is_active={currentClass == '6'} onClickHandler={()=>changeHandler('6')}>Classe 6</ButtonPlanType>
                <ButtonPlanType is_active={currentClass == '7'} onClickHandler={()=>changeHandler('7')}>Classe 7</ButtonPlanType>
                <ButtonPlanType is_active={currentClass == '8'} onClickHandler={()=>changeHandler('8')}>Classe 8</ButtonPlanType>
                <ButtonPlanType is_active={currentClass == '9'} onClickHandler={()=>changeHandler('9')}>Classe 9</ButtonPlanType>
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
    currentClass : string,
    changeHandler : (e:string) => void,
    children : React.ReactNode,
}

type ButtonPlanPropsType = {
    children: string;
    is_active?: boolean;
    onClickHandler : (e:React.MouseEvent<HTMLButtonElement>) => void
};


export default PlanByClassSwitcher;