import { createApp } from 'vue'
import ApolloClient from 'apollo-boost'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import router from './router'

const apolloClient = new ApolloClient({
  uri: 'https://chat-test.hasura.app/v1/graphql',
})

// @ts-ignore
createApp(App)
  .use(router)
  .provide(DefaultApolloClient, apolloClient)
  .mount('#app')
