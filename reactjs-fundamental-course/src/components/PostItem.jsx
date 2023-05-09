import { useNavigate } from 'react-router-dom'
import MyButton from './UI/button/MyButton'

const PostItem = (props) => {
    const navigate = useNavigate()
    return (
        <div className="post">
            <div className="post__content">
                <strong>
                    {props.number > 10 ? props.number : props.post.id}. {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>Открыть</MyButton>
                <MyButton
                    onClick={() => props.remove(props.post)}
                    disabled={props.post.btnNotActive ? props.post.btnNotActive : false}
                >
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

export default PostItem
