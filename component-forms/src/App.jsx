import Form from './form-components/form/Form';
import Button from './form-components/button/Button';
import Checkbox from './form-components/checkbox/Checkbox';
import Input from './form-components/input/Input';
import TextArea from './form-components/textArea/TextArea';
import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text:'',
    judgement: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("El correo no es válido");
      return;
    }

    setError("");
    alert("Info mandada correctamente");
    console.log('Datos enviados:', formData);
    setFormData({
      name:'',
      email:'',
      text:'',
      judgement: false,
    })
  };

  return ( 
    <div className='app-container'>
      <div className='form-container'>
        <h2>Formulario</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            title="Hola"
            label="Nombre Completo"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Escribe tu nombre"
            required
          />

          <Input
            title="Hola"
            label="Correo Electrónico"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
            required
          />

          <TextArea
            title="Hola"
            label="Mensaje"
            name="text"
            id="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="Escribe tu mensaje..."
            required
          />

          <Checkbox
            label="Juro lealtad y morir por la causa"
            name="judgement"
            checked={formData.judgement}
            onChange={handleChange}
          />

          {error && <p style={{ color: 'red', fontWeight: 600 }}>{error}</p>}

          <Button type="submit">Enviar</Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
