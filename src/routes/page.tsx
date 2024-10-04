import "@arco-design/web-react/dist/css/arco.css";
import "./tailwind.css";

import KubevpnConfig from "@/kubevpn-config";
import { IconSettings } from "@arco-design/web-react/icon";

import { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";

loader.config({ monaco });

export default function App() {
  return (
    <div className="flex" style={{ height: "100vh" }}>
      <nav
        style={{ width: 320, backgroundColor: "#6674bb" }}
        className="text-white"
      >
        <div className="font-mono text-center py-10 text-lg">
          Kubevpn Dashboard
        </div>

        <div className="p-2">
          <div
            className="px-3 py-2 rounded-lg text-base cursor-pointer"
            style={{ backgroundColor: "#8592d6" }}
          >
            <IconSettings className="mr-2" />
            <span>Settings</span>
          </div>
        </div>
      </nav>

      <main
        className="min-w-0 flex-1 p-4 overflow-auto"
        style={{ backgroundColor: "#e5eaff" }}
      >
        <div
          className="bg-white px-5 py-4 rounded-lg"
          style={{ minHeight: "calc(100vh - 32px)" }}
        >
          <KubevpnConfig />
        </div>
      </main>
    </div>
  );
}
