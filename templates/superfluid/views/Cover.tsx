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
        backgroundColor: '#ff0000',
        backgroundImage: 'linear-gradient(to bottom, #ff0000, #800080, #000000)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        {config.profpic && config.profpic.trim().length !== 0 && <div
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
            <img src={config.profpic} width="150" height="150" />
          </div>
        </div>}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '40px',
        }}
      >

        {config.username && config.username.trim().length !== 0 && <div
          style={{
            display: 'flex',
            color: 'white',
            fontSize: '60px',
            fontWeight: 'bold',
          }}
        >
          @{config.username}
        </div>}
        {config.address && <div style={{
          display: 'flex',
          color: 'white',
          fontSize: '40px',
          marginTop: '20px',
        }}>{(config.address.length > 10) ? config.address.substring(0, 5) + "..." + config.address.substring(config.address.length - 5) : config.address}</div>}
        {!config.username && !config.address && <div style={{
          display: 'flex',
          color: 'white',
          fontSize: '40px',
          marginTop: '20px',
        }}>please set username and address</div>}
        {config.username && config.address && <div
          style={{
            display: 'flex',
            color: 'white',
            fontSize: '40px',
            marginTop: '20px',
          }}
        >
          click 'send' to send stream
        </div>}
        {config.username && config.address && <div
          style={{
            display: 'flex',
            color: 'white',
            fontSize: '40px',
            marginTop: '10px',
          }}
        >
          click 'stream' to see latest stream
        </div>}
      </div>
    </div>
  )
}
