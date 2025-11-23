import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [time, setTime] = useState(new Date().toLocaleTimeString('fr-FR'));

  const greetings = [
    'Salut',
    'Bonjour',
    'Coucou',
    'Hello',
    'Hey',
    'Bienvenue'
  ];

  const handleGreet = () => {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(name ? `${randomGreeting}, ${name}! 👋` : `${randomGreeting}! 👋`);
    setTime(new Date().toLocaleTimeString('fr-FR'));
  };

  return (
    <>
      <Head>
        <title>Salut! - Application de Salutation</title>
        <meta name="description" content="Une application interactive de salutation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Salut! 🎉</h1>
          <p style={styles.subtitle}>Bienvenue sur cette application interactive</p>

          <div style={styles.inputGroup}>
            <input
              type="text"
              placeholder="Entrez votre nom..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleGreet()}
              style={styles.input}
            />
            <button onClick={handleGreet} style={styles.button}>
              Dire Bonjour
            </button>
          </div>

          {greeting && (
            <div style={styles.greetingBox}>
              <h2 style={styles.greeting}>{greeting}</h2>
              <p style={styles.time}>Heure: {time}</p>
            </div>
          )}

          <div style={styles.footer}>
            <p>Créé avec Next.js et React 💙</p>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  card: {
    background: 'white',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center'
  },
  title: {
    fontSize: '3rem',
    margin: '0 0 10px 0',
    color: '#333',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#666',
    margin: '0 0 30px 0'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '30px'
  },
  input: {
    padding: '15px',
    fontSize: '1rem',
    border: '2px solid #e0e0e0',
    borderRadius: '10px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    padding: '15px 30px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: 'white',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  greetingBox: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '30px',
    borderRadius: '15px',
    marginBottom: '20px',
    animation: 'fadeIn 0.5s'
  },
  greeting: {
    fontSize: '2rem',
    color: 'white',
    margin: '0 0 10px 0'
  },
  time: {
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.9)',
    margin: 0
  },
  footer: {
    marginTop: '20px',
    fontSize: '0.9rem',
    color: '#999'
  }
};
