import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-screen h-screen">
      <div className="h-full w-full flex items-center justify-center">
        <Button>Click me</Button>
      </div>
    </div>
  );
}