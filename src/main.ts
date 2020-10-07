import { createApp } from 'vue'
import ApolloClient from 'apollo-boost'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import router from './router'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8081/v1/graphql',
})

// @ts-ignore
createApp(App)
  .use(router)
  .provide(DefaultApolloClient, apolloClient)
  .mount('#app')
