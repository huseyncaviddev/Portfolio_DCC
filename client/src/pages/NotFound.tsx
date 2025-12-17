import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-background p-4">
        <div className="neo-card max-w-md w-full text-center py-12">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="h-24 w-24 text-destructive" />
          </div>
          <h1 className="text-6xl font-black mb-2">404</h1>
          <h2 className="text-2xl font-bold uppercase mb-6">System_Error: Page_Missing</h2>
          <p className="font-mono text-muted-foreground mb-8">
            The requested resource could not be located in the current directory. Please check your navigation coordinates.
          </p>
          <Link href="/">
            <Button className="neo-button w-full">
              Return_Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
