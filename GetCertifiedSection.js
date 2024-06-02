import React from 'react';

const GetCertifiedSection = () => {
  return (
    <div style={{
      width: 992,
      height: 416,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 30,
      paddingBottom: 30,
      background: 'black',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 14,
      display: 'inline-flex'
    }}>
      {/* Your GetCertifiedSection content */}
      <div style={{
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25,
        display: 'inline-flex'
      }}>
        {/* Inner content */}
      </div>
      <img style={{ width: 361, height: 252 }} src="https://via.placeholder.com/361x252" alt="placeholder" />
    </div>
  );
}

export default GetCertifiedSection;
