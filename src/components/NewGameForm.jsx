import { useState } from "react"
import TextInput from "./TextInput"

export default ({ addGame }) => {

  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

  const handleSubmit = (ev) => {
    ev.preventDefault()
    addGame({title, cover})
    setTitle("")
    setCover("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput id={title} label={"Título:"} value={title} setValue={setTitle}/>
      <TextInput id={cover} label={"Capa:"} value={cover} setValue={setCover} placeholder="link da imagem do jogo"/>
      <button type="submit">Adicionar a Biblioteca</button>
    </form>
  )
}