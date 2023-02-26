import { useMemo, useRef, useState } from 'react'
import ClassCounter from './components/ClassCounter'
import Counter from './components/Counter'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyModal from './components/UI/modal/MyModal'

import './styles/App.css'

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'JavaScript',
            body: 'Description1',
            btnNotActive: true,
        },
        {
            id: 2,
            title: 'JavaScript',
            body: 'Description2',
            btnNotActive: true,
        },
        {
            id: 3,
            title: 'JavaScript',
            body: 'Description3',
            btnNotActive: true,
        },
        {
            id: 4,
            title: 'JavaScript',
            body: 'Description4',
            btnNotActive: true,
        },
    ])
    const [posts2, setPosts2] = useState([
        { id: 1, title: 'Python', body: 'Description1', btnNotActive: true },
        { id: 2, title: 'Python', body: 'Description2', btnNotActive: true },
        { id: 3, title: 'Python', body: 'Description3', btnNotActive: true },
        { id: 4, title: 'Python', body: 'Description4', btnNotActive: true },
    ])
    const [posts3, setPosts3] = useState([
        {
            id: 1,
            title: 'JavaScript',
            body: 'Description1',
            btnNotActive: false,
        },
        {
            id: 2,
            title: 'JavaScript',
            body: 'Description2',
            btnNotActive: false,
        },
        {
            id: 3,
            title: 'JavaScript',
            body: 'Description3',
            btnNotActive: false,
        },
        {
            id: 4,
            title: 'JavaScript',
            body: 'Description4',
            btnNotActive: false,
        },
    ])
    const [posts4, setPosts4] = useState([
        {
            id: 1,
            title: 'JavaScript1',
            body: 'Description1',
            btnNotActive: false,
        },
        {
            id: 2,
            title: 'JavaScript4',
            body: 'Description3',
            btnNotActive: false,
        },
        {
            id: 3,
            title: 'JavaScript3',
            body: 'Description4',
            btnNotActive: false,
        },
        {
            id: 4,
            title: 'JavaScript2',
            body: 'Description2',
            btnNotActive: false,
        },
    ])

    //4. Форма создания поста. Управляемые и неуправляемые компоненты
    //callback для дочернего PostForm
    const createPost = (newPost) => {
        setPosts3([...posts3, newPost])
    }

    const removePost = (post) => {
        setPosts3(posts3.filter((p) => p.id !== post.id))
    }
    const createPost4 = (newPost) => {
        const newPostValArr = Object.values(newPost)
        newPostValArr.pop()
        if (newPostValArr.filter((item) => item.length > 0).length) {
            setPosts4([...posts4, newPost])
            setModal(false)
        } else {
            setModal('error')
        }
    }

    const removePost4 = (post) => {
        setPosts4(posts4.filter((p) => p.id !== post.id))
    }
    //4. Форма создания поста. Управляемые и неуправляемые компоненты END

    //5.Сортировка+поиск+фильтрация+модальное окно

    const [filter, setFilter] = useState({ sort: '', query: '' })

    const sortedPosts4 = useMemo(() => {
        console.log('getSortedPosts отработала')
        if (filter.sort) {
            return [...posts4].sort((a, b) =>
                a[filter.sort].localeCompare(b[filter.sort])
            )
        }
        return posts4
    }, [filter.sort, posts4])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts4.filter((post) =>
            post.title.toLowerCase().includes(filter.query)
        )
    }, [filter.query, sortedPosts4])

    const [modal, setModal] = useState(false)
    //5.Сортировка+поиск+фильтрация+модальное окно END

    return (
        <div className="App">
            <h2>1. Функциональный компонент</h2>
            <Counter />

            <h2>2. Классовый компонент</h2>
            <ClassCounter />

            <h2>3. Стили CSS+Props+списки</h2>
            <PostList posts={posts} title="Посты про JS" />
            <PostList posts={posts2} title="Посты про Python" />

            <h2>
                4. Форма создания поста. Управляемые и неуправляемые компоненты
            </h2>
            <PostForm create={createPost} />
            <PostList posts={posts3} remove={removePost} title="Посты про JS" />

            <h2>5. Сортировка+поиск+фильтрация+модальное окно</h2>
            <MyButton onClick={() => setModal(true)}>Создать запись</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost4} />
            </MyModal>

            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList
                posts={sortedAndSearchedPosts}
                remove={removePost4}
                title="Посты про JS"
            />
        </div>
    )
}

export default App
