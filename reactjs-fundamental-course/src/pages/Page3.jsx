import React, { useState } from 'react'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import PostsData3 from '../data/PostsData3'
//3. Форма создания поста. Управляемые и неуправляемые компоненты
const Page3 = () => {
    //callback для дочернего PostForm
    const [posts3, setPosts3] = useState(PostsData3)
    const createPost = (newPost) => {
        setPosts3([...posts3, newPost])
    }
    //callback для дочернего PostForm
    const removePost = (post) => {
        setPosts3(posts3.filter((p) => p.id !== post.id))
    }
    return (
        <div>
            <h2>3. Форма создания поста. Управляемые и неуправляемые компоненты</h2>
            <PostForm create={createPost} />
            <PostList posts={posts3} remove={removePost} title="Посты про JS" />
        </div>
    )
}

export default Page3
