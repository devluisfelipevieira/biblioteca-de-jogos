export default ({id, label, value, setValue, placeholder = ""}) => {
  return(
    <div style={{ display: "flex", gap: "2rem", alignItems: "center"}}>
      <label htmlFor="title">{label}</label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
         />
    </div>
  )
}