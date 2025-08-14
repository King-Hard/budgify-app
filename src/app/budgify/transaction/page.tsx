import Transactions from "@/components/transactionsCompo/Transactions";

export default function AddBudget() {

  return (
    <div className="p-5 ">
      <div className="mb-6">
        <h1 className="text-yellow-500 text-3xl font-bold">Transaction</h1>
        <p className="text-gray-500 mt-1 font-medium">Record your income and expenses</p>
      </div>
      <Transactions/>
    </div>
  );
};
