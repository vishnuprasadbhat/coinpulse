import DataTables from "../DataTables";

const trendingSkeletonRows = Array.from({ length: 6 }, (_, index) => index);

const trendingSkeletonColumns: DataTableColumn<number>[] = [
  {
    header: "Name",
    cellClassName: "name-cell",
    cell: () => (
      <div className="name-link">
        <div className="skeleton name-image" />
        <div className="skeleton name-line" />
      </div>
    ),
  },
  {
    header: "24h Change",
    cellClassName: "change-cell",
    cell: () => (
      <div className="price-change">
        <div className="skeleton change-icon" />
        <div className="skeleton change-line" />
      </div>
    ),
  },
  {
    header: "Price",
    cellClassName: "price-cell",
    cell: () => <div className="skeleton price-line" />,
  },
];

export const CoinOverviewFallback = () => (
  <div id="coin-overview-fallback">
    <div className="header pt-2">
      <div className="skeleton header-image" />
      <div className="info">
        <div className="skeleton header-line-sm" />
        <div className="skeleton header-line-lg" />
      </div>
    </div>
    <div className="chart">
      <div className="skeleton chart-skeleton" />
    </div>
  </div>
);

export const TrendingCoinsFallback = () => (
  <div id="trending-coins-fallback">
    <h4>Trading Coins</h4>
    <DataTables
      data={trendingSkeletonRows}
      columns={trendingSkeletonColumns}
      rowKey={(index) => index}
      tableClassName="trending-coins-table"
      headerCellClassName="py-3!"
      bodyCellClassName="py-2!"
    />
  </div>
);
