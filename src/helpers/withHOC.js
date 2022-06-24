import React from "react"
import { useParams, useSearchParams, useNavigate } from "react-router-dom"

const withHOC = (Component) => {
  const WithHOC = (props) => {
    const params = useParams()
    const [searchParams, setSearcParams] = useSearchParams()
    const navigate = useNavigate();
    return (
      <Component
        params={params}
        searchParams={searchParams}
        setSearcParams={setSearcParams}
        navigate={navigate}
        {...props}
      />
    )
  }
  return WithHOC
}

export default withHOC