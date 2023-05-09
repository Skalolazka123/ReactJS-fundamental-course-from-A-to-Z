import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/UI/loader/Loader'
import PostService from '../data/PostsService'
import { useFetching } from '../hooks/useFetching'

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            <h2>Вы открыли страницу поста c ID = {params.id}</h2>
            {error ? (
                <h3 style={{ marginTop: '20px', textAlign: 'center', color: 'orangered' }}>
                    Произошла ошибка: {error}{' '}
                </h3>
            ) : isLoading ? (
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
                <div>
                    <h2>
                        {post.id} . {post.title}
                    </h2>
                    <p>{post.body}</p>
                </div>
            )}
            {comError ? (
                <h3 style={{ marginTop: '20px', textAlign: 'center', color: 'orangered' }}>
                    Произошла ошибка: {comError}{' '}
                </h3>
            ) : isComLoading ? (
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
                <div>
                    <h2>Комментарии</h2>
                    {comments.map((comment, index) => (
                        <div
                            style={{ marginTop: '20px', border: '1px solid coral', padding: '10px 20px' }}
                            key={comment.id}
                        >
                            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>{comment.name}</p>
                            <p>email: {comment.email}</p>
                            <p style={{ marginTop: '10px' }}>{comment.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default PostIdPage
