import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({ filter, setFilter }) => {
    return (
        <>
            <MyInput
                value={filter.query}
                onChange={
                    (e) => setFilter({ ...filter, query: e.target.value }) //двустороннее связывание
                }
                placeholder="Поиск..."
            />
            <MySelect
                value={filter.sort}
                onChange={(selectedSort) =>
                    setFilter({ ...filter, sort: selectedSort })
                }
                defaultValue="Сортировка по"
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' },
                ]}
            />
        </>
    )
}

export default PostFilter
