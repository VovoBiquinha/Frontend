import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface StudentInformation {
  _id?: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  address?: string;
  school?: string;
  diagnosis?: string;
  medication_usage: boolean;
  medication_name?: string;
  dosage?: string;
  services?: string;
  [key: string]: any;
}

export const ViewStudentInfo = ({
  isOpen,
  onClose,
  student,
}: {
  isOpen: boolean;
  onClose: () => void;
  student: StudentInformation | null;
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen || !student) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-sky-500 border-none">
        <DialogHeader className="rounded-xl p-4 m-4 text-center items-center bg-white">
          <DialogTitle>
            {student.first_name}
            {""} {student.last_name}
          </DialogTitle>
        </DialogHeader>
        <div className="bg-white p-4 rounded-xl">
          <div className="flex justify-between">
            <div className="grid gap-4 py-4">
              <div className="flex flex-col space-y-4">
                <Label className="text-left font-bold">
                  Escola em que estuda
                </Label>
                <Label className="text-left">{student.school}</Label>
              </div>
              <div className="flex flex-col space-y-4">
                <Label className="text-left font-bold">Endereço</Label>
                <Label className="text-left">{student.address}</Label>
              </div>
              <div className="flex flex-col space-y-4">
                <Label className="text-left font-bold">
                  Serviços utilizados
                </Label>
                <Label className="text-left">{student.services}</Label>
              </div>
              <div className="flex flex-col space-y-4">
                <Label className="text-left font-bold">Diagnóstico</Label>
                <Label className="text-left">{student.diagnosis}</Label>
              </div>
            </div>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col space-y-4">
                <Label className="text-right font-bold">
                  Uso de medicamento
                </Label>
                <div className="justify-end flex">
                  <Switch checked={student.medication_usage} disabled />
                </div>
              </div>
              {student.medication_usage && (
                <>
                  <div className="flex flex-col space-y-4">
                    <Label className="text-right font-bold">
                      Nome do medicamento
                    </Label>
                    <Label className="text-right ">
                      {student.medication_name}
                    </Label>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <Label className="text-right font-bold">Posologia</Label>
                    <Label className="text-right ">
                      {student?.medication_usage && (
                        <>
                          <p>
                            Medicamento:{" "}
                            {student.medication_name || "Não informado"}
                          </p>
                          <p>Posologia: {student.dosage || "Não informada"}</p>
                        </>
                      )}
                    </Label>
                  </div>
                </>
              )}
            </div>
          </div>
          <div>
            <h1 className="text-center border-b-2 border-gray-300 mb-4">
              Observações
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="bg-white text-sky-500 hover:bg-sky-100 border-white-500 rounded-lg">
            Extrair Relatório
          </Button>
        </div>
        <DialogFooter>
          <Button
            className="bg-transparent text-white hover:bg-transparent border-2 border-white-500 rounded-lg"
            onClick={onClose}
          >
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
      ;
    </Dialog>
  );
};
