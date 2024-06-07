
import './App.css'
import Alert from './component/Alerts/Alerts'
import ErrorBoundary from './component/ErrorBoundary'
import { Header } from './component/Header'
import Hero from './component/Hero'
import Plan from './component/Plan/Plan'
import PlanTypeBox from './component/Plan/PlanTypeBox'
// import Account from './entity/Account'
import { CurrentPageContextProvider } from './hook/useCurrentPage'
import useFetch from './hook/useFetch'

function App() {
  const getOptions = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  };
  const accounts = useFetch('https://127.0.0.1:8000/api/accountx', getOptions).data
  console.log(accounts);
  

    // const accounts: Account[]|[] = [
    //     { code: 101, name: "Cash", keywords: "liquid assets, currency" },
    //     { code: 102, name: "Accounts Receivable", keywords: "debtors, credit sales" },
    //     { code: 103, name: "Inventory", keywords: "stock, goods" },
    //     { code: 104, name: "Prepaid Expenses", keywords: "prepayments, advance payments" },
    //     { code: 105, name: "Fixed Assets", keywords: "property, equipment" },
    //     { code: 106, name: "Accumulated Depreciation", keywords: "depreciation, wear and tear" },
    //     { code: 201, name: "Accounts Payable", keywords: "creditors, suppliers" },
    //     { code: 202, name: "Notes Payable", keywords: "short-term loans, promissory notes" },
    //     { code: 203, name: "Accrued Liabilities", keywords: "accrued expenses, pending liabilities" },
    //     { code: 204, name: "Unearned Revenue", keywords: "deferred revenue, advance payments" },
    //     { code: 301, name: "Common Stock", keywords: "share capital, equity" },
    //     { code: 302, name: "Retained Earnings", keywords: "accumulated profits, reserves" },
    //     { code: 401, name: "Sales Revenue", keywords: "sales, income" },
    //     { code: 402, name: "Service Revenue", keywords: "service fees, earnings" },
    //     { code: 501, name: "Cost of Goods Sold", keywords: "COGS, cost of sales" },
    //     { code: 502, name: "Salaries Expense", keywords: "wages, payroll" },
    //     { code: 503, name: "Rent Expense", keywords: "lease, rental costs" },
    //     { code: 504, name: "Utilities Expense", keywords: "electricity, water" },
    //     { code: 505, name: "Insurance Expense", keywords: "premiums, coverage" },
    //     { code: 506, name: "Advertising Expense", keywords: "marketing, promotions" },
    //     { code: 507, name: "Advertising Expense", keywords: "marketing, promotions" },
    // ];

  return (
    <>
      <Header></Header>
      <div className="content">
        <Hero></Hero>
        <div className="container mx-auto mt-10 px-10 lg:px-32 xl:px-64">
            <div className="block p-6 bg-white border border-slate-200 rounded-lg shadow space-y-5">
                <PlanTypeBox/>
                <Alert type='danger'>Voici</Alert>
                <CurrentPageContextProvider>
                  <ErrorBoundary>
                  <Plan accounts={accounts}/>
                  </ErrorBoundary>
                </CurrentPageContextProvider>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default App
