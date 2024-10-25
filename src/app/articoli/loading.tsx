import { Loader2 } from "lucide-react";

const Loding = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
    </div>
  );
};

export default Loding;
