import React from 'react'
import { storiesOf } from '@storybook/react'
import { Schedule } from '../src/index'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

storiesOf('Schedule', module)
  .add('with staff', () => (
    <Schedule businessHours={{ from: '08:00', to: '20:00' }} staff={[
      { id: 1,
        name: 'Luis Miguel Castrillon',
        avatar: 'http://i.pravatar.cc/50?img=6',
        dates: [
          { duration: getRandomArbitrary(0.5, 2), position: 0, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 3, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 6, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 10, customer: 'Juan Osorio' }
        ] },
      { id: 12,
        name: 'Lina Rivera',
        avatar: 'http://i.pravatar.cc/50?img=32',
        dates: [
          { duration: getRandomArbitrary(0.5, 2), position: 1, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 4, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 8, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 10, customer: 'Juan Osorio' }
        ] },
      { id: 13,
        name: 'Carlos Gonzalez',
        avatar: 'http://i.pravatar.cc/50?img=15',
        dates: [
          { duration: getRandomArbitrary(0.5, 2), position: 2, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 4, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 6, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 11, customer: 'Juan Osorio' }
        ] },
      { id: 14,
        name: 'Carlos Giraldo',
        avatar: 'http://i.pravatar.cc/50?img=16',
        dates: [
          { duration: getRandomArbitrary(0.5, 2), position: 0, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 4, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 7, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 9, customer: 'Juan Osorio' }
        ] },
      { id: 15,
        name: 'Consuelo Para',
        avatar: 'http://i.pravatar.cc/50?img=17',
        dates: [
          { duration: getRandomArbitrary(0.5, 2), position: 0, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 3, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 6, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 10, customer: 'Juan Osorio' }
        ] },
      { id: 16,
        name: 'Liseth',
        avatar: 'http://i.pravatar.cc/50?img=18',
        dates: [
          { duration: getRandomArbitrary(0.5, 2), position: 3, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 8, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 11, customer: 'Juan Osorio' }
        ] },
      { id: 17,
        name: 'Gloria Helena Ocampo Asprilla',
        avatar: 'http://i.pravatar.cc/50?img=19',
        dates: [
          { duration: getRandomArbitrary(0.5, 2), position: 0, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 2, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 5, customer: 'Juan Osorio' },
        ] },
      { id: 18,
        name: 'Wilson Castrillon',
        avatar: 'http://i.pravatar.cc/50?img=20',
        dates: [
          { duration: getRandomArbitrary(0.5, 2), position: 0, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 3, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 6, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 10, customer: 'Juan Osorio' }
        ] },
      { id: 19,
        name: 'Juan Bermudez',
        avatar: 'http://i.pravatar.cc/50?img=21',
        dates: [
          { duration: getRandomArbitrary(0.5, 2), position: 0, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 3, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 6, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 10, customer: 'Juan Osorio' }
        ] },
      { id: 10,
        name: 'Agustin Castrillon Rivera',
        avatar: 'http://i.pravatar.cc/50?img=22',
        dates: [
          { duration: getRandomArbitrary(0.5, 2), position: 0, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 3, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 6, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 10, customer: 'Juan Osorio' }
        ] },
      { id: 111,
        name: 'Oscar Jaramillo',
        avatar: 'http://i.pravatar.cc/50?img=23',
        dates: [
          { duration: getRandomArbitrary(0.5, 2), position: 0, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 3, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 6, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 10, customer: 'Juan Osorio' }
        ] },
      { id: 122,
        name: 'Lina Lopez',
        avatar: 'http://i.pravatar.cc/50?img=24',
        dates: [
          { duration: getRandomArbitrary(0.5, 2), position: 0, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 3, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 6, customer: 'Juan Osorio' },
          { duration: getRandomArbitrary(0.5, 2), position: 10, customer: 'Juan Osorio' }
        ] }
    ]} />
  ))
