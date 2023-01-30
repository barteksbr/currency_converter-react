

export const Result = ({ result }) => (
    <p className="result">
        {result !== undefined && (
            <>
                <strong>
                    {result.targetAmount.toFixed(2)}{result.currency}
                </strong>
            </>
        )}
    </p>
);

