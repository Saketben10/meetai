import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="text-4xl font-bold text-green-500">
      <Button
        variant={"destructive"}
        size={"default"}
        className="font-bold text-white"
      >
        click me
      </Button>
    </div>
  );
}
