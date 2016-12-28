import * as React from "react"
import { render } from "react-dom"
import { Routes } from "./MasterRouter"
import { ApolloClient, createNetworkInterface } from "apollo-client"
import { ApolloProvider } from 'react-apollo'
import { get as getCache } from "lscache"

let network_interface = createNetworkInterface({ uri: "/graphql" })

network_interface.use([{
  // Send the authorization token alongside the HTTP request if one is present
  applyMiddleware(req, next) {

    if (!req.options.headers) {
      req.options.headers = {}
    }

    req.options.headers["Authorization"] = getCache("crosscom_token") ? getCache("crosscom_token") : undefined
    
    next()

  }
}])

let graph_client = new ApolloClient({
  networkInterface: network_interface
})

render((
  <ApolloProvider client={graph_client}>
    <Routes />
  </ApolloProvider>
), document.getElementById("render_node"))