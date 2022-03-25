export const Wrapper = props => {
    return <>


        <div className="container-fluid">
            <div className="row">
             <div className="col">
                <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>

                    <div className="navbar-nav">
                        <div className="nav-item text-nowrap">
                            <a className="nav-link px-3" href="#">Sign out</a>
                        </div>
                    </div>
                </header>
             </div>
            </div>
            <div className="row">
              <div className="col-2">
                    <div className="position-sticky pt-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Products
                                </a>
                            </li>
                        </ul>
                    </div>

              </div>
              <div className="col-8">
                {props.children}

              </div>
              <div className="col-2">

              </div>
            </div>
        </div>



    </>
}
