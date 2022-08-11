import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Component/Card';
import Modal from './Component/Modal';

export default function App() {
  const [api, setIsApi] = useState([])
  const [openModal, setIsOpenModal] = useState(false)
  const [item, setIsItem] = useState(null)
  const [search, setIsSearch] = useState("")

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/Mhilmy11/api/main/manganya.json")
    .then(res => {
      setIsApi(res.data.data)
    })
  }, [])

  function SetItem(item){
    setIsOpenModal(true)
    setIsItem(item)

  }

  return (
    <>
      <Modal open={openModal} item={item} onClose={() => setIsOpenModal(false)}/>
      <input placeholder='Search Here...' type="text" onChange={(e) => setIsSearch(e.target.value)} />
      {api.map((item) => (
        <Card api={item} onOpen={() => SetItem(item)} />
      ))}
    </>
  );
}