import Account from "../../entity/Account";

function PlanTable({accounts}:PlanTableProps){
    return <>
            <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg"> {/*max-h-[55dvh]*/}
                <table className="relative w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                N° Compte
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Libellé
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map(account => <AccountRow {...account}  key={account.code}/> )}
                    </tbody>
                </table>
            </div>
    </>
}

function AccountRow(account:Account) {
    return <>
        <tr className="odd:bg-white even:bg-gray-50">
            <td className="px-6 py-4" scope="row" >
                <span className="font-medium text-blue-600 hover:underline">
                    {account.code}
                </span>
            </td>
            <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {account.name}
            </th>
        </tr>
    </>
}

type PlanTableProps = {
    accounts: Account[];
};

export default PlanTable;