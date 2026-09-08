import { fetcher } from "@/lib/coingecko.actions";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { CoinOverviewFallback } from "./fallback";
import CandlestickCharts from "../CandlestickCharts";

const CoinOverview = async () => {
  let coin: CoinDetailsData;
  let coinOHLCData: OHLCData[];

  try {
    const [coinData, ohlcData] = await Promise.all([
      fetcher<CoinDetailsData>("/coins/bitcoin", {
        dex_pair_format: "symbol",
      }),
      fetcher<OHLCData[]>("/coins/bitcoin/ohlc", {
        vs_currency: "usd",
        days: 1,
        precison: "full",
        // interval: "daily",
      }),
    ]);
    coin = coinData;
    coinOHLCData = ohlcData;
  } catch (error) {
    console.error("Error fetching coin overview", error);
    return <CoinOverviewFallback />;
  }

  return (
    <div id="coin-overview">
      <CandlestickCharts data={coinOHLCData} coinId="bitcoin">
        <div className="header pt-2">
          <Image
            src={coin.image.large}
            alt={coin.name}
            width={56}
            height={56}
          />
          <div className="info">
            <p>
              {coin.name} / {coin.symbol}
            </p>
            <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
          </div>
        </div>
      </CandlestickCharts>
    </div>
  );
};

export default CoinOverview;
