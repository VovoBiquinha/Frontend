import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartNoAxesCombined } from 'lucide-react';
import React from 'react';

export default function HomePage() {
  return (
    <div className="pt-20 flex w-full">
      <div className="w-1/3 ml-40">
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
