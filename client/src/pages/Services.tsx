import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Server, Cpu, ShieldAlert, HardDrive, Network, Database, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "remote-admin",
      icon: <Server className="h-8 w-8" />,
      title: "Remote_Administration",
      description: "Complete remote management of your workstations and servers. We handle user accounts, permissions, and policy enforcement without stepping foot in your office.",
      features: ["User Management", "Policy Enforcement", "Remote Troubleshooting", "Patch Management"],
      price: "From $50/mo"
    },
    {
      id: "sys-maint",
      icon: <Cpu className="h-8 w-8" />,
      title: "System_Maintenance",
      description: "Proactive maintenance to keep your hardware running at peak efficiency. Includes disk cleanup, defragmentation, and thermal monitoring.",
      features: ["Hardware Diagnostics", "OS Updates", "Performance Tuning", "Log Analysis"],
      price: "From $30/mo"
    },
    {
      id: "sec-audit",
      icon: <ShieldAlert className="h-8 w-8" />,
      title: "Security_Audit",
      description: "In-depth analysis of your security posture. We identify vulnerabilities in your network and software before attackers can exploit them.",
      features: ["Vulnerability Scanning", "Firewall Configuration", "Malware Removal", "Access Control Review"],
      price: "Custom Quote"
    },
    {
      id: "data-rec",
      icon: <HardDrive className="h-8 w-8" />,
      title: "Data_Recovery",
      description: "Emergency services for lost or corrupted data. We utilize advanced forensic tools to recover critical business information.",
      features: ["Drive Recovery", "Backup Restoration", "Forensic Analysis", "Secure Deletion"],
      price: "Per Incident"
    },
    {
      id: "net-opt",
      icon: <Network className="h-8 w-8" />,
      title: "Network_Optimization",
      description: "Streamlining your local and wide area networks for maximum throughput and minimal latency.",
      features: ["Bandwidth Analysis", "Router Configuration", "Wi-Fi Mapping", "VPN Setup"],
      price: "From $100/mo"
    },
    {
      id: "db-mgmt",
      icon: <Database className="h-8 w-8" />,
      title: "Database_Management",
      description: "Administration of SQL and NoSQL databases ensuring data integrity, availability, and performance.",
      features: ["Schema Optimization", "Backup Strategy", "Query Tuning", "Replication Setup"],
      price: "From $150/mo"
    }
  ];

  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Header */}
        <section className="border-b-2 border-black py-20 bg-secondary">
          <div className="container">
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 tracking-tighter">
              Service_Modules
            </h1>
            <p className="text-xl font-mono max-w-2xl border-l-4 border-black pl-6">
              Select a module to integrate into your operational workflow. All services are scalable and executed by certified professionals.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 gap-12">
              {services.map((service, index) => (
                <div key={service.id} className="neo-card flex flex-col md:flex-row gap-8 items-start group hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="border-2 border-black bg-accent p-8 flex items-center justify-center mb-4 h-48 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('/images/bg-grid.png')] opacity-30"></div>
                      <div className="relative z-10 bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        {service.icon}
                      </div>
                    </div>
                    <div className="font-mono font-bold text-lg border-2 border-black p-2 text-center bg-primary text-white">
                      {service.price}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-sm font-bold bg-black text-white px-2 py-1">0{index + 1}</span>
                      <h2 className="text-3xl font-bold uppercase">{service.title}</h2>
                    </div>
                    
                    <p className="font-mono text-muted-foreground mb-8 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary"></div>
                          <span className="font-mono text-sm font-bold uppercase">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href="/contact">
                      <Button className="neo-button">
                        Initialize_Request <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="border-t-2 border-black py-20 bg-black text-white">
          <div className="container text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">
              Custom_Architecture?
            </h2>
            <p className="font-mono text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
              Need a bespoke solution for a complex enterprise environment? We engineer custom management protocols tailored to your specific stack.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-black border-2 border-white hover:bg-transparent hover:text-white font-mono font-bold uppercase px-8 py-6 text-xl shadow-[6px_6px_0px_0px_rgba(50,50,50,1)] hover:shadow-[4px_4px_0px_0px_rgba(50,50,50,1)] transition-all">
                Contact_Engineering
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
