import Layout from 'components/layout';
import { AppContext } from 'context/AppContext';
import React, { useContext } from 'react';

function SettingsPage() {
  const { state, setTheme } = useContext(AppContext);
  const themeOptions = [{ value: 'them-light' }, { value: 'theme-dark' }];

  const handleSelect = (e: any) => {
    setTheme(e);
  };

  return (
    <Layout title="Settings">
      <main>
        <h3>Settings</h3>
        <p>Current theme: {state.appTheme}</p>
        <select
          value={state.appTheme}
          onChange={e => handleSelect(e.currentTarget.value)}>
          {themeOptions.map((option, idx) => (
            <option value={option.value} key={idx}>
              {option.value}
            </option>
          ))}
        </select>
      </main>
    </Layout>
  );
}

export default SettingsPage;
