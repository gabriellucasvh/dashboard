import { ChartOverview } from "@/components/chart";
import { Sales } from "@/components/sales";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="p-4 sm:ml-14">
      {/* Seção de Cards Resumo */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total Vendas
              </CardTitle>
              <DollarSign className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <CardDescription>Total vendas em 90 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$ 40.000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Novos Clientes
              </CardTitle>
              <Users className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <CardDescription>Novos clientes em 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">234</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Pedidos Hoje
              </CardTitle>
              <Percent className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <CardDescription>Total de pedidos hoje</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">65</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total Pedidos
              </CardTitle>
              <BadgeDollarSign className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <CardDescription>Total pedidos em 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">2300</p>
          </CardContent>
        </Card>
      </section>

      {/* Seção de Gráfico e Vendas */}
      <section className="mt-4 flex flex-col gap-4 md:flex-row">
        <ChartOverview />
        <Sales />
      </section>
    </main>
  );
}
