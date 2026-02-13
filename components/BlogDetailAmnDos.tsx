import React, { useEffect, useState } from 'react';
import { ArrowLeft, Share2, Check } from 'lucide-react';

interface BlogDetailAmnDosProps {
  onBack: () => void;
}

export function BlogDetailAmnDos({ onBack }: BlogDetailAmnDosProps) {
  const [shared, setShared] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = async () => {
    const shareData = {
        title: 'AMN-DOS Security Tool',
        text: 'Advanced Network Assessment Tool by Ali Moavia.',
        url: window.location.href
    };

    if (navigator.share) {
        try {
            await navigator.share(shareData);
        } catch (err) {
            console.error('Error sharing:', err);
        }
    } else {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <div className="amn-page-wrapper">
      <style>{`
        /* Scoped styles based on provided CSS */
        .amn-page-wrapper {
            background: #f4f7fb;
            font-family: 'Inter', sans-serif;
            color: #1e2b3f;
            line-height: 1.6;
            min-height: 100vh;
        }

        .amn-content-area {
            padding: 2rem 1.5rem;
        }

        .portfolio-container {
            max-width: 1200px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 32px;
            box-shadow: 0 20px 40px -10px rgba(0,20,40,0.12), 0 8px 24px -8px rgba(0,32,64,0.1);
            overflow: hidden;
        }

        /* header / tool identity */
        .project-header {
            padding: 2.5rem 3rem 1.5rem 3rem;
            background: linear-gradient(135deg, #fafcff 0%, #ffffff 100%);
            border-bottom: 1px solid #e2eaf2;
        }

        .breadcrumb {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
            color: #5b6f87;
            margin-bottom: 1.5rem;
        }
        .breadcrumb i {
            font-size: 0.8rem;
            color: #8a9bb5;
        }
        .breadcrumb button {
            color: #1e4f8a;
            text-decoration: none;
            font-weight: 500;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            font-family: inherit;
        }
        .breadcrumb button:hover {
            text-decoration: underline;
        }

        .title-row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: flex-end;
            gap: 2rem;
        }

        .title-main h1 {
            font-size: 3rem;
            font-weight: 700;
            letter-spacing: -1px;
            background: linear-gradient(145deg, #0a2942, #1b3b5c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.2;
        }
        .title-main .subhead {
            font-size: 1.1rem;
            font-weight: 400;
            color: #466282;
            margin-top: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .title-main .subhead i {
            color: #2f7e9e;
        }

        .creators-tag {
            background: #edf3f9;
            padding: 0.8rem 1.8rem;
            border-radius: 60px;
            display: flex;
            gap: 2rem;
            box-shadow: inset 0 1px 3px #00000010;
        }
        .creator {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .creator i {
            font-size: 1.6rem;
            color: #1b4c6e;
            background: white;
            border-radius: 50%;
            padding: 8px;
            box-shadow: 0 4px 8px #00000010;
        }
        .creator-info h4 {
            font-weight: 700;
            font-size: 1.15rem;
            color: #0b2a41;
        }
        .creator-info p {
            font-size: 0.85rem;
            color: #55728c;
        }

        /* metadata bar */
        .meta-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            margin-top: 30px;
            padding: 1.2rem 0 0.2rem 0;
            border-top: 1px solid #dde5ef;
        }
        .meta-item {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .meta-item i {
            font-size: 1.3rem;
            width: 32px;
            color: #2c6282;
        }
        .meta-item .label {
            font-weight: 600;
            font-size: 0.85rem;
            color: #6b7f99;
            text-transform: uppercase;
            letter-spacing: 0.3px;
        }
        .meta-item .value {
            font-weight: 600;
            color: #1d344a;
        }

        /* main content */
        .main-content {
            padding: 2.5rem 3rem 3rem 3rem;
        }

        .section-title {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.8rem;
            font-weight: 600;
            color: #163A5F;
            margin: 2.2rem 0 1.5rem 0;
            border-bottom: 2px solid #d4e0f0;
            padding-bottom: 0.5rem;
        }
        .section-title i {
            color: #2a6b9c;
            font-size: 2rem;
        }

        .lead-text {
            font-size: 1.2rem;
            color: #234a6b;
            background: #f0f6fe;
            padding: 1.8rem 2rem;
            border-radius: 24px;
            margin: 10px 0 30px 0;
            border-left: 6px solid #326e9c;
            box-shadow: 0 8px 16px -12px #183f5f30;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 28px;
            margin: 35px 0 25px 0;
        }

        .feature-card {
            background: #ffffff;
            border: 1px solid #e1eaf2;
            border-radius: 28px;
            padding: 2rem 1.8rem;
            box-shadow: 0 5px 0 #d1deed;
            transition: 0.15s ease;
        }
        .feature-card:hover {
            border-color: #8fb4d9;
            box-shadow: 0 8px 0 #b2cbe4;
        }
        .feature-icon {
            font-size: 2.4rem;
            color: #1f5f8b;
            margin-bottom: 20px;
        }
        .feature-card h3 {
            font-size: 1.6rem;
            font-weight: 600;
            color: #143650;
            margin-bottom: 10px;
        }
        .feature-card p {
            color: #3b5570;
            font-size: 0.95rem;
        }
        .feature-tag {
            display: inline-block;
            background: #e2edfb;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 0.3rem 1rem;
            border-radius: 20px;
            margin-top: 18px;
            color: #1b5385;
        }

        .tech-badge-container {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin: 25px 0 30px 0;
        }
        .tech-badge {
            background: #eaf1fa;
            color: #1b4b74;
            padding: 0.6rem 1.6rem;
            border-radius: 40px;
            font-weight: 500;
            font-size: 0.9rem;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid #bdd2ec;
        }

        .code-sample {
            background: #0b1e2f;
            color: #dae5f5;
            border-radius: 20px;
            padding: 1.8rem;
            font-family: 'Fira Code', monospace;
            font-size: 0.9rem;
            line-height: 1.6;
            margin: 30px 0 25px 0;
            border-left: 6px solid #4287b5;
            overflow-x: auto;
            box-shadow: 0 20px 30px -12px #102c4030;
        }
        .code-sample .comment {
            color: #7b98b3;
        }
        .code-sample .keyword {
            color: #ffb5a0;
        }
        .code-sample .func {
            color: #b3e1ff;
        }
        .code-sample .string {
            color: #c7e895;
        }

        .attack-list {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin: 20px 0 30px 0;
        }
        .attack-list li {
            background: #ffffff;
            border: 1px solid #bed6f0;
            padding: 0.7rem 1.6rem;
            border-radius: 60px;
            font-weight: 600;
            color: #1b4870;
            box-shadow: 0 2px 4px #d4e2f5;
        }
        .attack-list li i {
            color: #206694;
            margin-right: 8px;
        }

        hr {
            border: none;
            border-top: 2px solid #e2ebf5;
            margin: 40px 0 20px 0;
        }

        .footer-note {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
            padding: 1.8rem 0 0.5rem 0;
            color: #50748e;
            border-top: 1px solid #d0ddee;
            margin-top: 40px;
        }
        .footer-note .copyright {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .btn-outline {
            border: 1px solid #1b4c74;
            background: transparent;
            padding: 0.5rem 1.8rem;
            border-radius: 30px;
            font-weight: 600;
            color: #1b4c74;
            transition: 0.15s;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
        }
        .btn-outline:hover {
            background: #1b4c74;
            color: white;
        }

        @media (max-width: 800px) {
            .project-header, .main-content { padding: 2rem 1.5rem; }
            .title-row { flex-direction: column; align-items: flex-start; }
            .creators-tag { width: 100%; justify-content: space-around; }
        }
      `}</style>

      {/* Header Bar */}
      <div className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-md shadow-sm">
         <div className="max-w-[1200px] mx-auto h-16 flex items-center justify-between px-6">
            <button 
                onClick={onBack}
                className="flex items-center gap-2 text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
                <ArrowLeft size={20} /> Back to Portfolio
            </button>
             <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition-colors"
            >
                {shared ? <Check size={18} /> : <Share2 size={18} />}
                <span>{shared ? 'Copied' : 'Share'}</span>
            </button>
         </div>
      </div>

      <div className="amn-content-area">
        <div className="portfolio-container">
            {/* header area with professional identity */}
            <div className="project-header">
                <div className="breadcrumb">
                    <button onClick={onBack}><i className="fas fa-home"></i> portfolio</button>
                    <i className="fas fa-chevron-right"></i>
                    <span>projects</span>
                    <i className="fas fa-chevron-right"></i>
                    <span style={{ fontWeight: 600 }}>AMN-DOS</span>
                </div>
                <div className="title-row">
                    <div className="title-main">
                        <h1>AMN-DOS</h1>
                        <div className="subhead">
                            <i className="fas fa-cubes"></i>
                            <span>Advanced multi‑layer network assessment tool</span>
                        </div>
                    </div>
                    <div className="creators-tag">
                        <div className="creator">
                            <i className="fas fa-user-tie"></i>
                            <div className="creator-info">
                                <h4>Ali Moavia</h4>
                                <p>offensive security engineer</p>
                            </div>
                        </div>
                        <div className="creator">
                            <i className="fas fa-user-graduate"></i>
                            <div className="creator-info">
                                <h4>Mehwish Naz</h4>
                                <p>network protocol specialist</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* meta information / tech stack */}
                <div className="meta-bar">
                    <div className="meta-item">
                        <i className="fas fa-code-branch"></i>
                        <div><span className="label">language</span><div className="value">Python 3.11+</div></div>
                    </div>
                    <div className="meta-item">
                        <i className="fas fa-shield-halved"></i>
                        <div><span className="label">layers</span><div className="value">HTTP/s · TCP · slowloris</div></div>
                    </div>
                    <div className="meta-item">
                        <i className="fas fa-microchip"></i>
                        <div><span className="label">concurrency</span><div className="value">thread‑based (unlimited)</div></div>
                    </div>
                    <div className="meta-item">
                        <i className="fas fa-calendar-alt"></i>
                        <div><span className="label">developed</span><div className="value">Q1 2025</div></div>
                    </div>
                </div>
            </div>

            {/* main write‑up: professional tone */}
            <div className="main-content">
                {/* overview */}
                <div className="lead-text">
                    <i className="fas fa-quote-left" style={{ marginRight: '8px', opacity: 0.6 }}></i>
                    AMN-DOS is a proof‑concept stress tool that combines three distinct attack vectors into one modular framework. 
                    Built for educational and red team assessments, it demonstrates advanced socket handling, application‑layer evasion, and resource exhaustion patterns.
                </div>

                {/* what it does / architecture highlights */}
                <div className="section-title">
                    <i className="fas fa-diagram-project"></i> architecture & capabilities
                </div>
                <div className="feature-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fas fa-globe"></i></div>
                        <h3>HTTP flood</h3>
                        <p>Rotating user‑agents, referers and X‑Forwarded‑For spoofing. Uses <code style={{ background: '#ecf3fb' }}>requests.get()</code> with low timeout to maximise request rate.</p>
                        <span className="feature-tag">layer 7 evasion</span>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fas fa-hourglass"></i></div>
                        <h3>Slowloris</h3>
                        <p>Partial HTTP headers sent every 15 seconds to hold connections open. Consumes server connection slots with minimal bandwidth.</p>
                        <span className="feature-tag">CVE‑2007‑6750</span>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fas fa-plug"></i></div>
                        <h3>TCP SYN flood</h3>
                        <p>Rapid TCP handshake attempts using standard sockets with short timeouts. Demonstrates backpressure and connection queue saturation.</p>
                        <span className="feature-tag">transport layer</span>
                    </div>
                </div>

                {/* code insight with professional formatting */}
                <div className="section-title">
                    <i className="fas fa-code"></i> core implementation
                </div>
                <p style={{ marginBottom: '12px' }}>The tool uses <strong>Python threading</strong> to launch concurrent workers. Below is the slowloris handler – notice the keep‑alive mechanism via intermittent headers.</p>
                <div className="code-sample">
                    <span className="comment"># slowloris attack : hold connection with partial headers</span><br />
                    <span className="keyword">def</span> <span className="func">send_slowloris</span>(host, port):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">try</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s.connect((host, port))<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s.send(<span className="string">f"GET /?{'{random.randint(0,1000)}'} HTTP/1.1\r\n"</span>.encode())<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s.send(<span className="string">f"Host: {'{host}'}\r\n"</span>.encode())<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">while</span> <span className="string">True</span>:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s.send(<span className="string">f"X-a: {'{random.randint(1,5000)}'}\r\n"</span>.encode())<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;time.sleep(15)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">except</span> Exception:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(<span className="string">"[!] connection dropped"</span>)<br />
                    <span className="comment"># threading example</span><br />
                    threading.Thread(target=send_http_flood, args=(target_url,)).start()
                </div>

                {/* technical stack as badges */}
                <div className="tech-badge-container">
                    <span className="tech-badge"><i className="fab fa-python"></i> python3</span>
                    <span className="tech-badge"><i className="fas fa-network-wired"></i> raw sockets</span>
                    <span className="tech-badge"><i className="fas fa-arrows-spin"></i> multi‑threading</span>
                    <span className="tech-badge"><i className="fas fa-mask"></i> header randomization</span>
                    <span className="tech-badge"><i className="fas fa-clock"></i> slowloris technique</span>
                </div>

                {/* attack modes / parameters (professional summary) */}
                <div className="section-title">
                    <i className="fas fa-sitemap"></i> attack surfaces & configuration
                </div>
                <ul className="attack-list">
                    <li><i className="fas fa-bolt"></i> HTTP flood · concurrency 50+</li>
                    <li><i className="fas fa-bolt"></i> Slowloris · thread‑based hold</li>
                    <li><i className="fas fa-bolt"></i> TCP SYN · high‑frequency connect</li>
                    <li><i className="fas fa-sliders"></i> config: thread count, target URL/port</li>
                </ul>
                <p style={{ marginBottom: '1.8rem' }}>Runtime parameters are collected interactively: target URL, attack mode (http/slowloris/tcp) and number of threads. The tool resolves domains for TCP mode and falls back gracefully.</p>

                {/* original banner is stripped but we keep a minimal tribute */}
                <div style={{ background: '#e2ebf7', borderRadius: '16px', padding: '1.2rem 2rem', margin: '30px 0', borderLeft: '5px solid #1c5f8e' }}>
                    <i className="fas fa-quote-right" style={{ float: 'right', color: '#406e90' }}></i>
                    <p style={{ fontFamily: "'Fira Code', monospace", color: '#1a3d5b', fontSize: '0.9rem' }}>
                    ⚙️ original banner (terminal style) <br />
                    <span style={{ color: '#1a5d8f' }}>██╗  ██╗ █████╗ ███╗   ███╗███╗   ██╗</span>   <strong style={{ color: '#0e3147' }}>AMN-DOS</strong><br />
                    <span style={{ color: '#0a3855' }}>developed by Ali Moavia & Mehwish Naz – multi‑layer stress tool</span>
                    </p>
                </div>

                {/* ethical / professional context */}
                <hr />
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', background: '#f0f7ff', borderRadius: '32px', padding: '2rem', margin: '30px 0' }}>
                    <i className="fas fa-shield-alt" style={{ fontSize: '3rem', color: '#2b6c9e' }}></i>
                    <div>
                        <h3 style={{ fontWeight: 700, color: '#103858' }}>intended use & responsible disclosure</h3>
                        <p style={{ color: '#2b4b68' }}>AMN-DOS was created strictly for educational purposes, network security courses, and authorised red team engagements. The authors emphasise responsible usage and do not condone any unlawful activity. This project highlights low‑level socket programming, concurrency, and application‑layer fuzzing.</p>
                    </div>
                </div>

                {/* footer with portfolio context */}
                <div className="footer-note">
                    <div className="copyright">
                        <i className="far fa-registered" style={{ color: '#4a7291' }}></i> 
                        <span>Ali Moavia & Mehwish Naz · 2025 · all rights reserved</span>
                    </div>
                    <div>
                        <a href="https://github.com/alimoavia254" target="_blank" rel="noreferrer" className="btn-outline"><i className="fab fa-github"></i> private repository</a>
                        <button onClick={handleShare} className="btn-outline" style={{ marginLeft: '12px' }}><i className="fas fa-share-alt"></i> share tool</button>
                    </div>
                </div>

                {/* small note: portfolio piece */}
                <p style={{ textAlign: 'right', fontSize: '0.8rem', color: '#71869e', marginTop: '20px' }}>showcasing network tool development · updated feb 2026</p>
            </div>
        </div>
      </div>
    </div>
  );
}