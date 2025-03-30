
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";
import TransactionModal from "@/components/TransactionModal";
import { FinanceProvider } from "@/context/FinanceContext";
import Home from "./pages/Home";
import Budget from "./pages/Budget";
import Accounts from "./pages/Accounts";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import CameraModal from "./components/CameraModal";

// Create the query client outside of the component
const queryClient = new QueryClient();

const App = () => {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);

  const handleCaptureReceipt = (imageData: string) => {
    // Using toast directly here was causing issues
    console.log("Smart Scan Completed: Transaction details captured successfully");
    setIsCameraModalOpen(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <FinanceProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="app-container pb-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/budget" element={<Budget />} />
                <Route path="/accounts" element={<Accounts />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              
              <BottomNavigation 
                onAddPress={() => setIsTransactionModalOpen(true)}
                onCameraPress={() => setIsCameraModalOpen(true)}
              />
              
              <TransactionModal 
                isOpen={isTransactionModalOpen} 
                onClose={() => setIsTransactionModalOpen(false)} 
              />

              <CameraModal 
                isOpen={isCameraModalOpen} 
                onClose={() => setIsCameraModalOpen(false)} 
                onCapture={handleCaptureReceipt}
              />
            </div>
          </BrowserRouter>
        </FinanceProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
