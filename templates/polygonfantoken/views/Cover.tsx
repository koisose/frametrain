import type { Config } from '..'

export default function CoverView(config: Config) {
    return (
        <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '40px',
            border: '2px solid #e0e0e0',
            borderRadius: '20px',
            width: '90%',
          }}
        >
          <h2 style={{ margin: '0 0 30px 0', fontSize: '48px', fontWeight: 'bold' }}>Fan Token Details</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#888', fontSize: '24px' }}>Fan Token Name</span>
              <p style={{ margin: '10px 0', fontSize: '36px', fontWeight: 'bold' }}>sogen</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#888', fontSize: '24px' }}>Price per Token</span>
              <p style={{ margin: '10px 0', fontSize: '36px', fontWeight: 'bold' }}>0.16 MOXIE</p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#888', fontSize: '24px' }}>24h Change</span>
              <p style={{ margin: '10px 0', fontSize: '36px', fontWeight: 'bold', color: 'green' }}>0.00%</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#888', fontSize: '24px' }}>Volume</span>
              <p style={{ margin: '10px 0', fontSize: '36px', fontWeight: 'bold' }}>12,541.99 MOXIE</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
            <span style={{ color: '#888', fontSize: '24px' }}>Holders</span>
            <p style={{ margin: '10px 0', fontSize: '36px', fontWeight: 'bold' }}>1</p>
          </div>
          <h2 style={{ margin: '0 0 30px 0', fontSize: '48px', fontWeight: 'bold' }}>Moxie Reward Distribution</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ color: '#888', fontSize: '24px' }}>Creator</span>
              <p style={{ margin: '10px 0', fontSize: '36px', fontWeight: 'bold' }}>50%</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ color: '#888', fontSize: '24px' }}>Creator Fans</span>
              <p style={{ margin: '10px 0', fontSize: '36px', fontWeight: 'bold' }}>20%</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ color: '#888', fontSize: '24px' }}>Channel Fans</span>
              <p style={{ margin: '10px 0', fontSize: '36px', fontWeight: 'bold' }}>20%</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ color: '#888', fontSize: '24px' }}>Network</span>
              <p style={{ margin: '10px 0', fontSize: '36px', fontWeight: 'bold' }}>10%</p>
            </div>
          </div>
        </div>
      </div>
      );
}
