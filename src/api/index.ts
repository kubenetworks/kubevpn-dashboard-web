import axios from "axios";

const dashboardAxios = axios.create({
  baseURL: "/api/dashboard",
  method: "POST",
});

export class Api {
  static GetKubevpnConfig() {
    return dashboardAxios({ params: { Action: "GetKubevpnConfig" } });
  }
  static UpdateKubevpnConfig(content: string) {
    return dashboardAxios({
      params: { Action: "UpdateKubevpnConfig" },
      headers: { "Content-Type": "text/plain" },
      data: content,
    });
  }
}
