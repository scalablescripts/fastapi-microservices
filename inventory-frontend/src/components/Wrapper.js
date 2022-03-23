export const Wrapper = props => {
    return <>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>

            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" href="#">Sign out</a>
                </div>
            </div>
        </header>

        <div className="container-fluid">
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="position-sticky pt-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Products
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    {props.children}
                </main>
            </div>
        </div>
    </>
}