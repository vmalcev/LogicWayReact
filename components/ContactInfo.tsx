"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="animate-fadeInUp">
        <CardHeader>
          <CardTitle className="text-black tracking-wide drop-shadow-md select-none animate-fadeInUp delay-100">
            LogicWay
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 animate-fadeInUp delay-150">
              Sistemi Tre s.r.l.
            </h3>
            <div className="space-y-2 text-gray-600">
              {[
                {
                  icon: MapPin,
                  lines: ["C.so Canale, 52", "12051 Alba (CN) Italy"],
                  href: null,
                },
                {
                  icon: Phone,
                  lines: ["+39 0173444111"],
                  href: null,
                },
                {
                  icon: Mail,
                  lines: ["info@sistemire.it"],
                  href: "mailto:info@sistemire.it",
                },
                {
                  icon: Globe,
                  lines: ["www.sistemire.it"],
                  href: "http://www.sistemire.it",
                  external: true,
                },
              ].map(({ icon: Icon, lines, href, external }, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2 animate-fadeInUp"
                  style={{ animationDelay: `${200 + i * 150}ms` }}
                >
                  <Icon className="h-5 w-5 text-yellow-400 transform transition-transform duration-300 hover:scale-110" />
                  <div className="text-sm text-gray-700">
                    {href ? (
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="hover:text-yellow-400 transition-colors duration-300"
                      >
                        {lines.map((line, idx) => (
                          <span key={idx}>
                            {line}
                            {idx !== lines.length - 1 && <br />}
                          </span>
                        ))}
                      </a>
                    ) : (
                      lines.map((line, idx) => <div key={idx}>{line}</div>)
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation-name: fadeInUp;
          animation-duration: 0.6s;
          animation-fill-mode: forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
