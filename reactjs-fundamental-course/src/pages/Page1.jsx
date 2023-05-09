import React from 'react'
import ClassCounter from '../components/ClassCounter'
import Counter from '../components/Counter'

const Page1 = () => {
    return (
        <div>
            <h2>1. Функциональный компонент + Классовый компонент</h2>
            <Counter />
            <ClassCounter />
        </div>
    )
}

export default Page1
