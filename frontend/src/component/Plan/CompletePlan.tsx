import { ErrorBoundary } from "react-error-boundary";
import { CurrentPageContextProvider } from "../../hook/useCurrentPage";
import AccountingPlan from "./_partials/AccountingPlan";
import Alert from "../Alerts/Alerts";
import Account from "../../entity/Account";

function CompletePlan({accounts}:CompletePlanPropsType) {
    return <>
        <CurrentPageContextProvider>
            <ErrorBoundary fallback={<Alert type='warning'>Erreur lors de la récupération des données.</Alert>}>
                <AccountingPlan accounts={accounts}/>
            </ErrorBoundary>
        </CurrentPageContextProvider>
    </>
}

type CompletePlanPropsType = {
    accounts : Account[]|[],
}

export default CompletePlan;