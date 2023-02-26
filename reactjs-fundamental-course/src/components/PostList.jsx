import PostItem from './PostItem'

const PostList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return <h3 style={{ textAlign: 'center' }}>Посты не найдены</h3>
    }

    return (
        <>
            <h3 style={{ textAlign: 'center' }}>{title}</h3>
            {posts.map((post, index) => (
                <PostItem
                    remove={remove}
                    number={index + 1}
                    post={post}
                    key={post.id}
                />
            ))}
        </>
    )
}

export default PostList
