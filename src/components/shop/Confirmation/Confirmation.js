export default ({ products, total, action }) => {

    // const productsFake = [
    //     { name: "P. 1" },
    //     { name: "P. 2" },
    // ]

    const renderProducts = products.map( (p, i) => (
        <li key={ i }>
            { p.name }
        </li>
    ))

    return (
        <div>
            <h1>
                Confirmar orden
            </h1>
            <section>
                <h2>
                    Tus productos:
                </h2>
                
                <ul>
                    { renderProducts }
                </ul>

                <footer>
                    <strong>
                        Total: ${ total }
                    </strong>
                </footer>

            </section>
            <button onClick={ action }>
                Confirmación
            </button>
        </div>
    )

}