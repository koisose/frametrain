import type { Config } from '..'
function Cover(){
    return ( <div style={{
        width: '1200px',
        height: '630px',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        color: '#000000',
      }}>
        <div style={{
          width: '800px',
          height: '400px',
          border: '2px solid #e0e0e0',
          borderRadius: '24px',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '16px',
              backgroundColor: '#4CAF50',
              marginRight: '20px',
            }} />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                fontSize: '28px',
                fontWeight: 'bold',
              }}>
                0x70c8...Bcd3
              </div>
            
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '16px 24px',
            border: '2px solid #e0e0e0',
            borderRadius: '40px',
            fontSize: '28px',
          
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#FF4136',
              marginRight: '16px',
            }} />
            <span>OP Sepolia </span>
          </div>
          <div style={{
            marginTop: '40px',
            fontFamily: 'cursive',
            fontSize: '48px',
            textAlign: 'center',
          }}>
            send your stream by clicking 'send'
          </div>
        </div>
      </div>)
}
function Balance(){
    return (<div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: 16,
            padding: 32,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ fontSize: 100, fontWeight: 'bold', marginBottom: 16 }}>SUPER TOKEN BALANCE</div>
          <div
            style={{
              width: 64,
              height: 64,
              backgroundColor: '#4ade80',
              borderRadius: 16,
              marginBottom: 16,
            }}
          />
          <div style={{ fontSize: 100, fontWeight: 'bold', marginBottom: 8 }}>0x70c8...Bcd3</div>
          <div style={{ fontSize: 100, color: '#666', marginBottom: 24 }}>0 ETH</div>
          
         
        </div>
      </div>)
}
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
        backgroundColor: '#ff0000',
        backgroundImage: 'linear-gradient(to bottom, #ff0000, #800080, #000000)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            backgroundColor: '#800080',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '100px',
              color: 'white',
            }}
          >
            F
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            color: 'white',
            fontSize: '60px',
            fontWeight: 'bold',
          }}
        >
          Farcastles
        </div>
        <div
          style={{
            display: 'flex',
            color: 'white',
            fontSize: '40px',
            marginTop: '20px',
          }}
        >
          click 'send' to send stream
        </div>
        <div
          style={{
            display: 'flex',
            color: 'white',
            fontSize: '40px',
            marginTop: '10px',
          }}
        >
          click 'stream' to see latest stream
        </div>
      </div>
    </div>
    )
}
