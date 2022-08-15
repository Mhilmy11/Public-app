import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Component/Card';
import Container from './Component/Container';
import Header from './Component/Header';
import Modal from './Component/Modal';
import ViewList from './Component/ViewList';

export default function App() {
  const [api, setIsApi] = useState([])
  const [init, setInit] = useState([])
  const [openModal, setIsOpenModal] = useState(false)
  const [item, setIsItem] = useState(null)
  const [search, setIsSearch] = useState("")
  const [grid, setIsGrid] = useState(false)

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/Mhilmy11/api/main/manganya.json")
    .then(res => {
      setIsApi(res.data.data)
      setInit(res.data.data)
    })
  }, [])

  function SetItem(item){
    setIsOpenModal(true)
    setIsItem(item)
  }

  function Search(search){
    setIsApi(init.filter((name) => name.title.toLowerCase().includes(search)))
  }

  return (
    <>
      <Modal open={openModal} item={item} onClose={setIsOpenModal}/>
      <Header
        Search={Search}
        search={search}
        setSearch={setIsSearch}  
      />
      <Container>
        <ViewList />
        <div className=' grid grid-cols-3 gap-4'>
          {api.map((item) => (
            <Card api={item} onOpen={() => SetItem(item)} />
            ))}
        </div>
        </Container>
    </>
  );
}