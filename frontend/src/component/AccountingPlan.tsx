import { useState } from "react";
import PlanSwitcher from "./Plan/_partials/PlanSwitcher";
import CompletePlan from "./Plan/CompletePlan";
import PlanByGroup from "./Plan/PlanByGroup";
import PlanByClass from "./Plan/PlanByClass";

function AccountingPlan() {
    const [currentPlan, setCurrentPlan] = useState('completePlan');
	
    return <>
    <div className="block p-6 bg-white border border-slate-200 rounded-lg shadow space-y-5">
        <PlanSwitcher currentPlan={currentPlan} changeHandler={setCurrentPlan}/>
        <PlanController currentPlan={currentPlan}/>
    </div>
    </>
}


function PlanController({currentPlan}:PlanControllerProps){ 
	const api_base_url = import.meta.env.VITE_API_BASE_URL;

	if (currentPlan === 'completePlan') {
		const url = api_base_url+'/api/account';
		return <CompletePlan url={url}/> 
	}

	if (currentPlan === 'planByGroup') {
		const url = api_base_url+'/api/account/byGroup';
		return <PlanByGroup url={url}></PlanByGroup>
	}

	if (currentPlan === 'planByClass') {
		const url = api_base_url+'/api/account';
		return <PlanByClass url={url}/> 
	}
}


type PlanControllerProps = {
    currentPlan  : string,
}


export default AccountingPlan;