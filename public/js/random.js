const randomize = async () => {
   await fetch('/dashboard-random', {
      method: 'GET'
    });


  };
  
  document.querySelector('#randomize').addEventListener('click', randomize);
  