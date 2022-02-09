import React, { Fragment, useEffect, useState } from 'react'
import { Categorys } from '../Categorys'
import { List, Item } from './style'
// import { categories as mockCategories } from '../../../api/db.json'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-app-brom0pzuw-rodrigoim01.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

 

  useEffect(function () {
    const onScroll = e => {
      const newSwowFixed = window.scrollY > 200
      showFixed !== newSwowFixed && setShowFixed(newSwowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading 
          ? <Item key='loading'><Categorys /></Item>
          : categories.map(category => <Item key={category.id}><Categorys {...category} /></Item>)
    }
    </List>
  )

  return ( 
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>     
  )
}
