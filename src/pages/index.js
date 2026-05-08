import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Hellnet Docs"
      description="Documentation hub for Hellnet projects, labs, services, and platform tooling."
    >
      <main className="heroPage">
        <section className="heroContent">
          <p className="eyebrow">Hellnet Foundation</p>
          <h1>Documentation</h1>
          <p className="lead">
            Central documentation hub for Hellnet projects, labs, services, and
            internal platform tooling.
          </p>
          <div className="projectGrid">
            <Link className="projectCard" to="/soc-ai-relay/">
              <h2>SOC AI Relay</h2>
              <p>
                DFIR-IRIS alert summarization using Ollama and Discord notifications.
              </p>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
