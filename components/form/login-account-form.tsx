import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const LoginAccountForm = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (otp: string) => {
    setOtp(otp);
  };

  return (
    <>
      <h1 className="text-gray-400 font-bold text-[16px] mb-4">
        Profile lock is currently ON
      </h1>
      {error ? (
        <h2 className="tetx-red-500 text-center font-bold text-[20px]">
          Whoops, wrong PIN. Please try again
        </h2>
      ) : (
        <h2 className="text-white text-center font-bold text-[20px]">
          Enter your PIN to accedd this profile
        </h2>
      )}
      <form>
        {/* Boshqa form elementlari */}
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          renderSeparator={<span style={{ margin: '0 10px' }}>-</span>}
          renderInput={(props) => (
            <input
              {...props}
              style={{
                width: '70px',
                height: '70px',
                fontSize: '40px',
                border: '1px solid white',
                textAlign: 'center',
                margin: '10px',
              }}
            />
          )}
        />
        {/* Boshqa form elementlari */}
      </form>
    </>
  );
};

export default LoginAccountForm;
