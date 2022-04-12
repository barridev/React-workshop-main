import React, { useEffect, useState } from 'react'
import { getPosts } from '../api/post'
import { Post } from '../api/types'
import PostItem from './PostItem'
import { getAllUser, getUser } from '../api/user'

type FormEvent =
    | React.ChangeEvent<HTMLTextAreaElement>
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLSelectElement>

type FormData = { name: string; value: string | number | undefined }

const formReducer = (state: Post | PostContent, event: FormData) => {
    return {
        ...state,
        [event.name]: event.value,
    }
}

const AllUsers = () => {
    const [users, setUsers] = useState<Array<Post>>([])
    const [loading, setLoading] = useState(false)

    // getUsers()

    async function _getUsers() {
        console.log("useEffect");
        const data = await _getUsers();
        console.log(data)
        setUsers(data);
    }

    useEffect(() => {
        _getUsers();
    }, [])

    function renderItem(values: User) {
        return (
            <div key={values.id}>
                <UserItem {...values} />
            </div>
        )
    }

    if (loading) {
        return (
            <section className="hero">
                <div className="hero-body">
                    <p className="title">Loading ...</p>
                </div>
            </section>
        )
    }

    if (users.length === 0) {
        return (
            <section className="hero">
                <div className="hero-body">
                    <p className="title">No Posts</p>
                </div>
            </section>
        )
    }

    return <ul className="user-list">{users.map(renderItem)}</ul>
}

export default AllUsers