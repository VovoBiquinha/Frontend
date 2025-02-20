'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartNoAxesCombined, Calendar as Calendario } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import React from 'react';

export default function HomePage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="pt-20 flex w-full h-full">
      <div className="ml-40 w-1/3 flex flex-col space-y-4">
        <div>
          <Card className="w-[28rem] bg-sky-500 text-white">
            <CardHeader className="flex flex-row items-center space-x-2">
              <ChartNoAxesCombined className="w-6 h-6" />
              <CardTitle className="text-xl">
                <p>Atendimentos realizados por mim</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center justify-center p-8">
              <p className="text-lg text-center">
                <strong>Nº Atendimentos</strong>
              </p>
            </CardContent>
          </Card>
        </div>
        <div>
          <div>
            <Card className="w-full bg-sky-500 text-white h-full">
              <CardHeader className="flex flex-row items-center space-x-2">
                <Calendario className="w-6 h-6" />
                <CardTitle className="text-xl">
                  <p>Atendimentos</p>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center items-center p-4 h-[350px]">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border bg-white text-black w-full h-full"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="bg-[#D9D9D9] w-[45rem] ml-[15rem] rounded-lg">
        <div className="mt-4 space-x-10 flex justify-center">
          <Button className="bg-sky-900 hover:bg-sky-700 focus:bg-sky-500">
            Atendimentos passados
          </Button>
          <Button className="bg-sky-900 hover:bg-sky-700 focus:bg-sky-500">
            Próximos atendimentos
          </Button>
        </div>
      </div>
    </div>
  );
}
