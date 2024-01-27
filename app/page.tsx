"use client";
import TextInput from "./components/TextInput";
import Frequency from "./components/Frequency";

export default function Home() {
  const [text, setText] = useState("");
  return (
    <main className="flex min-h-screen flex-col md:flex-row items-start justify-between gap-4 p-0">
      <TextInput />
      <Frequency />
    </main>
  );
}
