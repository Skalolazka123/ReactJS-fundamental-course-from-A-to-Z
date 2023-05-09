import React, { useState } from 'react'
import PostFilter from '../components/PostFilter'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import MyButton from '../components/UI/button/MyButton'
import MyModal from '../components/UI/modal/MyModal'
import PostsData4 from '../data/PostsData4'
import { usePosts } from '../hooks/usePost'

const Page4 = () => {
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
    return (
        <div>
            <h2>4. Сортировка+поиск+фильтрация+модальное окно+анимации+кастомные хуки</h2>
            <MyButton onClick={() => setModal(true)}>Создать запись</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost4} />
            </MyModal>

            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList posts={sortedAndSearchedPosts} remove={removePost4} title="Посты про JS" />
        </div>
    )
}

export default Page4
