'use client'

import { TextField, Button, MenuItem } from "@mui/material";
import { useState } from "react";
import { Party } from "@/typeDefs/typeDef";
import styles from './AddConstituentForm.module.css';

export const AddConstituentForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [party, setParty] = useState<Party | ''>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');

  // would pull this from auth login/app state info in a real app
  const representativeId = 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      case 'party':
        setParty(e.target.value as Party);
        break;
      case 'city':
        setCity(e.target.value);
        break;
      case 'state':
        setState(e.target.value);
        break;
    }
  }

  const handleSubmit = () => {
    const constituent = {
      name,
      email,
      phone,
      party,
      city,
      state,
      representative_id: representativeId,
    }

    const requestBody = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(constituent)
    }

    fetch('http://localhost:4000/constituent', requestBody)
      .then(res => res.json())
      .then((data) => {
        console.log('Constituent added', data);
        window.location.href = "/";
      })
      .catch((e) => {
        console.error(e);
      })
  }

  return (
    <div className={styles.form}>
      <TextField 
        placeholder="John Doe" 
        label="Name"
        name="name"
        required
        onChange={handleInputChange}
        variant='outlined'
        value={name}
      />
      <TextField 
        placeholder="john.doe@mail.com" 
        label="Email"
        name="email"
        required
        onChange={handleInputChange}
        value={email}
      />
      <TextField 
        placeholder="###-##-####" 
        label="Phone number"
        name="phone"
        required
        onChange={handleInputChange}
        value={phone}
      />
      <TextField 
        placeholder="Political Party" 
        label="Political Party"
        name="party"
        required
        onChange={handleInputChange}
        select
        value={party}
        style={{width: '100%'}}
      >
        {Object.values(Party).map((party) => (
          <MenuItem key={party} value={party}>
            {party}
          </MenuItem>
        ))}
      </TextField>
      <TextField 
        placeholder="Denver" 
        label="City"
        name="city"
        required
        onChange={handleInputChange}
        value={city}
      />
      <TextField 
        placeholder="CO" 
        label="State"
        name="state"
        required
        onChange={handleInputChange}
        value={state}
      />
      <Button variant='contained' onClick={handleSubmit} disabled={ !name || !email || !phone || !party || !city || !state}>Add Constituent</Button>
    </div>
  )
}