
export default function ErrorFallback({ error, resetErrorBoundary }: any) {
    const userError = error.message.substring(
        error.message.indexOf("(") + 1,
        error.message.lastIndexOf(")")
    );

    return (
        <div role="alert" className="error-boundry">
            <img
                width="200px"

                src="https://static.xx.fbcdn.net/rsrc.php/y7/r/s_LXY1yMsCT.svg?_nc_eui2=AeHIlTdQ3RpYW6yZ8yVVBHQbEvoiLXyhshMS-iItfKGyE9EBqtyVjhlosVdgnB1LtII9pVtuu74MWo47QQ40gkh2"
                alt="not-found"
            />
            <h3>Something went wrong:</h3>
            <h4>{userError}</h4>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}
