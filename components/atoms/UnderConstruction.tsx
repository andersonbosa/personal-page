import { useTranslations } from 'next-intl';
import React from 'react';

const UnderConstruction: React.FC = () => {
  const t = useTranslations('UnderConstruction')
  return (
    <div style={{ textAlign: 'center', padding: '50px' }} className="text-neutral-400">
      <h1>{t('title')}</h1>
    </div>
  );
};

export default UnderConstruction;
