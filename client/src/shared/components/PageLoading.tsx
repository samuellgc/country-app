import { Spinner } from "./ui/Spinner";

export function PageLoading() {
  return (
    <div className="fixed left-0 top-0 z-50 w-full h-screen bg-black/30">
      <Spinner className="w-12 h-12 absolute top-1/2 left-1/2" />
    </div>
  );
}
