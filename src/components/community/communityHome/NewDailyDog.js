import React, { useEffect } from 'react';

function NewDailyDog(props) {

  useEffect(() => {
    const newDailyDogData = async () => {
      try {
        
      } catch (err) {
        console.error(err);
      }
    }
    newDailyDogData();
  }, [])

  return (
    <div>
      
    </div>
  );
}

export default NewDailyDog;