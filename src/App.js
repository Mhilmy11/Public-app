import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Component/Card';
import Container from './Component/Container';
import Header from './Component/Header';
import ModalDetail from './Component/ModalDetail';
import ModalFavorite from './Component/ModalFavorite';
import ViewList from './Component/ViewList';

export default function App() {
  const [api, setIsApi] = useState([])
  const [init, setInit] = useState([])
  const [openModal, setIsOpenModal] = useState(false)
  const [item, setIsItem] = useState(null)
  const [search, setIsSearch] = useState("")
  const [list, setIsList] = useState(false)
  const [modalFavorite, setModalFavorite] = useState(false)
  const [favoriteButton, setFavoriteButton] = useState(false)
  const [favoriteFromLS, setFavoriteFromLS] = useState(GetFavFromLS())

  useEffect(() => {

    const checkLocalData = localStorage.comicManganya

    if (checkLocalData) {
      setIsApi(JSON.parse(checkLocalData))
    } else {
      axios.get("https://raw.githubusercontent.com/Mhilmy11/api/main/manganya.json")
        .then(res => {
          setIsApi(res.data.data)
          setInit(res.data.data)
          localStorage.setItem('comicManganya', JSON.stringify(res.data.data))
        })
    }
  }, [])

  function GetFavFromLS() {
    const fav = localStorage.getItem('favoriteComic')

    if (fav) {
      return JSON.parse(localStorage.getItem('favoriteComic'))
    } else {
      return []
    }
  }

  function FavComic() {
    if (localStorage.getItem('favoriteComic')) {
      const getFav = JSON.parse(localStorage.getItem('favoriteComic'))
      localStorage.setItem('favoriteComic', JSON.stringify([...getFav, item]))
    } else {
      localStorage.setItem('favoriteComic', JSON.stringify([item]))
    }
    setFavoriteFromLS(JSON.parse(localStorage.getItem('')))
  }

  function SetItem(item) {
    setIsOpenModal(true)
    setIsItem(item)
  }

  function Search(search) {
    setIsApi(init.filter((name) => name.title.toLowerCase().includes(search)))
  }

  return (
    <>
      <ModalFavorite
        setFavorite={setModalFavorite}
        favorite={modalFavorite}
        favoriteFromLS={favoriteFromLS}
      />

      <ModalDetail
        open={openModal}
        item={item}
        onClose={setIsOpenModal}
        favButton={setFavoriteButton}
        favorite={favoriteButton}
        FavComic={FavComic}
      />

      <Header
        Search={Search}
        search={search}
        setSearch={setIsSearch}
        onOpen={setModalFavorite}
      />

      <Container>
        <ViewList
          ListView={setIsList}
          list={list}
        />

        <div className={list === true ? "grid grid-cols-3 gap-4" : "grid gap-y-4 text-lg"}>
          {api.map((item, i) => (
            <Card
              key={i}
              api={item}
              onOpen={() => SetItem(item)}
            />
          ))}
        </div>
      </Container>
    </>
  );
}