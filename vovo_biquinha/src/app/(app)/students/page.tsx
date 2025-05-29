/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useEffect, useState } from 'react';
import AvatarUser from '@/components/avatar';
import { ViewStudentInfo } from '@/components/modals/view-student-informations';
import { CreateNewStudent } from '@/components/modals/create-student-modal';
import axios from 'axios';

interface Student {
  _id: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  medication_usage: boolean;
  [key: string]: any;
}

export default function StudentsPage() {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudents] = useState<Student | null>(null);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/alunos/');
      setStudents(response.data);
    } catch (error) {
      console.error('Erro na busca de aluno', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  function calculateAge(birthDateString: string): number {
    const birthDate = new Date(birthDateString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    const day = today.getDate() - birthDate.getDate();

    if (month < 0 || (month === 0 && day < 0)) {
      age--;
    }

    return age;
  }

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

        <Button
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-transparent text-sky-500 hover:bg-transparent border-2 border-sky-500 rounded-lg p-7 mt-4 font-bold"
        >
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
            {students.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  Nenhum aluno cadastrado ainda
                </TableCell>
              </TableRow>
            ) : (
              students.map((student) => (
                <TableRow key={student._id}>
                  <TableCell className="font-medium flex items-center">
                    <AvatarUser />
                    {student.first_name} {student.last_name}
                  </TableCell>
                  <TableCell>{calculateAge(student.birth_date)} anos</TableCell>
                  <TableCell>
                    {student.medication_usage ? 'Sim' : 'Não'}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      onClick={() => {
                        setSelectedStudents(student);
                        setIsViewModalOpen(true);
                      }}
                      className="bg-transparent text-sky-500 hover:bg-transparent border-2 border-sky-500 rounded-lg"
                    >
                      Ver Tudo
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <ViewStudentInfo
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        student={selectedStudent}
      />
      <CreateNewStudent
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        fetchStudents={fetchStudents}
      />
    </div>
  );
}
