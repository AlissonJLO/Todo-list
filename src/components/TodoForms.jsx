import { useState } from 'react'

const TodoForms = ( {addTodo} ) => {

  const [text, setText] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text || !category) {
      alert('Por favor preencha os campos')
      return
    }
    addTodo(text, category)
    setText('')
    setCategory('')
  }

  return (

    <div className='todo-form'>
      <h2>
        Criar tarefa:
      </h2>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Digite o titulo' value={text}
          onChange={(e) => setText(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value='Por favor selecione uma categoria valida'>Selecione uma categoria</option>
          <option value='Trabalho'>Trabalho</option>
          <option value='Estudos'>Estudos</option>
          <option value='Pessoal'>Pessoal</option>
        </select>
        <button type='submit'>Criar tarefa</button>
      </form>
    </div>
  )
}

export default TodoForms