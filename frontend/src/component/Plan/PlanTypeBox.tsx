function PlanTypeBox() {
    return <>
        <div className="planTypeBox w-fit mx-auto">
            <div className="inline-flex flex-col gap-2 md:flex-row md:gap-1 rounded-md shadow-sm" role="group">
                <ButtonPlanType is_active={true}>Plan Complet</ButtonPlanType>
                <ButtonPlanType>Plan par groupe</ButtonPlanType>
                <ButtonPlanType>Plan par classe</ButtonPlanType>
            </div>
        </div>
        <h2 className="text-center text-xl/normal font-bold my-3">Plan Comptable SYSCOHADA Révisé</h2>
    </>
}

type ButtonPlanTypeProps = {
    children: string;
    is_active?: boolean;
};
function ButtonPlanType({children, is_active}:ButtonPlanTypeProps) {
    return <>
        <button type="button" className={`planTypeBtn ${is_active ? 'active' : ""}`}>
            {children}
        </button>
    </>
}



export default PlanTypeBox;