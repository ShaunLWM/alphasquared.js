import axios, { type AxiosResponse } from "axios";

type RiskValueResponse = {
  latest_risk_value: string;
}

export class AlphaSquared {

  constructor(apiKey: string) {
    axios.defaults.headers.common['Authorization'] = apiKey;
  }

  async get(type: "BTC" | "ETH" = "BTC"): Promise<RiskValueResponse["latest_risk_value"]> {
    const key = type === "BTC" ? "" : `_${type}`;
    const response: AxiosResponse<RiskValueResponse> = await axios.get(`https://alphasquared.com/wp-json/as/v1/latest-risk-value${key}`);
    return response.data?.latest_risk_value;
  }
}
