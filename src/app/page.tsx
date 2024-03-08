import GroupList from "@/components/groupList";
import PriceTable from "@/components/symbolsData";
import SymbolsList from "@/components/symbolsList";

export default function Home() {
  return (
    <main className="gap-4 my-4 w-full">
      <div className="container flex flex-col justify-normal items-center p-6 mx-auto lg:w-3/4">
        <div className="flex flex-col lg:flex-row gap-4 w-full mt-4">
          <GroupList />
          <SymbolsList />
        </div>
        <PriceTable />
      </div>
    </main>
  );
}
