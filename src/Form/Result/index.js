

export const Result = ({ result }) => (
    <p>
        {result !== undefined && (
            <>
                <strong>
                    {result.targetAmount.toFixed(2)}{result.currency}
                </strong>
            </>
        )}
    </p>
);

