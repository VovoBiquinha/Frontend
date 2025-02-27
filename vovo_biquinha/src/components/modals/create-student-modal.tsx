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
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [studentData, setStudentData] = useState({
    nome: "",
    sobrenome: "",
    dataNascimento: "",
    endereco: "",
    escola: "",
    diagnostico: "",
    usoMedicamento: false,
    nomeMedicamento: "",
    posologia: "",
    servicos: "",
  });

  const handleSwitchChange = (checked: boolean) => {
    setIsChecked(checked);
    setStudentData({ ...studentData, usoMedicamento: checked });
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
                  name="nome"
                  value={studentData.nome}
                  onChange={handleChange}
                  placeholder="Nome do aluno"
                ></Input>
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-left font-bold">Sobrenome</Label>
                <Input
                  className="text-left h-8"
                  type="text"
                  name="sobrenome"
                  value={studentData.sobrenome}
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
                  name="dataNascimento"
                  value={studentData.dataNascimento}
                  onChange={handleChange}
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
                  name="diagnostico"
                  value={studentData.diagnostico}
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
                      name="nomeMedicamento"
                      value={studentData.nomeMedicamento}
                      onChange={handleChange}
                      placeholder="Medicamento"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-right font-bold">Posologia</Label>
                    <Input
                      className="text-right h-8"
                      type="text"
                      name="posologia"
                      value={studentData.posologia}
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
                  name="servicos"
                  value={studentData.servicos}
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
