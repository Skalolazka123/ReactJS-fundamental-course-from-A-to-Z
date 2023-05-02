import { useEffect, useMemo, useRef, useState } from 'react'
import ClassCounter from '../components/ClassCounter'
import Counter from '../components/Counter'
import PostFilter from '../components/PostFilter'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/loader/Loader'
import MyModal from '../components/UI/modal/MyModal'
import Pagination from '../components/UI/pagination/Pagination'
import PostsData from '../data/PostsData'
import PostsData2 from '../data/PostsData2'
import PostsData3 from '../data/PostsData3'
import PostsData4 from '../data/PostsData4'
import PostService from '../data/PostsService'
import { useFetching } from '../hooks/useFetching'
import { usePosts } from '../hooks/usePost'

import '../styles/App.css'
import { getPageCount, usePagesArray } from '../utils/pages'

function Posts() {
    //2. Стили CSS+Props+списки
    const [posts, setPosts] = useState(PostsData)
    const [posts2, setPosts2] = useState(PostsData2)
    //2. Стили CSS+Props+списки END

    //3. Форма создания поста. Управляемые и неуправляемые компоненты
    //callback для дочернего PostForm
    const [posts3, setPosts3] = useState(PostsData3)
    const createPost = (newPost) => {
        setPosts3([...posts3, newPost])
    }
    //callback для дочернего PostForm
    const removePost = (post) => {
        setPosts3(posts3.filter((p) => p.id !== post.id))
    }

    //3. Форма создания поста. Управляемые и неуправляемые компоненты END

    //4.Сортировка+поиск+фильтрация+модальное окно+анимации+кастомные хуки
    const [posts4, setPosts4] = useState(PostsData4)
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

    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)

    //кастомный хук
    const sortedAndSearchedPosts = usePosts(posts4, filter.sort, filter.query)

    //4.Сортировка+поиск+фильтрация+модальное окно+анимации+кастомные хуки END

    //5. 5. Работа с сервером+useEffect+Loader+useFetchng+pagination
    const [posts5, setPosts5] = useState([])
    const [filter5, setFilter5] = useState({ sort: '', query: '' })
    const [modal5, setModal5] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    //кастомный хук
    const sortedAndSearchedPosts5 = usePosts(posts5, filter5.sort, filter5.query)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts5(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    //отработает при монтировании (mount)
    useEffect(() => {
        fetchPosts(limit, page)
    }, [page])

    const createPost5 = (newPost) => {
        const newPostValArr = Object.values(newPost)
        newPostValArr.pop()
        if (newPostValArr.filter((item) => item.length > 0).length) {
            setPosts5([...posts5, newPost])
            setModal5(false)
        } else {
            setModal5('error')
        }
    }

    const removePost5 = (post) => {
        setPosts5(posts5.filter((p) => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    //5. 5. Работа с сервером+useEffect+Loader+useFetchng+pagination END
    return (
        <div>
            {/* -----------------1------------------- */}
            <h2>1. Функциональный компонент + Классовый компонент</h2>
            <Counter />
            <ClassCounter />

            {/* -----------------2------------------- */}
            <h2>2. Стили CSS+Props+списки</h2>
            <PostList posts={posts} title="Посты про JS" />
            <PostList posts={posts2} title="Посты про Python" />

            {/* -----------------3------------------- */}
            <h2>3. Форма создания поста. Управляемые и неуправляемые компоненты</h2>
            <PostForm create={createPost} />
            <PostList posts={posts3} remove={removePost} title="Посты про JS" />

            {/* -----------------4------------------- */}
            <h2>4. Сортировка+поиск+фильтрация+модальное окно+анимации+кастомные хуки</h2>
            <MyButton onClick={() => setModal(true)}>Создать запись</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost4} />
            </MyModal>

            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList posts={sortedAndSearchedPosts} remove={removePost4} title="Посты про JS" />

            {/* -----------------5------------------- */}
            <h2 id="5">5. Работа с сервером+useEffect+Loader+useFetchng+pagination</h2>
            <MyButton onClick={() => setModal5(true)}>Создать запись</MyButton>
            <MyModal visible={modal5} setVisible={setModal5}>
                <PostForm create={createPost5} />
            </MyModal>

            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter5} setFilter={setFilter5} />
            {postError ? (
                <h3 style={{ marginTop: '20px', textAlign: 'center', color: 'orangered' }}>
                    Произошла ошибка: {postError}{' '}
                </h3>
            ) : isPostsLoading ? (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '50px',
                        marginBottom: '50px',
                    }}
                >
                    <Loader />
                </div>
            ) : (
                <PostList posts={sortedAndSearchedPosts5} remove={removePost5} title="Посты про JS" />
            )}
            <Pagination totalPages={totalPages} page={page} changePage={changePage} />
        </div>
    )
}

export default Posts
