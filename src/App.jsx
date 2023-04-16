import { v4 as uuidv4 } from 'uuid';

import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: uuidv4(),
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/46360769?v=4',
      name: 'Rafael Santana',
      role: 'Front-end Developer'
    },
    content: [
      { id: uuidv4(), content: [{ id: uuidv4(), type: 'text', content: 'Fala galeraa 👋'}]},
      { id: uuidv4(), content: [{ id: uuidv4(), type: 'text', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'}]},
      { id: uuidv4(), content: [{ id: uuidv4(), type: 'link', content: 'jane.design/doctorcare' }]},
      { id: uuidv4(), content: [
        { id: uuidv4(), type: 'link', content: '#novoprojeto' },
        { id: uuidv4(), type: 'link', content: '#nlw' },
        { id: uuidv4(), type: 'link', content: '#rocketseat' },
      ]},
    ],
    publishedAt: new Date('2023-04-13 20:57:38')
  },
  {
    id: uuidv4(),
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { id: uuidv4(), content: [{ id: uuidv4(), type: 'text', content: 'Fala galeraa 👋'}]},
      { id: uuidv4(), content: [{ id: uuidv4(), type: 'text', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'}]},
      { id: uuidv4(), content: [{ id: uuidv4(), type: 'link', content: 'jane.design/doctorcare' }]},
      { id: uuidv4(), content: [{ id: uuidv4(), type: 'link', content: '#rocketseat' }]},
    ],
    publishedAt: new Date('2023-04-16 10:50:23')
  }
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}