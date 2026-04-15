import { createContext, useContext, useState, type ReactNode } from "react";
import GetStartedModal from "@/components/GetStartedModal";

const GetStartedContext = createContext<{ openGetStarted: () => void }>({
  openGetStarted: () => {},
});

export const useGetStarted = () => useContext(GetStartedContext);

export const GetStartedProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <GetStartedContext.Provider value={{ openGetStarted: () => setOpen(true) }}>
      {children}
      <GetStartedModal open={open} onOpenChange={setOpen} />
    </GetStartedContext.Provider>
  );
};
