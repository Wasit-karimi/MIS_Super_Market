function ProfitPreview({ price, costPrice }) {
    const sellingPrice = Number(price) || 0;
    const cost = Number(costPrice) || 0;

    const profit = sellingPrice - cost;

    const margin =
        sellingPrice > 0 ? (profit / sellingPrice) * 100 : 0;

    return (
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 hover:shadow-xl hover:shadow-blue-100  transition-all duration-300">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xs font-medium text-blue-700">
                        Estimated profit per item
                    </p>

                    <p className="mt-1 text-xl font-bold text-primary">
                        ${profit.toFixed(2)}
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-xs font-medium text-blue-700">
                        Profit margin
                    </p>

                    <p className="mt-1 text-xl font-bold text-primary">
                        {margin.toFixed(1)}%
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProfitPreview;