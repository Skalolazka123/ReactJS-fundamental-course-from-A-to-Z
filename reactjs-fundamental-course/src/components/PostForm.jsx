import { useRef, useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'
const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' })
    //данные из неуправляемого инпута
    // const bodyInputRef = useRef()

    const addNewPost = (e) => {
        e.preventDefault()
        //создаем новый массив на основе posts и в конец добавляем newPost
        const newPost = {
            ...post,
            id: Date.now(),
        }
        create(newPost)
        //очищаем inputs
        setPost({ title: '', body: '' })
    }

    return (
        <form>
            {/*Управляемый компонент */}
            <MyInput
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="Описание поста"
            />
            {/*Неуправляемый компонент */}
            {/* <MyInput
                    ref={bodyInputRef}
                    type="text"
                    placeholder="Описание поста"
                /> */}
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
}

export default PostForm
