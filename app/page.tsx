import { fetchTodos } from "@/app/api/data";


export default function Home() {
  
  return (
    <div>
      { fetchTodos() }
    </div>
  );
}
