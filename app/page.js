import StudentList from "./components/StudentList"


export default function Home() {
  return (
    <div className="p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-4xl font-bold">STUDENT LIST</h1>
        <p className="text-slate-500">Hi Admin! You may add, update, and/or delete students.</p>
        <StudentList />
      </main>
        
    </div>
  );
}
