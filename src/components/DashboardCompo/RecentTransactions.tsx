import { getCollection } from '@/lib/configs/database';
import getSession from '@/lib/configs/getSession';

// Income
import SalaryCard from '@/components/DashboardCompo/Cards/Salary';
import MonthDate from './MonthDate';
import AllowanceCard from './Cards/Allowance';
import InvestmentCard from './Cards/Investment';
import BusinessCard from './Cards/Business';
import FreelanceCard from './Cards/Freelance';
// Expense
import BillsUtilitiesCard from './Cards/BillsUtilities';
import DailyMealsCard from './Cards/DailyMeals';
import EntertainmentCard from './Cards/Entertainment';
import PersonalCard from './Cards/PersonalNeeds';
import HealthCareCard from './Cards/Healthcare';
import EducationCard from './Cards/Education';
import GroceriesCard from './Cards/Groceries';

export default async function RecentTransactions() {
  const user = await getSession();
    const transacCollection = await getCollection("transactions");
    const transaction = await transacCollection
      ?.find({ userId: user.userId })
      .sort({ createdAt: -1 })
      .toArray();

    // Component mapper
  const cardComponents = {
    // Income
    salary: SalaryCard,
    allowance: AllowanceCard,
    investment: InvestmentCard,
    business: BusinessCard,
    freelance: FreelanceCard,

    // Expenses
    utility: BillsUtilitiesCard,
    food: DailyMealsCard,
    entertainment: EntertainmentCard,
    personal: PersonalCard,
    healthcare: HealthCareCard,
    education: EducationCard,
    grocery: GroceriesCard
  };

  return (
    <div className="bg-white rounded-lg shadow-sm w-full p-5 mt-6">
      <div>

      <div>
        <h1></h1>
      </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-medium">Transaction History</h1>
          </div>
          <MonthDate/>
        </div>
        <p className="text-sm sm:text-base font-medium text-gray-500">
          Stay updated on your financial activity this month
        </p>
      </div>

      <div className="">
        {transaction?.map((item, index) => {
          const CardComponent = cardComponents[item.category];
          if (!CardComponent) return null;
          
          return (
            <CardComponent
              key={index}
              description={item.description}
              amount={item.amount}
              date={item.date}
              createdAt={item.createdAt}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};
