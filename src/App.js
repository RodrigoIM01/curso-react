import React from 'react'
import { ListOfCategories } from './Components/ListOfCategories'
import { GlobalStyle } from './Styles/GlobalStyles'
import { ListOfPhotoCard } from './Components/ListOfPhotoCard'
import { Logo } from './Components/Logo'

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCard />
  </div>
)
