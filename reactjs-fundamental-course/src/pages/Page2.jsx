import React, { useState } from 'react'
import PostList from '../components/PostList'
import PostsData from '../data/PostsData'
import PostsData2 from '../data/PostsData2'

const Page2 = () => {
    //2. Стили CSS+Props+списки
    const [posts, setPosts] = useState(PostsData)
    const [posts2, setPosts2] = useState(PostsData2)
    return (
        <div>
            <h2>2. Стили CSS+Props+списки</h2>
            <PostList posts={posts} title="Посты про JS" />
            <PostList posts={posts2} title="Посты про Python" />
        </div>
    )
}

export default Page2
