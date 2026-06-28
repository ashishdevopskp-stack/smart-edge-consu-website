import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Smart Edge Education Consultancy — Admission & Career Guidance in Patna, Bihar'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(140deg, #0D1F4F 0%, #1565C0 55%, #1976D2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '64px 80px',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top amber accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #F59E0B, #FBBF24, #F97316)',
          }}
        />

        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '-80px',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(245,158,11,0.18)',
            border: '1px solid rgba(245,158,11,0.4)',
            borderRadius: '50px',
            padding: '8px 20px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#F59E0B',
            }}
          />
          <span
            style={{
              color: '#FCD34D',
              fontSize: '16px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Patna, Bihar · Est. Since 2010
          </span>
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: '60px',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '8px',
          }}
        >
          Smart Edge
        </div>
        <div
          style={{
            fontSize: '60px',
            fontWeight: 800,
            color: '#FCD34D',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '28px',
          }}
        >
          Education Consultancy
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '24px',
            color: '#BFDBFE',
            lineHeight: 1.5,
            maxWidth: '700px',
            marginBottom: '48px',
          }}
        >
          Trusted College Admission Guidance for Engineering, Medical,
          Management, Law & Distance Education across India.
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: '0px',
          }}
        >
          {[
            { num: '500+', lbl: 'Universities' },
            { num: '20K+', lbl: 'Students Placed' },
            { num: '98%',  lbl: 'Success Rate'   },
          ].map((s, i) => (
            <div
              key={s.lbl}
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingRight: '40px',
                marginRight: '40px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.2)' : 'none',
              }}
            >
              <span
                style={{
                  fontSize: '36px',
                  fontWeight: 800,
                  color: '#F59E0B',
                  lineHeight: 1,
                }}
              >
                {s.num}
              </span>
              <span style={{ fontSize: '14px', color: '#93C5FD', marginTop: '4px' }}>
                {s.lbl}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            right: '80px',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.45)',
          }}
        >
          www.smartedgeeducationconsultancy.com
        </div>

        {/* Phone */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '80px',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.6)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          📞 +91 9576461623
        </div>
      </div>
    ),
    { ...size }
  )
}