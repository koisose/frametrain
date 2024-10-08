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
          backgroundColor: '#FFFDD0',
          fontFamily: '"Comic Sans MS", cursive',
          fontSize: 60,
          fontWeight: 600,
          textAlign: 'center',
          color: '#333',
          padding: '40px',
          lineHeight: 1.2,
        }}
      >
        <div>moxie fan token wishlist</div>
        <div>i have 6 wish</div>
        <div style={{ fontSize: 48 }}>
          click &apos;start&apos; to see my wishlist
        </div>
        <div style={{ 
          fontSize: 24, 
          fontWeight: 400, 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px', marginTop: '10px'
        }}>
          payment powered by
          <img 
            src="https://docs.paywithglide.xyz/primary.svg" 
            alt="Glide Logo"
            width="150"
            height="40"
          />
        </div>
      </div>
    )
}
