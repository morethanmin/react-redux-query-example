import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './modules'
import { CounterProvider } from './contexts/counter'
import { QueryClient, QueryClientProvider } from 'react-query'

const store = createStore(rootReducer)
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <CounterProvider>
        <App />
      </CounterProvider>
    </QueryClientProvider>
  </Provider>
)
