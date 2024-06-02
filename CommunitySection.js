import React from 'react';

const CommunitySection = () => {
  return (
    <div style={{
      width: 992,
      height: 332.80,
      paddingTop: 61.61,
      paddingBottom: 62.40,
      paddingLeft: 260.50,
      paddingRight: 260.50,
      background: 'white',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 24,
      display: 'inline-flex'
    }}>
      {/* Your CommunitySection content */}
      <div style={{
        width: 992,
        paddingLeft: 240.29,
        paddingRight: 241.29,
        background: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'inline-flex'
      }}>
        {/* Inner content */}
      </div>
      <div style={{ paddingBottom: 0.79 }}>
        <div style={{ textAlign: 'center' }}>
          <span style={{
            color: 'white',
            fontSize: 24,
            fontFamily: 'FONTSPRING DEMO - Roca One Rg',
            fontWeight: '400',
            lineHeight: 30,
            wordWrap: 'break-word'
          }}>Join our growing <br />community of <br />35,000</span>
          <span style={{
            color: 'white',
            fontSize: 24,
            fontFamily: 'Proxima Nova',
            fontWeight: '400',
            lineHeight: 30,
            wordWrap: 'break-word'
          }}>+</span>
          <span style={{
            color: 'white',
            fontSize: 24,
            fontFamily: 'FONTSPRING DEMO - Roca One Rg',
            fontWeight: '400',
            lineHeight: 30,
            wordWrap: 'break-word'
          }}> alumni</span>
        </div>
      </div>
      <div style={{
        height: 36,
        paddingTop: 9.09,
        paddingBottom: 9.11,
        paddingLeft: 113.36,
        paddingRight: 113.36,
        background: 'linear-gradient(111deg, #F56563 0%, #E54988 100%)',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'inline-flex'
      }}>
        {/* Inner content */}
      </div>
      <div style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 17.35,
        display: 'inline-flex'
      }}>
        {/* Inner content */}
      </div>
    </div>
  );
}

export default CommunitySection;
