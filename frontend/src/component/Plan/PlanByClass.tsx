import { ErrorBoundary } from "react-error-boundary";
import { CurrentPageContextProvider } from "../../hook/useCurrentPage";
import AccountingPlanTable from "./_partials/AccountingPlanTable";
import Alert from "../Alerts/Alerts";
import useFetch from "../../hook/useFetch";

function PlanByClass({url}:PlanByClassPropsType) {
    const {data, loading} = useFetch(url);
    if (loading) {
        return <Alert type="info">En cours de chargement</Alert>
    }
    
    const accounts = data;

    return <>
        <CurrentPageContextProvider>
            <ErrorBoundary fallback={<Alert type='warning'>Erreur lors de la récupération des données.</Alert>}>
                <AccountingPlanTable accounts={accounts? accounts:[]}/>
            </ErrorBoundary>
        </CurrentPageContextProvider>
    </>
}

type PlanByClassPropsType = {
    url : string,
}

export default PlanByClass;