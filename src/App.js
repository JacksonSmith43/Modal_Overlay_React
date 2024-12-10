import './App.css';
import { useRef, useState } from 'react';

function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAcceptedOfferVisible, setIsAcceptedOfferVisible] = useState(false);
  const [isShowOfferButtonVisible, setIsShowOfferButton] = useState(true);


  return (
    <div className="App">

      <button className={`show-offer-button ${isShowOfferButtonVisible ? "visible" : "hidden"}`} onClick={handleShowOffer}>Show offer.</button>

      <div className={`modal-container  ${isModalVisible ? "visible" : "hidden"}`}>
        <div className='modal-contents'>
          <p className='modal-text'>Click the button below to accept our amazing offer.</p>

          <button onClick={handleAcceptOffer} className='accept-offer-button'>Accept offer</button>
          <button className='close-button' onClick={handleCloseModal}>X</button>
        </div>
      </div >

      <p className={`offer-accepted-message ${isAcceptedOfferVisible ? "visible" : "hidden"}`}>Offer accepted.</p>
    </div >
  );



  function handleShowOffer() {
    setIsModalVisible(true);
    setIsShowOfferButton(false);
    console.log("Hola.");
  }

  function handleAcceptOffer() {
    setIsAcceptedOfferVisible(true);
    setIsModalVisible(false);
    setIsShowOfferButton(false);

  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setIsShowOfferButton(true);

  }

}

export default App;
