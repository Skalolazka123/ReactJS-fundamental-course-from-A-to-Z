import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PostItem from './PostItem'

const PostList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return <h3 style={{ textAlign: 'center' }}>Посты не найдены</h3>
    }

    return (
        <>
            <h3 style={{ textAlign: 'center' }}>{title}</h3>
            <TransitionGroup>
                {posts.map((post, index) => (
                    <CSSTransition key={post.id} timeout={500} classNames="post">
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </>
    )
}

export default PostList
