type RiskValueResponse = {
  latest_risk_value: string;
}

export class AlphaSquared {

  private _apiKey: string;

  constructor(apiKey: string) {
    this._apiKey = apiKey;
  }

  async get(type: "BTC" | "ETH" = "BTC"): Promise<RiskValueResponse["latest_risk_value"]> {
    const key = type === "BTC" ? "" : `_${type}`;
    const response = await fetch(`https://alphasquared.com/wp-json/as/v1/latest-risk-value${key}`, {
      headers: {
        Authorization: this._apiKey
      }
    });

    const json = await response.json() as RiskValueResponse;
    return json.latest_risk_value;
  }
}
