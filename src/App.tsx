import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { invoke } from '@tauri-apps/api/tauri';

function App() {
  const { t, i18n } = useTranslation();
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke('greet', { name }));
  }

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">{t('common.welcome')}</h1>
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {i18n.language === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
          </button>
        </div>

        <p className="text-lg text-muted-foreground mb-8">{t('common.description')}</p>

        <div className="max-w-md space-y-4">
          <div>
            <label htmlFor="name-input" className="block text-sm font-medium mb-2">
              {t('common.appName')} Test
            </label>
            <input
              id="name-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter a name..."
              className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <button
            onClick={greet}
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {t('actions.confirm')}
          </button>

          {greetMsg && (
            <div className="p-4 bg-card border border-border rounded-md">
              <p className="text-card-foreground">{greetMsg}</p>
            </div>
          )}
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ Tauri + React + TypeScript</li>
            <li>✅ Tailwind CSS with dark mode support</li>
            <li>✅ i18n (EN/FR) with react-i18next</li>
            <li>✅ Radix UI ready</li>
            <li>✅ Cross-platform (macOS, Linux, Windows)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
