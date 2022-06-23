import React from "react"
import { useParams, useSearchParams } from "react-router-dom"

const withHOC = (Component) => {
  const WithHOC = (props) => {
    const params = useParams()
    const [searchParams, setSearcParams] = useSearchParams()
    return (
      <Component
        params={params}
        searchParams={searchParams}
        setSearcParams={setSearcParams}
        {...props}
      />
    )
  }
  return WithHOC
}

export default withHOC