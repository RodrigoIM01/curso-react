import React from 'react'
import ReactDom from 'react-dom'
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { App } from './App'

const client = new ApolloClient({
  url: '#'
})

ReactDom.render(<ApolloProvider client={client}>
  <App />
</ApolloProvider>, document.getElementById('app'))
