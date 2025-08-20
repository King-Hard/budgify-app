import { getUserTransaction } from "@/lib/helpers/transactions";
import MonthDate from "@/components/DashboardCompo/DashboardDate";
// Cards
import SalaryCard from './Cards/Salary';
import AllowanceCard from './Cards/Allowance';
import InvestmentCard from './Cards/Investment';
import BusinessCard from './Cards/Business';
import FreelanceCard from './Cards/Freelance';
import BillsUtilitiesCard from './Cards/BillsUtilities';
import DailyMealsCard from './Cards/DailyMeals';
import EntertainmentCard from './Cards/Entertainment';
import PersonalCard from './Cards/PersonalNeeds';
import HealthCareCard from './Cards/Healthcare';
import EducationCard from './Cards/Education';
import GroceriesCard from './Cards/Groceries';

const cardComponents: Record<string, React.FC<any>> = {
  salary: SalaryCard,
  allowance: AllowanceCard,
  investment: InvestmentCard,
  business: BusinessCard,
  freelance: FreelanceCard,
  utility: BillsUtilitiesCard,
  food: DailyMealsCard,
  entertainment: EntertainmentCard,
  personal: PersonalCard,
  healthcare: HealthCareCard,
  education: EducationCard,
  grocery: GroceriesCard,
};

export default async function RecentTransactions() {
  const { transactions } = await getUserTransaction();

  return (
    <div className="bg-white rounded-lg shadow-sm w-full p-5 mt-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-medium">Transaction History</h1>
        <MonthDate/>
      </div>
      <p className="text-sm sm:text-base font-medium text-gray-500">Stay updated on your financial activity this month</p>
      <div>
        {transactions?.map((item, index) => {
          const CardComponent = cardComponents[item.category];
          return CardComponent ? <CardComponent key={index} {...item} /> : null;
        })}
      </div>
    </div>
  );
}
