import './App.css';
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuctionForm></AuctionForm>
      </header>
    </div>
  );
}

function AuctionForm(){

  const [selectedImage, setSelectedImage] = useState('');
  const [itemName, setItemName] = useState('')
  const [startingBid, setStartingBid] = useState('')
  const [date, setDate] = useState('')
  const [email, setEmail] = useState('')
  const [isTncCheck, setIsTncChecked] = useState(false)

  const nullInputField =()=>{
    setSelectedImage('')
    setItemName('')
    setStartingBid('')
    setDate('')
    setEmail('')
    setIsTncChecked(false)
  }

  const handleImageChange =(e)=>{
    setSelectedImage(e.target.files[0]);
  }

  const handleItemNameChange =(e)=>{
    setItemName(e.target.value)
  }

  const handleStartingBidChange =(e)=>{
    setStartingBid(e.target.value)
  }

  const handleDateChange =(e)=>{
    setDate(e.target.value)
  }

  const handleEmailChange =(e)=>{
    setEmail(e.target.value)
  }

  const handleTnCCheckChange =(e)=>{
    setIsTncChecked(e.target.checked)
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!isTncCheck){
      alert('You must agree to terms and conditions')
      return
    }
    alert(`Thankyou for using our service, We'll contact you on ${date} through ${email} for your ${itemName} auction results`);
    nullInputField();
  }
  

  return (
    <form className="form" onSubmit={(e) => {handleSubmit(e)}}>
      <h1>Auto Auction Form</h1>
      
      {selectedImage && (
        <div className='imageDisplay'>
          <img
            width={"150px"}
            src={URL.createObjectURL(selectedImage)}
            alt="not found"
          />
        </div>
      )}

      <InputField inputType={"file"} name={"Upload Image:"} onChange={handleImageChange}></InputField>
      
      <InputField inputType={"text"} name={"Item Name:"} placeholder={"Item Name"} value={itemName} onChange={handleItemNameChange}></InputField>
      
      <InputField inputType={"number"} name={"Starting Bid:"} placeholder={"Rp. 10.000"} value={startingBid} onChange={handleStartingBidChange}></InputField>
      
      <InputField inputType={"date"} name={"Set End Date:"} value={date} onChange={handleDateChange}></InputField>
      
      <InputField inputType={"email"} name={"Email Contact:"} placeholder={"example@gmail.com"} value={email} onChange={handleEmailChange}></InputField>

      <div className="form-check" style={{width:"300px"}}>
        <input type="checkbox" className="form-check-input" checked={isTncCheck} onChange={handleTnCCheckChange}/>
        <label className="form-check-label">
          I Agree to terms and conditions
        </label>
      </div>
      
      <div className="text-center">
        <InputField inputType={"submit"} className="btn btn-primary" value="submit"></InputField>
      </div>
      
      
      
    </form>
  )
}

function InputField({inputType, name, placeholder, value, onChange, className}){
    return (
      <div className="form-group d-flex align-items-center justify-content-center">
        <label className='form-label'>{name}
          <br/>
          <input style={{width:"300px"}} className={className? className: 'form-control center'} type={inputType} placeholder={placeholder} value={value} required onChange={(e) => {onChange(e)}} />
        </label>
      </div>
    )
}


export default App;
