import React from 'react'

const AllUsers = () => {
    return null
}


const AllUsers = () => {
    const [posts, setPosts] = useState<Array<Post>>([])
    const [loading, setLoading] = useState(false)

    // getPosts()

    async function _getUsers() {
        console.log("useEffect");
        const data = await getUsers();
        console.log(data)
        setPosts(data);
    }

    useEffect(() => {
        _getUsers();
    }, [])

    function renderItem(values: user) {
        return (
            <div key={values.id}>
                <userItem {...values} />
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

    if (posts.length === 0) {
        return (
            <section className="hero">
                <div className="hero-body">
                    <p className="title">No Posts</p>
                </div>
            </section>
        )
    }

    return <ul className="post-list">{posts.map(renderItem)}</ul>
}

export default PostsList

export default AllUsers
