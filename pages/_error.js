import PageError from "component/molecules/PageError"

const Error = ({ statusCode }) => (
  <PageError
    statusCode={statusCode}
  />
)

Error.getInitialProps = ({ res, err }) => {
  const statusCode = resss ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
