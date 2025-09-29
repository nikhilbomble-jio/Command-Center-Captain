import { Header } from "@/components/Header";
import { DashboardBanner } from "@/components/DashboardBanner";
import { ChatbotInterface } from "@/components/ChatbotInterface";
import PWAInstallPrompt from "@/components/PWAInstallPrompt";
import { Headphones, UserCheck } from "lucide-react";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-background"
      style={{
        background: "var(--gradient-background)",
      }}
    >
      <PWAInstallPrompt />
      <Header />
      <div className="container mx-auto px-4 py-8">
        <DashboardBanner />
        
        {/* Support Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-6">
              <Headphones className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-card-foreground mb-4">Online Support</h3>
            <p className="text-muted-foreground">Get instant help from our support team</p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-6">
              <UserCheck className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-card-foreground mb-4">Offline Support</h3>
            <p className="text-muted-foreground">Visit our service centers for assistance</p>
          </div>
        </div>
      </div>
      
      {/* <ChatbotInterface /> */}
    </div>
  );
};

export default Index;
