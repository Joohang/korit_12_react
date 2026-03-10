import './App.css'
import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from './api'
function App() {
  const { isLoading, data: posts} = useQuery({
    queryKey:["posts"],
    queryFn: fetchPosts
  })

  return (
    <>
      {
        isLoading 
        ? '로딩중 ... ㅗㅗ'
        : posts.map((post, index) => <div>{`${post.id} : ${post.title}`}</div>)
      }
    </>
  )
}

export default App
