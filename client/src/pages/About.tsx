import Layout from "@/components/Layout";
import { Terminal, Award, Users, Globe } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Header */}
        <section className="border-b-2 border-black py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/30 -skew-x-12 transform translate-x-20"></div>
          <div className="container relative z-10">
            <div className="inline-block border-2 border-black bg-white px-4 py-1 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-mono font-bold uppercase">Kernel_Info // v.2.0.4</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 tracking-tighter">
              The System <br/> Architects
            </h1>
            <p className="text-xl font-mono max-w-2xl leading-relaxed">
              We are not just IT support. We are infrastructure engineers dedicated to the stability, security, and efficiency of your digital operations.
            </p>
          </div>
        </section>

        {/* Stats / Grid */}
        <section className="border-b-2 border-black">
          <div className="container px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-black">
              <div className="p-8 text-center hover:bg-secondary transition-colors">
                <div className="text-4xl font-black mb-2">99.9%</div>
                <div className="font-mono text-xs uppercase font-bold text-muted-foreground">Uptime_Guaranteed</div>
              </div>
              <div className="p-8 text-center hover:bg-secondary transition-colors">
                <div className="text-4xl font-black mb-2">500+</div>
                <div className="font-mono text-xs uppercase font-bold text-muted-foreground">Systems_Managed</div>
              </div>
              <div className="p-8 text-center hover:bg-secondary transition-colors">
                <div className="text-4xl font-black mb-2">24/7</div>
                <div className="font-mono text-xs uppercase font-bold text-muted-foreground">Active_Monitoring</div>
              </div>
              <div className="p-8 text-center hover:bg-secondary transition-colors">
                <div className="text-4xl font-black mb-2">15yr</div>
                <div className="font-mono text-xs uppercase font-bold text-muted-foreground">Combined_Exp</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
                  <Terminal className="h-8 w-8" />
                  Mission_Statement
                </h2>
                <div className="prose prose-lg font-mono text-muted-foreground">
                  <p className="mb-6">
                    In an era where downtime equals obsolescence, our mission is absolute operational continuity. We believe that computer management should be invisible, proactive, and ruthless in its efficiency.
                  </p>
                  <p>
                    We reject the "break-fix" model. Instead, we implement a "predict-prevent" architecture that identifies anomalies before they become failures.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="neo-card bg-white p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white p-2 border-2 border-black">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold uppercase mb-2">Certified Excellence</h3>
                      <p className="font-mono text-sm text-muted-foreground">
                        Our team holds top-tier certifications from Microsoft, Cisco, and Red Hat. We don't guess; we know.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="neo-card bg-white p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white p-2 border-2 border-black">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold uppercase mb-2">Global Reach</h3>
                      <p className="font-mono text-sm text-muted-foreground">
                        Managing nodes across 3 continents. Distance is irrelevant to our remote management protocols.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="neo-card bg-white p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white p-2 border-2 border-black">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold uppercase mb-2">Human-Centric</h3>
                      <p className="font-mono text-sm text-muted-foreground">
                        We manage machines, but we serve people. Clear communication is as vital as clean code.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
