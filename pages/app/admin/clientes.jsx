import Private from 'component/atoms/Private'
import { connect } from 'react-redux'
import { ajax } from '../../../component/hook/Ajax'

const Clients = ({ clients, isLogged, typeUser }) => {


  if (!isLogged || typeUser != 1) return <Private />
  if (clients.mensaje) return (
    <div className="mw-grid">
      <div className="mw-grid separador"></div>
      <div className="alert alert-yellow">
        <span>No hay clientes registrados</span>
      </div>
    </div>
  )

  return (
    <>
      <div className="mw-grid separador"></div>
      <div className="mw-grid">
        <h1 className="t2">Clientes</h1>
        <ul className="ul-client">
          {
            clients.map((c, i) =>
              <li key={i} className="li-client">
                <p> {c.name || "Nombre indefinido"} </p>
                {
                  c.phone === ""
                    ? "Teléfono indefinido"
                    : <p> <a href={`tel:${c.phone}`}>{c.phone}</a> </p>
                }
                <p> {c.email} </p>
              </li>
            )
          }
        </ul>
      </div>
      <div className="mw-grid separador"></div>
    </>
  )
}

export async function getServerSideProps() {
  const resp = await ajax(`${process.env.API}/clientes`)
  return { props: { clients: resp.data } }
}

const mapStateToProps = state => ({
  isLogged: state.userReducer.logged,
  typeUser: state.userReducer.dataUser.role
})

export default connect(mapStateToProps)(Clients)
