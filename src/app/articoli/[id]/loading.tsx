import { Loader2 } from "lucide-react";

const Loding = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <Loader2 className="h-16 w-16 animate-spin text-red-600" />
    </div>
  );
};

export default Loding;
