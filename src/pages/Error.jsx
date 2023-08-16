import MainNavigation from "../components/GUI/NavBar";

function ErrorPage(){
    return(
        <>
        <MainNavigation/>
        <main className="catch-all">
            <h1>We can't find you!</h1>
            <p>An error has occurred and we can't find this page!</p>
        </main>
        </>
    )
}

export default ErrorPage;