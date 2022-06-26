import React from "react"
import { useParams, useSearchParams, useLocation, useNavigate } from "react-router-dom"

const withHOC = (Component) => {
  const WithHOC = (props) => {
    const params = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    return (
      <Component
        params={params}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        location={location}
        navigate={navigate}
        {...props}
      />
    )
  }
  return WithHOC
}

export default withHOC