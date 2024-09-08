import { CircleDollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area"

export function Sales() {
  return (
    <Card className="flex-1 max-h-80 md:max-h-[400px] lg:max-h-[500px]">
      <ScrollArea className="h-full w-full rounded-md border p-4 md:p-6 lg:p-8">
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl md:text-2xl text-gray-800 select-none">
              Últimos clientes
            </CardTitle>
            <CircleDollarSign className="ml-auto h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </div>
          <CardDescription className="text-xs sm:text-sm md:text-base">
            Novos clientes das últimas 24 horas
          </CardDescription>
        </CardHeader>
        <CardContent>
          {Array(5).fill("").map((_, index) => (
            <article key={index} className="flex items-center gap-2 border-b py-2 md:py-3 lg:py-4">
              <Avatar className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
                <AvatarImage src="https://github.com/gabriellucasvh.png" />
                <AvatarFallback>GL</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-semibold">Gabriel Lucas</p>
                <span className="text-[12px] sm:text-sm md:text-base text-gray-400">
                  gabriellucasvh@gmail.com
                </span>
              </div>
            </article>
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  );
}
