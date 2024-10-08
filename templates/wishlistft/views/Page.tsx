import type { Config } from '..'
import template from '../'

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
          fontFamily: 'sans-serif',
          padding: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            border: '2px dashed #000000',
            padding: '10px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #000000', padding: '5px', width: '48%', fontSize: '12px' }}>
              <div style={{ display: 'flex', fontWeight: 'bold' }}>Fan token:</div>
              <div style={{ display: 'flex' }}>panda</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #000000', padding: '5px', width: '48%', fontSize: '12px' }}>
              <div style={{ display: 'flex', fontWeight: 'bold' }}>Price:</div>
              <div style={{ display: 'flex' }}>100000 moxie</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #000000', padding: '5px', marginBottom: '10px', fontSize: '12px' }}>
            <div style={{ display: 'flex', fontWeight: 'bold', marginBottom: '3px' }}>Progress:</div>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '20px', backgroundColor: '#FFFFFF', border: '1px solid #000000' }}>
              <div style={{ display: 'flex', width: '30%', height: '100%', backgroundColor: '#90EE90' }} />
              <div style={{ display: 'flex', marginLeft: 'auto', marginRight: '5px', fontSize: '10px' }}>0/10</div>
            </div>
          </div>
          <div style={{ display: 'flex', fontWeight: 'bold', marginBottom: '5px', fontSize: '12px' }}>Top giver:</div>
          {[1, 2, 3].map((_, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid #000000', padding: '5px', marginBottom: '5px', fontSize: '10px' }}>
              <div style={{ display: 'flex' }}>0x02f...2282</div>
              <div style={{ display: 'flex' }}>5 panda</div>
            </div>
          ))}
        </div>
      </div>
    )
}
