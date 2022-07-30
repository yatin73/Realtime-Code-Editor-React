import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success('New Room Created!');
  };

  const joinRoom = () => {
    if(!roomId || !username) {
      toast.error('Room ID & Username is Required.');
      return;
    }
    // Redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      }
    });
  }

  const handleInputEnter = (e) => {
    if(e.code === 'Enter'){
      joinRoom();
    }
  }


  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img className='homeLogo' src='/logo.png' alt='Logo' />
        <h4 className='mainLabel'>Paste Invitation ROOM ID</h4>
        <div className='inputGroup'>
          <input
            type='text'
            className='inputBox'
            placeholder='ROOM ID'
            onChange={ (e) => setRoomId(e.target.value) }
            value={roomId}
            onKeyUp={handleInputEnter}
            autoFocus={true}
          />
          <input
            type='text'
            className='inputBox'
            placeholder='USERNAME'
            onChange={ (e) => setUsername(e.target.value) }
            value={username}
            onKeyUp={handleInputEnter}
          />
          <button onClick={joinRoom} className='btn joinBtn'>Join</button>
          <span className='createInfo'>
            If you don't have an invite than create &nbsp;
            <a onClick={createNewRoom} href='' className='createNewBtn'>new room</a>
          </span>
        </div>
      </div>

      <footer>
        <h4>Built with 💛 by Yatin</h4>
      </footer>
    </div>
  )
}

export default Home