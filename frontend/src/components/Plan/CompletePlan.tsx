import { ErrorBoundary } from "react-error-boundary";
import { CurrentPageContextProvider } from "../../hooks/useCurrentPage";
import AccountingPlanTable from "./_partials/AccountingPlanTable";
import Alert from "../Alerts/Alerts";
import useFetch from "../../hooks/useFetch";

function CompletePlan({url}:CompletePlanPropsType) {
    const {data, loading} = useFetch(url);

    if (loading) {
        return <Alert type="info">En cours de chargement</Alert>
    }
    const accounts = data;
    
    return <>
        <CurrentPageContextProvider>
            <h2 className="text-center text-xl/normal font-bold my-3">Plan Comptable SYSCOHADA Révisé</h2>
            <ErrorBoundary fallback={<Alert type='warning'>Erreur lors de la récupération des données.</Alert>}>
                <AccountingPlanTable accounts={accounts? accounts:[]}/>
            </ErrorBoundary>
        </CurrentPageContextProvider>
    </>
}

type CompletePlanPropsType = {
    url : string,
}

export default CompletePlan;