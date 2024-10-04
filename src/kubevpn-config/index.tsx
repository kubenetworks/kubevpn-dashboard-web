import { Api } from "@/api";
import { Button, Message } from "@arco-design/web-react";
import { Editor } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";

export default function KubevpnConfig() {
  const [config, setConfig] = useState<string>();
  const [changed, setChanged] = useState(false);
  const initVal = useRef("");

  const fetchData = async () => {
    const result = await Api.GetKubevpnConfig();

    const localConfig = result.data || "";

    setConfig(localConfig);
    initVal.current = result.data;
    setChanged(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="font-medium text-lg pb-4">
        <span>Kubevpn Config</span>

        {changed && (
          <>
            <span className="px-2">-</span>
            <span className="pr-2 text-gray-400">Changed</span>
            <Button
              size="small"
              type="primary"
              onClick={async () => {
                if (!config) return;

                await Api.UpdateKubevpnConfig(config);

                Message.success("Kubevpn Config Saved!");
                fetchData();
              }}
            >
              Save
            </Button>
          </>
        )}
      </div>

      {config !== undefined && (
        <Editor
          height="calc(100vh - 120px)"
          language="yaml"
          value={config}
          onChange={(value) => {
            setConfig(value || "");

            if (value === initVal.current) {
              setChanged(false);
            } else {
              setChanged(true);
            }
          }}
        />
      )}
    </>
  );
}
