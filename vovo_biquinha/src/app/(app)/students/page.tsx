'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, UserPlus } from 'lucide-react';
import { useState } from 'react';
import AvatarUser from '@/components/avatar';
import { ViewStudentInfo } from '@/components/modals/view-student-informations';

export default function StudentsPage() {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="mt-20 w-1/2 mx-auto text-start">
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">Alunos</h2>
        <h4 className="text-gray-600 text-sm">N Alunos cadastrados</h4>
      </div>

      <div className="flex items-center justify-between">
        <div
          className="relative w-1/3 mt-4 border border-gray-300 rounded-lg p-2 focus-within:border-black cursor-text "
          onClick={() => document.getElementById('searchInput')?.focus()}
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />

          <label
            className={`absolute left-10 text-gray-500 transition-all duration-200 cursor-text ${
              isFocused || value
                ? 'text-xs top-1 bg-white px-1'
                : 'text-base top-1/2 transform -translate-y-1/2'
            }`}
          >
            Pesquisar
          </label>

          <Input
            id="searchInput"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(value !== '')}
            className="border-none focus:ring-0 focus:outline-none w-full bg-transparent pl-10 pt-2"
          />
        </div>

        <Button className="bg-transparent text-sky-500 hover:bg-transparent border-2 border-sky-500 rounded-lg p-7 mt-4 font-bold">
          <UserPlus className="h-5 w-5" strokeWidth={3} />
          Cadastrar Aluno
        </Button>
      </div>

      <div className="mt-20 border rounded-xl w-full shadow-xl inset-shadow-xs">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Aluno</TableHead>
              <TableHead>Idade</TableHead>
              <TableHead>Uso de Medicamentos</TableHead>
              <TableHead className="text-right">Mais informações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium flex items-center">
                <AvatarUser />
                Joãozinho 123
              </TableCell>
              <TableCell>4</TableCell>
              <TableCell>Sim</TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() => setModalOpen(true)}
                  className="bg-transparent text-sky-500 hover:bg-transparent border-2 border-sky-500 rounded-lg"
                >
                  Ver Tudo
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <ViewStudentInfo isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <p>Detalhes do aluno</p>
      </ViewStudentInfo>
    </div>
  );
}
