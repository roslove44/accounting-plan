import { ErrorBoundary } from "react-error-boundary";
import { CurrentPageContext} from "../../hooks/useCurrentPage";
import AccountingPlanTable from "./_partials/AccountingPlanTable";
import Alert from "../Alerts/Alerts";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import PlanByGroupSwitcher from "./_partials/PlanByGroupSwitcher";

function PlanByGroup({url}:PlanByGroupPropsType) {
    const {data, loading} = useFetch(url);
    const [activeGroup, setActiveGroup] = useState('a');
    const {currentPage, setCurrentPage} = useContext(CurrentPageContext);

    if (loading) {
        return <Alert type="info">En cours de chargement</Alert>
    }
    const accounts = data;
    const groups = {
        'a' : 'Comptes de bilan (Classe 1 à 5)',
        'b' : 'Comptes de gestion (Classe 6 à 8)',
        'c' : 'Compte de la CAGE(Classe 9)',
    }
    const activeAccounts = accounts ? accounts[activeGroup as keyof typeof accounts] : [];
    const changeHandler = (e:string) => {
        setActiveGroup(e);
        setCurrentPage(Math.min(currentPage, 1));  
    }

    
    return <>
        <h2 className="text-center text-xl/normal font-bold my-3">Plan par Groupe</h2>
        <PlanByGroupSwitcher currentGroup={activeGroup} changeHandler={changeHandler}>{groups[activeGroup as keyof typeof groups]}</PlanByGroupSwitcher>
        <ErrorBoundary fallback={<Alert type='warning'>Données invalides.</Alert>}>
            <AccountingPlanTable accounts={activeAccounts}/>
        </ErrorBoundary>
    </>
}


type PlanByGroupPropsType = {
    url : string,
}

export default PlanByGroup;