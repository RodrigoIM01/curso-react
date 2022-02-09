import React from 'react'
import { PhotoCard } from '../PhotoCard'

import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withPhotos = graphql(gql`
query getphotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    likes
  }
}
`)

const ListOfPhotoCardComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

export const ListOfPhotoCard = withPhotos(ListOfPhotoCardComponent)
