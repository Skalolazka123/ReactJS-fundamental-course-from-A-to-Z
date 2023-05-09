import { useEffect, useRef, useState } from 'react'
import PostFilter from '../components/PostFilter'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import MyButton from '../components/UI/button/MyButton'
import Loader from '../components/UI/loader/Loader'
import MyModal from '../components/UI/modal/MyModal'
import Pagination from '../components/UI/pagination/Pagination'
import MySelect from '../components/UI/select/MySelect'
import PostService from '../data/PostsService'
import { useFetching } from '../hooks/useFetching'
import { useObserver } from '../hooks/useObserver'
import { usePosts } from '../hooks/usePost'

import '../styles/App.css'
import { getPageCount } from '../utils/pages'

function Page5() {
    //5. 5. Работа с сервером+useEffect+Loader+useFetchng+pagination
    const [posts5, setPosts5] = useState([])
    const [filter5, setFilter5] = useState({ sort: '', query: '' })
    const [modal5, setModal5] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    //кастомный хук
    const sortedAndSearchedPosts5 = usePosts(posts5, filter5.sort, filter5.query)
    const lastElement = useRef()
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts5([...posts5, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })
    //отработает при монтировании (mount)
    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

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
    return (
        <div>
            <h2 id="5">5. Работа с сервером+useEffect+Loader+useFetchng+pagination</h2>
            <MyButton onClick={() => setModal5(true)}>Создать запись</MyButton>
            <MyModal visible={modal5} setVisible={setModal5}>
                <PostForm create={createPost5} />
            </MyModal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter5} setFilter={setFilter5} />
            <p style={{ margin: '10px 0 5px' }}>Выберите количество элементов на странице:</p>
            <MySelect
                value={limit}
                onChange={(value) => setLimit(value)}
                defaultValue="Количество элементов на странице"
                options={[
                    { value: 5, name: '5' },
                    { value: 10, name: '10' },
                    { value: 25, name: '25' },
                    { value: -1, name: 'Показать все' },
                ]}
            />
            {postError && (
                <h3 style={{ marginTop: '20px', textAlign: 'center', color: 'orangered' }}>
                    Произошла ошибка: {postError}{' '}
                </h3>
            )}{' '}
            <PostList posts={sortedAndSearchedPosts5} remove={removePost5} title="Посты про JS" />
            <div ref={lastElement} style={{ height: 20, background: 'red' }}></div>
            {isPostsLoading && (
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
            )}
            <Pagination totalPages={totalPages} page={page} changePage={changePage} />
        </div>
    )
}

export default Page5
