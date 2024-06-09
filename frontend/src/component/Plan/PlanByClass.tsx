import { ErrorBoundary } from "react-error-boundary";
import AccountingPlanTable from "./_partials/AccountingPlanTable";
import Alert from "../Alerts/Alerts";
import useFetch from "../../hook/useFetch";
import PlanByClassSwitcher from "./_partials/PlanByClassSwitcher";
import { useContext, useState } from "react";
import { CurrentPageContext } from "../../hook/useCurrentPage";

function PlanByClass({url}:PlanByClassPropsType) {
    const {data, loading} = useFetch(url);
    const [currentClass, setCurrentClass] = useState('1');
    const {currentPage, setCurrentPage} = useContext(CurrentPageContext);
    if (loading) {
        return <Alert type="info">En cours de chargement</Alert>
    }
    
    const accounts = data;
    const accountClass = {
        '1' : "Classe 1 : Comptes de ressources durables",
        '2' : "Classe 2 : Comptes d'actif immobilisé",
        '3' : 'Classe 3 : Comptes de stock',
        '4' : 'Classe 4: Comptes de tiers',
        '5' : 'Classe 5: Comptes de trésorerie',
        '6' : 'Classe 6 : Comptes de charges des activités ordinaires',
        '7' : 'Classe 7 : Comptes de produits des activités ordinaires',
        '8' : 'Classe 8 : Comptes des autres charges et des autres produits',
        '9' : 'Classe 9 : Comptes des engagements hors bilan et comptes de la comptabilité analytique de gestion',
    }
    const activeAccounts = accounts ? accounts[currentClass as keyof typeof accounts] : [];
    const changeHandler = (e:string) => {
        setCurrentClass(e);
        setCurrentPage(Math.min(currentPage, 1));  
    }

    return <>
        <PlanByClassSwitcher currentClass={currentClass} changeHandler={changeHandler}>{accountClass[currentClass as keyof typeof accountClass]}</PlanByClassSwitcher>
        <ErrorBoundary fallback={<Alert type='warning'>Erreur lors du traitement des données.</Alert>}>
            <AccountingPlanTable accounts={activeAccounts}/>
        </ErrorBoundary>
    </>
}

type PlanByClassPropsType = {
    url : string,
}

export default PlanByClass;