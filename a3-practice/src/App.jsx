import { Admin } from 'react-admin'
import dataProvider from '/workspaces/A3-Practice-/a3-practice/src/dataProvider.jsx'

export const App=() => (
  <Admin dataProvider={dataProvider}>
    <Resource name= ""/>
  </Admin>
)
