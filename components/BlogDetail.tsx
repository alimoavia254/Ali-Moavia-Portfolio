import React, { useEffect, useState } from 'react';
import { ArrowLeft, Share2, Check } from 'lucide-react';

interface BlogDetailProps {
  onBack: () => void;
}

export function BlogDetail({ onBack }: BlogDetailProps) {
  const [shared, setShared] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = async () => {
    const shareData = {
        title: 'Advanced Digital Forensic Tool v3.0',
        text: 'Check out this forensic tool by Ali Moavia & Mehwish Naz.',
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
    <div className="adft-page-wrapper">
      <style>{`
        .adft-page-wrapper {
            background: #f4f7fb;
            font-family: 'Inter', sans-serif;
            color: #1e2b3f;
            line-height: 1.6;
            min-height: 100vh;
        }

        .adft-content-area {
            padding: 2rem 1.5rem;
        }

        .portfolio-container {
            max-width: 1300px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 32px;
            box-shadow: 0 20px 40px -10px rgba(0,20,40,0.12), 0 8px 24px -8px rgba(0,32,64,0.1);
            overflow: hidden;
        }

        /* header area */
        .project-header {
            padding: 2.5rem 3rem 1.5rem 3rem;
            background: linear-gradient(145deg, #fafcff 0%, #ffffff 100%);
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
            font-size: 3.2rem;
            font-weight: 700;
            letter-spacing: -1px;
            background: linear-gradient(145deg, #0a2942, #1b3b5c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.2;
        }
        .title-main .subhead {
            font-size: 1.2rem;
            font-weight: 400;
            color: #466282;
            margin-top: 10px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .title-main .subhead i {
            color: #2f7e9e;
        }

        .creators-tag {
            background: #edf3f9;
            padding: 0.8rem 2rem;
            border-radius: 60px;
            display: flex;
            gap: 2.5rem;
            box-shadow: inset 0 1px 3px #00000010;
        }
        .creator {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .creator i {
            font-size: 1.8rem;
            color: #1b4c6e;
            background: white;
            border-radius: 50%;
            padding: 8px;
            box-shadow: 0 4px 8px #00000010;
        }
        .creator-info h4 {
            font-weight: 700;
            font-size: 1.2rem;
            color: #0b2a41;
        }
        .creator-info p {
            font-size: 0.85rem;
            color: #55728c;
        }

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
            font-size: 1.4rem;
            width: 36px;
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

        .main-content {
            padding: 2.5rem 3rem 3rem 3rem;
        }

        .section-title {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 2rem;
            font-weight: 600;
            color: #163A5F;
            margin: 2.5rem 0 1.5rem 0;
            border-bottom: 2px solid #d4e0f0;
            padding-bottom: 0.6rem;
        }
        .section-title i {
            color: #2a6b9c;
            font-size: 2.2rem;
        }

        .lead-text {
            font-size: 1.2rem;
            color: #234a6b;
            background: #f0f6fe;
            padding: 2rem 2.5rem;
            border-radius: 24px;
            margin: 20px 0 30px 0;
            border-left: 8px solid #326e9c;
            box-shadow: 0 8px 16px -12px #183f5f30;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
            margin: 35px 0 30px 0;
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
            font-size: 2.5rem;
            color: #1f5f8b;
            margin-bottom: 20px;
        }
        .feature-card h3 {
            font-size: 1.7rem;
            font-weight: 600;
            color: #143650;
            margin-bottom: 12px;
        }
        .feature-card p {
            color: #3b5570;
            font-size: 0.98rem;
        }
        .feature-tag {
            display: inline-block;
            background: #e2edfb;
            font-size: 0.8rem;
            font-weight: 600;
            padding: 0.3rem 1.2rem;
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
            border-radius: 24px;
            padding: 2rem;
            font-family: 'Fira Code', monospace;
            font-size: 0.9rem;
            line-height: 1.7;
            margin: 30px 0 25px 0;
            border-left: 8px solid #4287b5;
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

        .feature-list {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            margin: 20px 0 30px 0;
        }
        .feature-list li {
            background: #ffffff;
            border: 1px solid #bed6f0;
            padding: 0.7rem 1.8rem;
            border-radius: 60px;
            font-weight: 600;
            color: #1b4870;
            box-shadow: 0 2px 4px #d4e2f5;
            font-size: 0.95rem;
        }
        .feature-list li i {
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
            .title-main h1 { font-size: 2.5rem; }
        }
      `}</style>

      {/* Sticky Header */}
      <div className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-md shadow-sm">
         <div className="max-w-[1300px] mx-auto h-16 flex items-center justify-between px-6">
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

      <div className="adft-content-area">
        <div className="portfolio-container">
            {/* header with professional identity */}
            <div className="project-header">
                <div className="breadcrumb">
                    <button onClick={onBack}><i className="fas fa-home"></i> portfolio</button>
                    <i className="fas fa-chevron-right"></i>
                    <span>projects</span>
                    <i className="fas fa-chevron-right"></i>
                    <span style={{ fontWeight: 600 }}>ADF-Tool</span>
                </div>
                <div className="title-row">
                    <div className="title-main">
                        <h1>Advanced Digital Forensic Tool</h1>
                        <div className="subhead">
                            <i className="fas fa-microchip"></i>
                            <span>comprehensive artifact acquisition · machine learning anomaly detection · anti‑forensic countermeasures</span>
                        </div>
                    </div>
                    <div className="creators-tag">
                        <div className="creator">
                            <i className="fas fa-user-tie"></i>
                            <div className="creator-info">
                                <h4>Ali Moavia</h4>
                                <p>forensic architect</p>
                            </div>
                        </div>
                        <div className="creator">
                            <i className="fas fa-user-graduate"></i>
                            <div className="creator-info">
                                <h4>Mehwish Naz</h4>
                                <p>ML & integrity specialist</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* meta information / tech stack */}
                <div className="meta-bar">
                    <div className="meta-item">
                        <i className="fab fa-python"></i>
                        <div><span className="label">language</span><div className="value">Python 3.11+</div></div>
                    </div>
                    <div className="meta-item">
                        <i className="fas fa-layer-group"></i>
                        <div><span className="label">collection layers</span><div className="value">browser · usb · network · memory · logs</div></div>
                    </div>
                    <div className="meta-item">
                        <i className="fas fa-robot"></i>
                        <div><span className="label">ML core</span><div className="value">Isolation Forest · Random Forest</div></div>
                    </div>
                    <div className="meta-item">
                        <i className="fas fa-calendar-alt"></i>
                        <div><span className="label">developed</span><div className="value">Q1 2025 · v3.0</div></div>
                    </div>
                </div>
            </div>

            {/* main write‑up */}
            <div className="main-content">
                {/* overview */}
                <div className="lead-text">
                    <i className="fas fa-quote-left" style={{ marginRight: '8px', opacity: 0.6 }}></i>
                    ADF-Tool is an enterprise‑grade forensic acquisition framework that automates the collection of over 20 artifact classes. It integrates anti‑forensic detection, machine learning‑based anomaly identification, and cryptographic integrity verification — designed for incident responders and security analysts.
                </div>

                {/* architecture & capabilities */}
                <div className="section-title">
                    <i className="fas fa-diagram-project"></i> forensic capabilities
                </div>
                <div className="feature-grid">
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fas fa-globe"></i></div>
                        <h3>Browser artifacts</h3>
                        <p>Extracts history, cookies, logins, and cached data from Chrome, Firefox, Edge, Brave, Opera, Safari — even from running processes.</p>
                        <span className="feature-tag">6+ browsers</span>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fas fa-usb"></i></div>
                        <h3>USB history</h3>
                        <p>Deep registry parsing (Windows), udev/syslog analysis (Linux), ioreg/system_profiler (macOS). Tracks first/last connection, vendor IDs, serials.</p>
                        <span className="feature-tag">cross‑platform</span>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fas fa-network-wired"></i></div>
                        <h3>Network forensics</h3>
                        <p>Active connections, ARP cache, routing tables, firewall rules, DNS cache, and log‑based connection reconstruction.</p>
                        <span className="feature-tag">real‑time & logs</span>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fas fa-memory"></i></div>
                        <h3>Memory artifacts</h3>
                        <p>Process listings, open file handles, network connections per PID — essential for volatility‑ready triage.</p>
                        <span className="feature-tag">psutil deep scan</span>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fas fa-chart-line"></i></div>
                        <h3>ML anomaly detection</h3>
                        <p>Isolation Forest trained on file metadata, browser history, system events. Flags outliers with explainable features.</p>
                        <span className="feature-tag">scikit‑learn</span>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><i className="fas fa-shield-halved"></i></div>
                        <h3>Anti‑forensic counter‑measures</h3>
                        <p>Detects rootkits, hidden processes, time stomping, and excessive file modifications. Logs suspicious patterns.</p>
                        <span className="feature-tag">integrity first</span>
                    </div>
                </div>

                {/* core implementation snippet (professional) */}
                <div className="section-title">
                    <i className="fas fa-code"></i> integrity & hash‑chaining
                </div>
                <p style={{ marginBottom: '15px' }}>Every collected file is hashed (SHA‑256 by default) and verified after copy to ensure bit‑perfect preservation. Directory‑wide hash manifests enable later validation.</p>
                <div className="code-sample">
                    <span className="comment"># hash‑verified copy with integrity log</span><br />
                    <span className="keyword">def</span> <span className="func">_copy_firefox_profile</span>(self, src_profile, dest_profile):<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">for</span> db <span className="keyword">in</span> self.browser_paths[<span className="string">'Firefox'</span>][<span className="string">'databases'</span>]:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src_db = src_profile / db<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">if</span> src_db.exists():<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;original_hash = self._calculate_file_hash(src_db)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shutil.copy2(src_db, dest_profile / db)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;copied_hash = self._calculate_file_hash(dest_profile / db)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">if</span> original_hash != copied_hash:<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">raise</span> ValueError(<span className="string">"hash mismatch - corruption"</span>)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._create_hash_log(src_db, dest_profile / <span className="string">"file_hashes.log"</span>)<br />
                    <span className="comment"># ... parallel threads for multi‑browser collection</span>
                </div>

                {/* tech stack badges */}
                <div className="tech-badge-container">
                    <span className="tech-badge"><i className="fab fa-python"></i> python3</span>
                    <span className="tech-badge"><i className="fas fa-database"></i> sqlite3 · winreg</span>
                    <span className="tech-badge"><i className="fas fa-brain"></i> sklearn · pandas</span>
                    <span className="tech-badge"><i className="fas fa-chart-pie"></i> matplotlib · seaborn</span>
                    <span className="tech-badge"><i className="fas fa-lock"></i> hashlib · integrity</span>
                    <span className="tech-badge"><i className="fas fa-terminal"></i> multi‑threading</span>
                </div>

                {/* key features as bullet list */}
                <div className="section-title">
                    <i className="fas fa-cogs"></i> key differentiators
                </div>
                <ul className="feature-list">
                    <li><i className="fas fa-check-circle"></i> automated dependency installer</li>
                    <li><i className="fas fa-check-circle"></i> 6+ browser profile extraction</li>
                    <li><i className="fas fa-check-circle"></i> cross‑platform USB artifact reconstruction</li>
                    <li><i className="fas fa-check-circle"></i> ML‑based anomaly scoring (Isolation Forest)</li>
                    <li><i className="fas fa-check-circle"></i> anti‑forensic detection (rootkit, timestomp)</li>
                    <li><i className="fas fa-check-circle"></i> HTML/CSV/JSON reporting + master report</li>
                    <li><i className="fas fa-check-circle"></i> Tkinter GUI & CLI with progress</li>
                </ul>

                {/* sample report output (visual) */}
                <div className="section-title">
                    <i className="fas fa-file-alt"></i> reporting & presentation
                </div>
                <p style={{ marginBottom: '20px' }}>All collected data is structured into a timestamped directory with subfolders for each artifact class. The tool generates a comprehensive master HTML report with links to detailed per‑category reports, including ML anomaly tables.</p>
                <div style={{ background: '#eaf2fb', borderRadius: '24px', padding: '1.5rem', border: '1px solid #b9d1ef' }}>
                    <i className="fas fa-folder-open" style={{ color: '#1b5f8b', fontSize: '1.8rem', float: 'left', marginRight: '20px' }}></i>
                    <code style={{ fontFamily: "'Fira Code', monospace", color: '#13324b' }}>
                    Forensic_Collection_20250321_1430/<br />
                    ├── Browser_Data/ [Chrome, Firefox, Edge …]<br />
                    ├── USB_History/ usb_devices_*.csv<br />
                    ├── Network_Forensics/ active_connections.txt, arp_cache.txt<br />
                    ├── ML_Models/ ml_anomalies.csv, feature_importance.png<br />
                    ├── Anti_Forensic_Detection/ findings.json<br />
                    ├── Reports/ forensic_report.html (master) + 6 detailed reports<br />
                    └── collection_manifest.json  (integrity hashes)
                    </code>
                </div>

                {/* ethical & professional context */}
                <hr />
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', background: '#f0f7ff', borderRadius: '32px', padding: '2rem', margin: '40px 0' }}>
                    <i className="fas fa-gavel" style={{ fontSize: '3rem', color: '#2b6c9e' }}></i>
                    <div>
                        <h3 style={{ fontWeight: 700, color: '#103858' }}>intended use & chain‑of‑custody</h3>
                        <p style={{ color: '#2b4b68' }}>ADF‑Tool is designed for authorised incident response, digital forensic education, and internal security audits. It implements hash verification at every copy step to support evidentiary integrity. The authors emphasise responsible usage and compliance with all applicable laws.</p>
                    </div>
                </div>

                {/* footer with portfolio context */}
                <div className="footer-note">
                    <div className="copyright">
                        <i className="far fa-registered"></i> 
                        <span>Ali Moavia & Mehwish Naz · 2025 · all rights reserved</span>
                    </div>
                    <div>
                        <a href="https://github.com/alimoavia254" target="_blank" rel="noreferrer" className="btn-outline"><i className="fab fa-github"></i> private repository</a>
                        <button onClick={handleShare} className="btn-outline" style={{ marginLeft: '12px' }}><i className="fas fa-share-alt"></i> share tool</button>
                    </div>
                </div>
                <p style={{ textAlign: 'right', fontSize: '0.8rem', color: '#71869e', marginTop: '20px' }}>showcasing advanced forensic engineering · updated feb 2026</p>
            </div>
        </div>
      </div>
    </div>
  );
}