import React, { useState } from "react";
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
import { Input } from "@/components/ui/input";
import axios from "axios";

export const CreateNewStudent = ({
  isOpen,
  onClose,
  fetchStudents,
}: {
  isOpen: boolean;
  onClose: () => void;
  fetchStudents: () => void;
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [studentData, setStudentData] = useState({
    first_name: "",
    last_name: "",
    birth_date: "",
    address: "",
    school: "",
    diagnosis: "",
    medication_usage: false,
    medication_name: "",
    dosage: "",
    services: "",
  });

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    setStudentData({ ...studentData, medication_usage: checked });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/alunos/",
        studentData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Aluno cadastrado:", response.data);
      fetchStudents();
      onClose();
    } catch (error) {
      console.error("Erro ao cadastrar aluno:", error);
    }
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
                  name="first_name"
                  value={studentData.first_name}
                  onChange={handleChange}
                  placeholder="Nome do aluno"
                ></Input>
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-left font-bold">Sobrenome</Label>
                <Input
                  className="text-left h-8"
                  type="text"
                  name="last_name"
                  value={studentData.last_name}
                  onChange={handleChange}
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
                  name="birth_date"
                  value={studentData.birth_date}
                  onChange={handleChange}
                  placeholder="DD/MM/AAAA"
                ></Input>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-left font-bold">Endereço</Label>
                <Input
                  className="text-left h-8"
                  type="text"
                  placeholder="Endereço do aluno"
                  value={studentData.address}
                  onChange={handleChange}
                  name="address"
                ></Input>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-left font-bold">Escola</Label>
                <Input
                  className="text-left h-8"
                  type="text"
                  placeholder="Escola em que estuda"
                  value={studentData.school}
                  onChange={handleChange}
                  name="school"
                ></Input>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label className="text-right font-bold">Diagnóstico</Label>
                <Input
                  className="text-right h-8"
                  type="text"
                  name="diagnosis"
                  value={studentData.diagnosis}
                  onChange={handleChange}
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
                      name="medication_name"
                      value={studentData.medication_name}
                      onChange={handleChange}
                      placeholder="Medicamento"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-right font-bold">Posologia</Label>
                    <Input
                      className="text-right h-8"
                      type="text"
                      name="dosage"
                      value={studentData.dosage}
                      onChange={handleChange}
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
                  name="services"
                  value={studentData.services}
                  onChange={handleChange}
                  placeholder="Diagnóstico"
                ></Input>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button
            className="bg-transparent text-white hover:bg-transparent border-2 border-white-500 rounded-lg"
            onClick={handleSubmit}
          >
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
