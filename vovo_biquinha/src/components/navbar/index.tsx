import Link from 'next/link';
import AvatarUser from '../avatar';

export default function Navbar() {
  return (
    <div className="bg-sky-500 p-8 fixed z-50 top-0 w-full text-white font-bold flex align-center mb-4">
      <Link href="/students" className="mr-16 ml-8">
        Acessar Alunos
      </Link>

      <Link href="/my-services">Meus Atendimentos</Link>

      <div className="ml-auto">
        <AvatarUser />
      </div>
    </div>
  );
}
