import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';

export const CreateNewStudent = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-sky-500 border-none">
        <DialogHeader className="rounded-xl p-4 m-4 text-center items-center bg-white">
          <DialogTitle>Cadastrar novo aluno</DialogTitle>
        </DialogHeader>
        <div className="bg-white p-4 rounded-xl">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label className="text-left font-bold">Nome</Label>
                <Input
                  className="text-left h-8"
                  type="text"
                  placeholder="Nome do aluno"
                ></Input>
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-left font-bold">Sobrenome</Label>
                <Input
                  className="text-left h-8"
                  type="text"
                  placeholder="Sobrenome do aluno"
                ></Input>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-left font-bold">
                  Data de Nascimento
                </Label>
                <Input
                  className="text-left h-8"
                  type="date"
                  placeholder="DD/MM/AAAA"
                ></Input>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-left font-bold">Endereço</Label>
                <Input
                  className="text-left h-8"
                  type="address"
                  placeholder="Endereço do aluno"
                ></Input>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-left font-bold">Escola</Label>
                <Input
                  className="text-left h-8"
                  type="text"
                  placeholder="Escola em que estuda"
                ></Input>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label className="text-right font-bold">Diagnóstico</Label>
                <Input
                  className="text-right h-8"
                  type="text"
                  placeholder="Diagnóstico"
                ></Input>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-right font-bold">
                  Uso de medicamento
                </Label>
                <div className="justify-end flex">
                  <Switch
                    checked={isChecked}
                    onCheckedChange={handleSwitchChange}
                  />
                </div>
              </div>

              {isChecked && (
                <>
                  <div className="flex flex-col gap-2">
                    <Label className="text-right font-bold">
                      Nome do medicamento
                    </Label>
                    <Input
                      className="text-right h-8"
                      type="text"
                      placeholder="Medicamento"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-right font-bold">Posologia</Label>
                    <Input
                      className="text-right h-8"
                      type="text"
                      placeholder="Posologia"
                    ></Input>
                  </div>
                </>
              )}
              <div className="flex flex-col gap-2">
                <Label className="text-right font-bold">
                  Serviços que o aluno irá utilizar
                </Label>
                <Input
                  className="text-right h-8"
                  type="text"
                  placeholder="Diagnóstico"
                ></Input>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            className="bg-transparent text-white hover:bg-transparent border-2 border-white-500 rounded-lg"
            onClick={onClose}
          >
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
